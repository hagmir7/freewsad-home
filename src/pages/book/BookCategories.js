import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import API from '../../api/API';
import { message } from 'antd';


const Loading = () => {
    return (<div className="border-0 loading"> <div className="content"><div></div></div></div>)
}


export default function BookCategories() {

    const [categories, setCategories] = useState(false);

    useEffect(() => {
        API.get('book/category', {})
            .then(response => {
                setCategories(response.data)
            }).catch(error => {
                message.error("Loading Faile")
            })

    }, [])
    const { t } = useTranslation()
    return (
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="list-group">
                        {
                            categories ? categories.map((item, index) => {
                                return (
                                    <Link key={index} className="list-group-item list-group-item-action" to={`/books/${item.slug}`}>
                                        <img src="/assets/img/svg/book.svg" alt="Books" width="30px" />&nbsp; {item.name}
                                    </Link>
                                )
                            }) : <><Loading /> <Loading /><Loading /><Loading /><Loading /><Loading /><Loading /></>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
