import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function Search() {
    const focus = useRef();

    const { t } = useTranslation();

    React.useEffect(() => {
        if (window.innerWidth > 900) {
            focus.current.focus()
        }
    }, [])

    return (
        <div className="py-4 text-center col-md-7 ">
            <img loading='lazy' className='lazy' src="/assets/img/freewsad-item.webp" alt="freewsad search" width='auto' height="auto" />
            <div className="position-relative" >
                <label htmlFor="search" className="w-100 form-control shadow-sm rounded-pill">
                    <div className="input-group rounded-pill">
                        <span className="input-group-text border-0 bg-white pe-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                            </svg>
                        </span>
                        <input ref={focus} autoComplete="off" type="search" name="search" placeholder={t('Search') + "..."} id="search" className="form-control border-0" />
                    </div>
                </label>
            </div>
        </div>

    )
}
