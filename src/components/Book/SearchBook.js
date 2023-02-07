import React from 'react';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { SearchOutlined } from '@ant-design/icons';
import API from '../../api/API';
import { Link } from 'react-router-dom';


export default function SearchBook(props) {
    const { t } = useTranslation();
    const [book, setBook] = React.useState(false);


    window.onclick = function (event) {
        setBook('')
    }


    const Search = async (query) => {
        const value = query.target.value === '' ? setBook('') : query.target.value;
        await API.get('/book', {
            params: { 'q': value }
        }).then(response => {
            setBook(response.data.map(item => (<Link to={`/book/${item.id}`} dir="auto" className="list-group-item list-group-item-action">{item.name}</Link>)))
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="px-2 postion-relative w-100 overflo-hidden">

            <div class="input-group p-0 m-0">
                <span class="input-group-text" id="basic-addon1"><SearchOutlined /></span>
                <input
                    onChange={Search}
                    placeholder={t("Search") + "..."}
                    className='form-control form-control-sm'
                    type='search'
                />
            {props.delete}
            </div>
            <div className="list-group search-list position-absolute w-100 shadow"
                style={{ zIndex: '99', overflow: "auto", maxHeight: "300px" }}>
                {book}
            </div>
        </div>
    )
}
