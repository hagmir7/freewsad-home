import React from 'react';
import { useParams } from 'react-router-dom';
import PostCards from './PostCards';
import PostDetailLoading from './PostDetailLoading';
import SEO from '../SEO/SEO';
import API from '../../api/API';

export default function Post() {
    const { slug } = useParams();
    const [data, setData] = React.useState(null);

    React.useEffect(()=>{
        loadPost();
        window.scroll(0,0);

    }, [slug])
    

    const loadPost = async () =>{
        await API.get(`post/${slug}`, {
            headers: {
                "Content-Type": 'application/json'
            }
        }).then(response => {
            console.log(response.data)
            setData(response.data)
        }).catch(error => {
            console.log(error)
        })
    }



    return (
        <div className="container-lg mt-3" style={{ height: 'auto!important' }}>
            <div className="row" style={{ height: 'auto!important' }}>
                <div className="col-12 col-md-7 col-lg-8 col-xl-8 mb-3 m-0" style={{ height: 'auto!important' }}>
                    {
                        data === null ? <PostDetailLoading /> :
                        <article className="blog-post" style={{ height: 'auto!important' }}>
                        <h1 dir="auto" className="blog-post-title h4 mt-2">{data.title}</h1>
                        <p dir="auto" className="text-left h6 text-muted">At {data.date} </p>
                        <div dangerouslySetInnerHTML={{ __html: data.body }} />
                        <SEO
                            title={data.title}
                            description={data.description.slice(150)}
                            name='freewsad.com'
                            type='article'
                            image={data.image}
                            url={`https://www.freewsad.com/p/${data.slug}`}
                            canonical={`/p/${data.slug}`} />
                    </article>
                    
                    }
                    
                </div>
                <div className="col-12 col-md-5 col-lg-4 col-xl-4 position-relative" style={{ height: 'auto!important' }}>
                    <div className="position-sticky" style={{ top: "55px", height: " auto !important" }}>
                        <div className="p-2 mt-3 bg-light card shadow-sm border"><span className="fst-italic h4 p-1">Copyrights</span>
                            <div>We respect the property rights of others, and are always careful not to infringe on their rights, so
                                authors and publishing houses have the right to demand that an article or book download link be removed from
                                the site. If you find an article or book of yours and do not agree to the posting of a download link, or you
                                have a suggestion or complaint, write to us through the <a href="/contact" target="_blank">Contact Us
                                </a>, or by e-mail at: <a href="mailto:supprot@freewsad.com" target="_blank">supprot@freewsad.com.</a>
                            </div>
                            <a href="/page/copyrights-sxrmt">Read More</a>
                        </div>

                    </div>
                </div>
            </div>
            <PostCards />
        </div>
    )
}
