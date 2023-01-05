import React from 'react'
import { useTranslation } from 'react-i18next'

export default function ProfileCard(props) {
    const { t } = useTranslation()
    return (
        <div className="card-body">
            <div className="d-flex flex-column align-items-center text-center">
                <img src={props.image} alt="Admin" className="rounded-circle" width="150" />
                <div className="mt-3">
                    <h4>{props.firstName} {props.lastName}</h4>
                    <p className="text-secondary mb-1">{t("Followers")} (145)</p>
                    <p className="text-muted font-size-sm">{props.bio}</p>
                    <button className="btn btn-primary rounded-pill">{t("Follow")}</button>
                </div>
            </div>
        </div>
    )
}
