import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PostCards from './PostCards';
import PostDetailLoading from './PostDetailLoading';
import SEO from '../SEO/SEO';
import API from '../../api/API';
import GoogleAd from '../ads/GoogleAd';
import AuthContext from '../../context/AuthContext'
import { useTranslation } from 'react-i18next';
import { message } from 'antd';

export default function Post() {
    const { slug } = useParams();
    const [data, setData] = React.useState(null);
    const { User } = React.useContext(AuthContext);
    const { t } = useTranslation()

    React.useEffect(() => {
        loadPost();
        window.scroll(0, 0);

    }, [slug])


    const loadPost = async () => {
        await API.get(`post/${slug}`, {
            headers: {
                "Content-Type": 'application/json'
            }
        }).then(response => {
            setData(response.data)
        }).catch(error => {
            message.error(error)
        })
    }

    const date = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };




    return (
        <div className="container-lg mt-3" style={{ height: 'auto!important' }}>
            <div className="row" style={{ height: 'auto!important' }}>
                <div className="col-12 col-md-7 col-lg-8 col-xl-8 mb-3 m-0" style={{ height: 'auto!important' }}>
                    {
                        data === null ? <PostDetailLoading /> :
                            <article className="blog-post" style={{ height: 'auto!important' }}>
                                <GoogleAd slot="4567237334" googleAdId="ca-pub-6043226569102012" />
                                <h1 dir="auto" className="blog-post-title h4 mt-2">{data.title}</h1>
                                <p dir="auto" className="text-left h6 text-muted">{t("At")} {new Date(data.created).toLocaleDateString()} </p>
                                <div dangerouslySetInnerHTML={{ __html: data.body }} />
                                <div>
                                </div>

                                {
                                    User ?
                                    User.is_superuser ? 
                                        <div>
                                            <a className='btn btn-primary rounded-pill' target='_blank' href={`https://public.freewsad.com/post/update/${data.id}`}>Update</a>
                                        </div>
                                        : ''
                                        : ''
                                }

                                <GoogleAd slot="4567237334" googleAdId="ca-pub-6043226569102012" />
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
                <div className="col-12 col-md-5 col-lg-4 col-xl-4 position-relative mb-3" style={{ height: 'auto!important' }}>
                    <div className="position-sticky" style={{ top: "55px", height: " auto !important" }}>
                        <GoogleAd slot="4567237334" googleAdId="ca-pub-6043226569102012" />
                        <div className="p-2 mt-3 bg-light card shadow-sm border">
                            <span className="h4 p-1">{t("Copyrights")}</span>
                            <div>
                                {t("copyrights_text")} <Link to="/contact">{t("Contact Us")}</Link>,
                                {" "} {t("or by email at")} : {" "}
                                <a href="mailto:support@freewsad.com"> support@freewsad.com.</a>
                            </div>
                            <Link to="/about">{t("Read More")}</Link>
                        </div>

                    </div>
                </div>
            </div>
            <PostCards />
        </div>
    )
}
