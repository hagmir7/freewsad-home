import React from 'react';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { CopyOutlined } from '@ant-design/icons';
import API from '../../api/API';
import { Link } from 'react-router-dom';

const { Search } = Input;

export default function SearchBook() {
    const { t } = useTranslation();
    const [book, setBook] = React.useState('');


    window.onclick = function (event) {
        setBook('')
    }


    const Search = async (query) => {
        const value = query.target.value === '' ? setBook('') : query.target.value;
        await API.get('/book', {
            params: { 'q': value }
        }).then(response => {
            console.log(response.data)
            setBook(response.data.map(item => (<Link to={`/book/${item.id}`} dir="auto" className="list-group-item list-group-item-action">{item.name}</Link>)))
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div style={{ position: 'relative' }}>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input
                    onChange={Search}
                    placeholder={t("Search") + "..."}
                    className='form-control form-control-sm'
                    type='search'
                />

            </div>
            <div className="list-group search-list position-absolute w-100 shadow"
                style={{ zIndex: '99', overflow: "auto", maxHeight: "300px" }}>
                {book}
            </div>
        </div>
    )
}
