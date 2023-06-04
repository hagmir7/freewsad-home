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
        code: 'es',
        name: 'Español '
    },
    {
        code: 'fr',
        name: 'Français '
    },


]

const Lang = () => {






    const { i18n } = useTranslation();
    const currentLangCode = coockies.get('i18next') || 'en'
    const currentLanguage = languages.find(lan => lan.code === currentLangCode)
    useEffect(() => {
        document.querySelector('html').dir = currentLanguage.dir || 'ltr'
    }, [currentLanguage])

    

    return (
        <div className="mt-2">
            <Select
                style={{ width: "100%" }}
                defaultValue={i18n.language}
                className="lang"
                onChange={(lang) => {
                    window.location.reload()
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