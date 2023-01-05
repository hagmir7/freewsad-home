import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';

export default function NotFound() {


    const { t} = useTranslation
    return (
        <div className="text-center my-5 py-3">
            <h1 className="display-1 fw-bold">404</h1>
            <p className="fs-3"> <span className="text-danger">{t("Opps")}!</span> {t("Page not found")}.</p>
            <p className="lead">{t("The page you're looking for doesn't exist")}. </p>
            <Link to="/" className="btn rounded-pill btn-primary">{t("Go Home")}</Link>
        </div>
    )
}
