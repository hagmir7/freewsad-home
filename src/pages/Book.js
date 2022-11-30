import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import API from '../api/API'
import GoogleAd from '../components/ads/GoogleAd';
import PostCards from '../components/Post/PostCards';
import PostDetailLoading from '../components/Post/PostDetailLoading';
import SEO from '../components/SEO/SEO';

export const Book = () => {

    React.useEffect(() => {
        getBook();
    })

    const history = useNavigate()
    const { id } = useParams();
    const [data, setData] = React.useState(null)

    const getBook = async () => {
        await API.get(`book/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(respons => {
            setData(respons.data)
        }).catch(error => {
            history('/')
        })
    }
    return (
        <div className="container-lg mt-3" style={{ height: 'auto!important' }}>
            <div className="row" style={{ height: 'auto!important' }}>
                <div className="col-12 col-md-7 col-lg-8 col-xl-8 mb-3 m-0" style={{ height: 'auto!important' }}>
                    {
                        data === null ? <PostDetailLoading /> :
                            <article className="blog-post" style={{ height: 'auto!important' }}>
                                <h1 dir="auto" className="blog-post-title h4 mt-2">{data.name}</h1>

                                <div className='row mx-1'>
                                    <div className="col-12 col-md-12 col-lg-3 col-xl-3 p-0 ">
                                        <div className='card book-img overflow-hidden m-auto'><img src={data.image} alt="" width='100%' height="auto" /></div>
                                    </div>
                                    <div className="col-12 col-lg-9 col-sm-12 p-0 mt-2 mt-lg-0 ps-lg-3 ">
                                        <h2 className='h4 p-0 m-0 d-sm-none'>About Book</h2>
                                        <ul className="list-group">
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                Name
                                                <span className="badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1">{data.name}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                Author
                                                <span className="badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1">{data.author}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                File type
                                                <span className="badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1">{data.file_type}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                Language
                                                <span className="badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1">{data.language}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                Pages
                                                <span className="badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1">{data.pages}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                Date
                                                <span className="badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1">{data.date}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <h2 className='h4 p-0 m-0 mt-3'>Download book</h2>
                                    <label htmlFor="email" className='mt-1 p-0'>Please Enter you email to download</label>
                                    <div className='row p-0'>
                                        <div className='col-md-12 col-lg-6 col-xl-6'>
                                            <input type="text" placeholder='Enter you email' className='form-control rounded-pill' />
                                        </div>
                                        <div className='ccol-md-12 col-lg-6 col-xl-6 text-center mt-md-3 mt-3 mt-xl-0 mt-lg-0'>
                                            <button className='btn btn-primary rounded-pill w-75 ms-1'>Download Book</button>
                                        </div>
                                    </div>
                                    <GoogleAd slot="4567237334" googleAdId="ca-pub-6043226569102012"/>
                                </div>
                                <h3 className='h4 p-0 m-0 mt-2'>Description</h3>
                                <div className='mt-2' dangerouslySetInnerHTML={{ __html: data.description }} />
                                <SEO
                                    title={data.name}
                                    description={data.description.slice(150)}
                                    name='freewsad.com'
                                    type='article'
                                    image={data.image}
                                    url={`https://www.freewsad.com/p/${data.slug}`}
                                    canonical={`/p/${data.slug}`} />
                            </article>

                    }

                </div>
                <div className="col-12 col-md-5 col-lg-4 col-xl-4 position-relative mb-3" style={{ height: 'auto!important' }}>
                    <div className="position-sticky" style={{ top: "55px", height: " auto !important" }}>
                    <GoogleAd slot="4567237334" googleAdId="ca-pub-6043226569102012"/>
                        <div className="p-2 mt-3 bg-light card shadow-sm border">
                            <span className="fst-italic h4 p-1">Copyrights</span>
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
