import React from 'react'
import PostCard from './PostCardComponent'
import PostCardLoading from './PostCardLoading'
import api from '../../api/API';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';


export default function PostCards() {


    React.useEffect(() => {
        loadMore()
    }, [])


    const [spiner, setSpener] = React.useState(false);
    const observer = React.useRef();
    const [data, setData] = React.useState('');

    const [page, setPage] = React.useState(1);
    const { t } = useTranslation()

    const loadMore = () => {
        setPage(currnetPage => {
            loadPosts(currnetPage);
            return currnetPage + 1;
        })
    }





    const lastPostElement = React.useCallback(node => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                loadMore()
            }
        })
        if (node) observer.current.observe(node);
    }, [page])


    const loadPosts = async (page_number) => {
        await api.get('/', {
            headers: {
                'Content-Type': 'application/json'
            },
            params: { page: page_number }
        }).then(respons => {

            if (respons.data.has_next) {
                setData(prevList => {
                    setSpener(false);
                    return [...new Set([...prevList, respons.data.data.map((item, index) => {
                        if (respons.data.data.length === index + 1) {
                            return (<PostCard last={lastPostElement} key={item.slug} title={item.title} image={item.image ? item.image : item.imageURL ? item.imageURL : '/assets/img/placholder.png'} slug={item.slug} />)
                        } else {
                            return (<PostCard title={item.title} key={item.slug} image={item.image ? item.image : item.imageURL ? item.imageURL : '/assets/img/placholder.png'} slug={item.slug} />)
                        }
                    }

                    )])]

                })
            } else {

                setData(prevList => {
                    return [...new Set([...prevList, respons.data.data.map((item, index) => {
                        return (<PostCard title={item.title} key={item.slug} image={item.image ? item.image : item.imageURL ? item.imageURL : '/assets/img/placholder.png'} slug={item.slug} />)
                    })])]

                })
                setSpener(true);

            }
        }).catch(error => {
            message.error(error)
        })
    }




    return (

        <>
            <div className='row'>{data}</div>
            {
                !spiner ?
                    <div className='text-center'>
                        <div className='row'>
                            <PostCardLoading />
                        </div>
                        <div className="spinner-border" role="status"></div>
                    </div>
                    :
                    <div className='my-3 d-flex justify-content-center'>
                        <a className="border btn rounded-pill mx-2  disabled bg-white w-50">{t("This is All")}</a>
                    </div>
            }
        </>
    )
}
