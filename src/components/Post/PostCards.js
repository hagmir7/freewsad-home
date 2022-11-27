import React from 'react'
import axios from 'axios';
import PostCard from './PostCardComponent'
import PostCardLoading from './PostCardLoading'
import api from '../../api/API';




export default function PostCards() {


    React.useEffect(() => {
        loadMore()
    }, [])


    const [spiner, setSpener] = React.useState(false);
    const observer = React.useRef();
    const [data, setData] = React.useState('');

    const [page, setPage] = React.useState(1);
    const [hasNext, setHasNext] = React.useState(true);

    const loadMore = () => {
        setPage(currnetPage => {
            loadPosts(currnetPage);
            return currnetPage + 2;
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
                            return (<PostCard last={lastPostElement} title={item.title} image={item.image ? item.title : item.imageURL} slug={item.slug} />)
                        } else {
                            return (<PostCard title={item.title} image={item.image ? item.title : item.imageURL} slug={item.slug} />)
                        }
                    }

                    )])]

                })
            } else {
                setHasNext(false)
                setSpener(true);

            }
        }).catch(error => {
            console.log(error)
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
                        <a class="border btn rounded-pill mx-2  disabled bg-white w-50">This is All</a>
                    </div>
            }
        </>
    )
}
