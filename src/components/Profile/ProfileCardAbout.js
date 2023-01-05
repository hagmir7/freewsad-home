import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ProfileCardAbout(props) {
  const { t } = useTranslation()
  return (
    <div className="card-body p-0">
      <div className="d-flex row mt-2 px-2">
        <div className="col-sm-3 h6">{t("Username")}</div>
        <div className="col-sm-9 text-secondary"> {props.username} </div>
      </div>
      <hr />
      <div className="row mt-2 px-2">
        <div className="col-sm-3 h6">{t("Full name")}</div>
        <div className="col-sm-9 text-secondary"> {props.firstName} {props.lastName} </div>
      </div>
      <hr />
      <div className="row mt-2 px-2">
        <div className="col-sm-3 h6">{t("Email")}</div>
        <div className="col-sm-9 text-secondary">  {props.email} </div>
      </div>
      {
        props.phone ?
        <> <hr />
        <div className="row mt-2 mx-2">
          <div className="col-sm-3 h6">{t("Phone")}</div>
          <div className="col-sm-9 text-secondary"> {props.phone} </div>
        </div> </>: ""
      }
      {
        props.city && props.country ? 
        <> <hr />
          <div className="row mt-2 mx-2">
            <div className="col-sm-3 h6">{t("Address")}</div>
            <div className="col-sm-9 text-secondary"> {props.country}, {props.city} </div>
          </div> </> : ''
        
      }
      </div>
  )
}
