import React from 'react';
import API from '../api/API';

export default function Referal() {

    React.useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        if (!localStorage.getItem('ref') && urlParams.get('ref')) {
            ref(urlParams.get('ref'));
        }
    }, [])

    // Refiral
    const ref = async (slug) => {
        await API.get('/trafiq', {
            params: { 'ref': slug }
        }).then(response => {
            localStorage.setItem('ref', response.data.message)
        }).catch(error => {
            console.log(error)
        })

    }
    return (<></>)
}
