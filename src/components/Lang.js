import { useTranslation } from "react-i18next";
import coockies from 'js-cookie';
import React, { useEffect } from "react";
import { Select } from 'antd';
const { Option } = Select;

const languages = [
    {
        code: 'en',
        name: 'English'
    },
    {
        code: 'ar',
        name: 'العربية',
        dir: 'rtl'
    },
    {
        code: 'fr',
        name: 'Française',
    }


]

const Lang = () => {
    const { i18n } = useTranslation();
    const currentLanguageCode = coockies.get("i18next") || 'en'
    const currentLanguage = languages.find(lan => lan.code === currentLanguageCode)
    useEffect(() => {
        document.querySelector('html').dir = currentLanguage.dir || 'ltr'
    }, [currentLanguage])

    return (
        <div>
            <Select
                style={{ width: 120 }}
                defaultValue={i18n.language}
                className="lang mt-2 mx-2"
                onChange={(lang) => {
                    i18n.changeLanguage(lang);
                }}
            >

                {languages.map(item => (
                    <Option value={item.code} key={item.code}>{item.name}</Option>
                ))}
            </Select>
        </div>
    )
}

export default Lang;