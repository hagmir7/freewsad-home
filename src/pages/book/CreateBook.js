import React from "react";
import { Input, message, Select } from "antd";
import { useTranslation } from "react-i18next";
import API from "../../api/API";

const { TextArea } = Input;

export default function CreateBook() {
  const { t } = useTranslation();
  const [language, setLanguage] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const [pages, setPages] = React.useState(10);

  const [langId, setLangId] = React.useState();
  const [CatyId, setCatyId] = React.useState();

  const [ spinner, setSpinner] = React.useState(false);


  React.useEffect(()=>{
    Lang();
  }, [])

  // Fetch Language

  const Lang = async () => {
    API.get("/language/list", {
      Headers: {"Content-Type": "application/json",}
    }).then(respons=>{
        let data = []
        respons.data.map(item => data.push({ value: item.id,label: item.name,}))
        setLanguage(data);
    }).catch(error=> message.error(error));
  };

    // Fetch Category
    const Caty = async (value)=>{
        setLangId(value)
        API.get(`book/category/${value}`,{
            Headers: {"Content-Type": "application/json",}
        }).then(respons=>{
            let data = []
            respons.data.map(item => data.push({ value: item.id,label: item.name,}))
            setCategory(data)
        }).catch(error=> message.error(error));
    }


    const CreateBook = async (e) => {
      setSpinner(true);
      e.preventDefault();  
      const form = new FormData(e.target);
      form.append('pages', pages);
      form.append('category', CatyId);
      form.append('language', langId);
      API.post(`book/create`, form,{ Headers: {'Content-Type': 'multipart/form-data'}, })
        .then((respons) => {
            message.success(respons.data.message);
            setSpinner(false);
            e.target.reset();
        })
        .catch((error) => {
            message.error(error.message);
            setSpinner(false);
        } );
    };

    const countPages =(event) => {
        const reader = new FileReader();
        const fileInfo = event.target.files[0];
        if (fileInfo.name.split('.')[1] == 'pdf') {
            reader.readAsBinaryString(event.target.files[0]);
            reader.onloadend = () => {
                const count = reader.result.match(/\/Type[\s]*\/Page[^s]/g).length;
                setPages(count)
            }
        }
    }

  return (
    <div className="container-sm">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={CreateBook} >
            <Input className="mt-2" placeholder={t("Name")} maxLength={150} name="name" required />
            <Input className="mt-2" placeholder={t("Author")} maxLength={50} name="author" required />
            <Select className="w-100 mt-2" onChange={Caty} placeholder={t("Language")} options={language} required />
            <Select className="w-100 mt-2" placeholder={t("Category")} options={category} onChange={(value)=>setCatyId(value) } required/>
            <label htmlFor="image" className="mt-2">Image:</label>
            <input type="file" name="image" accept="image/*" className=" form-control form-control-sm" required/>
            <label htmlFor="file" className="mt-2">File:</label>
            <input type="file" onChange={countPages} name="file" accept="pdf" className="form-control form-control-sm" required/>
            <Input className="mt-2" placeholder={t("Tags")} maxLength={150} name="tags" required />
            <TextArea className="mt-2" name="description" rows={4} placeholder={t("Description")} maxLength={300} required/>
            <button  type="submit" className="btn btn-success mt-2 rounded-pill border-0 w-100">{
                spinner ? <div className="spinner-border" role="status"> </div> :  t("Create book")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
