import React from 'react';
import { useTranslation } from 'react-i18next';
import { DatePicker, Space, InputNumber, Input } from 'antd';




export default function ProfileUpdate(props) {
  const { t } = useTranslation();


  const onChange = (date, dateString) => {
  };
  return (
    <div className="card-body p-0">
        <div className="row mt-2">
          <div className="col-md-3">
            <h6 className="mb-0 mx-3">{t("Full name")}</h6>
          </div>
          <div className='col-md-9 text-secondary px-4'>
          <Input placeholder={t("First name")+ "..."} name='first_name'  defaultValue={props.first_name} />
          <Input placeholder={t("Last name")+ "..."} name='last_name' className='mt-2'  defaultValue={props.last_name} />
          </div>
        </div>
        <hr />
        <div className="row mt-2">
          <div className="col-md-3">
            <h6 className="mb-0 mx-3">{t("Email")}</h6>
          </div>
          <div className="col-md-9 text-secondary px-4">
          <Input placeholder={t("Email")+ "..."} name='email'  defaultValue={props.email} />
          </div>
        </div>
        <hr />
        <div className="row mt-2">
          <div className="col-md-3">
            <h6 className="mb-0 mx-3">{t("Phone")}</h6>
          </div>
          <div className="col-md-9 text-secondary px-4">
              <Input placeholder={t("Phone")+ "..."} name='phone'  defaultValue={props.phone} />
          </div>
        </div>
        <hr />
        <div className="row mt-2">
          <div className="col-md-3">
            <h6 className="mb-0 mx-3">{t("Birth date")}</h6>
          </div>
          <div className="col-md-9 d-flex gap-1 justify-content-between text-secondary px-4">
          <InputNumber onChange={onChange} min={1} max={31} defaultValue={props.birth} className='w-50' placeholder={t("Day")} />
          <DatePicker onChange={onChange} picker="month" className='w-50' placeholder={t("Year and Month")} />
          {/* <input type="date" name="birth" id="birth" value={props.birth}  className='form-control-sm form-control' placeholder={t("Birth date") + "..."} /> */}
          </div>
        </div>
        <hr />
        <div className="row mt-2">
          <div className="col-md-3">
            <h6 className="mb-0 mx-3">{t("City")}</h6>
          </div>
          <div className="col-md-9 text-secondary px-4">
          <Input placeholder={t("City")+ "..."} name='city'  defaultValue={props.city} />
          </div>
        </div>
        <hr />
        <div className="row mt-2">
          <div className="col-md-3">
            <h6 className="mb-0 mx-3">{t("Country")}</h6>
          </div>
          <div className="col-md-9 text-secondary px-4">
          <Input placeholder={t("Country")+ "..."} name='country'  defaultValue={props.country} />
          </div>
        </div>
      </div>


  )
}
