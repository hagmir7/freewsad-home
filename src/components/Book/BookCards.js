import { message } from 'antd';
import React,{ useEffect} from 'react'
import BookCardComponent from '../Book/BookCardComponent';
import BookLoadingCard from './BookLoadingCard';
// import coockies from 'js-cookie';
// import jsCookie from 'js-cookie';
import { useTranslation } from "react-i18next";
import { useParams } from 'react-router-dom';
import API from '../../api/API';


export default function BookCards() {
    const { i18n } = useTranslation();

    const { category } = useParams();

    const [page, setPage] = React.useState(1);
    const [data, setData] = React.useState('');
    const [sniper, setSniper ] = React.useState(false);
    const [hasNext, setHasNext] = React.useState(true)

    useEffect(() => {
        // loadBooks(page);
        loadMore();
    }, [i18n.language])




    const loadMore = () => {
        setSniper(true);
        setPage(currnetPage => {
            loadBooks(currnetPage);
            return currnetPage + 1;
        })
    }

    const loadBooks = async (pageNumber) => {
        await API.get(`books${category ? "/"+category : ''}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            params: { page: pageNumber }
        }).then(respons => {
            const resulte = respons.data.data;
            console.log(respons)
            setSniper(false);
            if (respons.data.has_next) {
                setData(prePage => {
                    return [...new Set([...prePage, resulte.map((item, index) => {
                        return (<BookCardComponent slug={item.id} title={item.name} image={item.image} key={item.id} />)
                    })])]
                })
            }else{
                setHasNext(false)
            }

        }).catch(error => {
            message.error(error.message)
        })
    }


    return (
        <div className='container-xxl'>
            <div className="row">
                {data !== '' ? data : <BookLoadingCard />}
            </div>
            <div className='d-flex justify-content-center'>
                <button onClick={loadMore} className={hasNext ? 'btn btn-primary mt-3 px-5 rounded-pill':'btn bg-white disabled mt-3 border-0 w-25 rounded-pill' }>
                    {
                        ! sniper ?  hasNext ? "Load More": 'This is All' : <div className="spinner-border" style={{ height: '25px', width: "25px"}} role="status"></div>
                    }
                </button>

            </div>
        </div>
    )
}
