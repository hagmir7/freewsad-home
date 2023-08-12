import React, { useContext, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useParams } from 'react-router-dom';
import coockies from 'js-cookie';
import API from '../api/API';
import GoogleAd from '../components/ads/GoogleAd';
import BookCards from '../components/Book/BookCards';
import PostDetailLoading from '../components/Post/PostDetailLoading';
import SEO from '../components/SEO/SEO';
import AuthContext from '../context/AuthContext';
import NotFound from './404';
import ShearModal from '../components/Book/ShearModal';

export const Book = () => {

    const IsSubscribe = Boolean(localStorage.getItem('email') || localStorage.getItem('authTokens'));
    const { t } = useTranslation()
    const { User } = useContext(AuthContext);
    const history = useNavigate();
    const { id, slug } = useParams();
    const [book, setBook] = useState(null);
    const [email, setEmail] = useState('');
    const [sniper, setSniper] = useState(false);
    const [ error, setError ] = useState(false);


 

    const options = {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      timeZone: 'UTC',
    };

    

    const message = React.useRef();





  const msg = useRef();

  const fetchBook = async () => {
    try {
      if (id || slug) {
        const response = await API.get(`book/${id ? id : slug}`, {
          headers: { 'Content-Type': 'application/json' }
        });
        setBook(response.data);
      } else {
        history('/books');
      }
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchBook();
    window.scrollTo(0, 0);
  }, [id, slug]);


    const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };

    const seveEmail = async () => {
        setSniper(true);
        if (email !== '') {
            await API.post('save-email', { 'email': email }, {
            }).then(respons => {
                if(validateEmail(email)){
                    localStorage.setItem('email', true);
                    window.open(`${process.env.REACT_APP_API}${book.file}`, '_blank');
                    setSniper(false);
                }else{
                    msg.current.innerHTML = t("Your email is not valid!");
                    setSniper(false);
                }
                
            }).catch(error => {
                msg.current.innerHTML = t("Your email is not valid!");
                setSniper(false);
            })
        } else {
            msg.current.innerHTML = t('Please first enter your email to download!');
            setSniper(false);
        }

    }



    return (
      <div className="container-lg mt-3" style={{ height: "auto!important" }}>
        <GoogleAd slot="4567237334" googleAdId="ca-pub-6043226569102012" />
        <div className="row" style={{ height: "auto!important" }}>
          <div
            className="col-12 col-md-7 col-lg-8 col-xl-8 mb-3 m-0 p-1"
            style={{ height: "auto!important" }}
          >
            {book === null ? (
              error ? (
                <NotFound />
              ) : (
                <PostDetailLoading />
              )
            ) : (
              <article
                className="blog-post"
                style={{ height: "auto!important" }}
              >
                <h1 dir="auto" className="blog-post-title h5 mt-2">
                  {" "}
                  {book.name}{" "}
                </h1>

                <div className="row mx-1">
                  <div className="col-12 col-md-12 col-lg-3 col-xl-3 p-0 ">
                    <div className="card book-img overflow-hidden m-auto">
                      <img
                        onLoad={(e) =>
                          (e.target.src = `${process.env.REACT_APP_API}${book.image}`)
                        }
                        src="/assets/img/book-placeholder.png"
                        alt={book.name}
                        width="100%"
                        height="auto"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-9 col-sm-12 p-0 mt-2 mt-lg-0 ps-lg-3 ">
                    <h2 className="h4 p-0 m-0 d-sm-none">{t("About Book")}</h2>
                    <ul className="list-group pe-0 pe-md-3">
                      {!book.author ? (
                        ""
                      ) : (
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          {t("Author")}
                          <span className="badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1">
                            {book.author}
                          </span>
                        </li>
                      )}

                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        {t("File type")}
                        <span className="badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1">
                          {book.book_type ? book.book_type : book.file_type}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        {t("Language")}
                        <span className="badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1">
                          {book.language.name}
                        </span>
                      </li>

                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        {t("Downloads")}
                        <span
                          dir="auto"
                          className="badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1"
                        >
                          {new Intl.NumberFormat(coockies.get("i18next"), {
                            notation: "compact",
                          }).format(book.views)}
                        </span>
                      </li>

                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        {t("Pages")}
                        <span className="badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1">
                          {book.pages}
                        </span>
                      </li>

                      {!book.category ? (
                        ""
                      ) : (
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          {t("Category")}
                          <Link
                            to={`/books/${
                              book.category.slug
                                ? book.category.slug
                                : book.category.id
                            }`.toLocaleLowerCase()}
                            className="badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1"
                            dir="auto"
                          >
                            {book.category.name}
                          </Link>
                        </li>
                      )}

                      {!book.size ? (
                        ""
                      ) : (
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          {t("Size")}
                          <span
                            className="badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1"
                            dir="auto"
                          >
                            {book.size}
                          </span>
                        </li>
                      )}

                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        {t("Date")}
                        <span
                          dir="auto"
                          className="badge bg-primary rounded-pill w-75 fs-6 fw-normal p-1"
                        >
                          {new Intl.DateTimeFormat(
                            coockies.get("i18next"),
                            options
                            ).format(new Date(book.created_at))}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-2"></div>
                  <GoogleAd
                    slot="4567237334"
                    googleAdId="ca-pub-6043226569102012"
                  />
                  {/* Download book */}
                  <h2 className="h4 p-0 m-0 mt-3">{t("Download book")}</h2>
                    <div ref={msg} className='text-danger p-0'></div>
                  {IsSubscribe ? (
                    ""
                  ) : (
                    <label htmlFor="email" className="mt-1 p-0">
                      {t("Please Enter your email to download")}
                    </label>
                  )}
                  <div className="row p-0">
                    <span className="text-danger"></span>
                    {IsSubscribe || User ? (
                      <div className="col-md-12  text-center mt-3">
                        <a
                          href={`${process.env.REACT_APP_API}${book.file}`}
                          className="btn border-0 btn-success rounded-pill w-75 ms-1"
                        >
                          {t("Download Book")}
                        </a>
                      </div>
                    ) : (
                      <>
                        <div className="col-md-12 col-lg-6 col-xl-6">
                          <input
                            onChange={(e) => {
                              setEmail(e.target.value);
                              message.current.innerHTML = "";
                            }}
                            type="email"
                            placeholder={t("Enter you email")}
                            className="form-control rounded-pill"
                          />
                        </div>

                        <div className="col-md-12 col-lg-6 col-xl-6 text-center mt-md-3 mt-3 mt-xl-0 mt-lg-0">
                          <button
                            onClick={seveEmail}
                            className="btn border-0 btn-success rounded-pill w-75 ms-1"
                          >
                            {!sniper ? (
                              t("Download Book")
                            ) : (
                              <div
                                className="spinner-border"
                                style={{ height: "20px", width: "20px" }}
                                role="status"
                              ></div>
                            )}
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                  <GoogleAd
                    slot="4567237334"
                    googleAdId="ca-pub-6043226569102012"
                  />
                </div>
                <h3 className="h4 p-0 m-0 mt-2">{t("Description")}</h3>
                <div
                  className="mt-2"
                  dir="auto"
                  lang="auto"
                  dangerouslySetInnerHTML={{ __html: book.description }}
                />
                <ShearModal title={book.name} />

                <SEO
                  title={book.name}
                  description={book.description.slice(150)}
                  name="freewsad.com"
                  type="article"
                  image={book.image}
                  url={`https://www.freewsad.com/book/${id}`}
                  canonical={`/book/${id}`}
                />
              </article>
            )}
          </div>
          <div
            className="col-12 col-md-5 col-lg-4 col-xl-4 position-relative mb-3"
            style={{ height: "auto!important" }}
          >
            <div
              className="position-sticky"
              style={{ top: "55px", height: " auto !important" }}
            >
              <GoogleAd
                slot="4567237334"
                googleAdId="ca-pub-6043226569102012"
              />
              <div className="p-2 mt-3 bg-light card shadow-sm border">
                <span className="h4 p-1">{t("Copyrights")}</span>
                <div>
                  {t("copyrights_text")}{" "}
                  <Link to="/contact">{t("Contact Us")}</Link>,{" "}
                  {t("or by email at")} :{" "}
                  <a href="mailto:support@freewsad.com">
                    {" "}
                    support@freewsad.com.
                  </a>
                </div>
                <Link to="/about">{t("Read More")}</Link>
              </div>
            </div>
          </div>
        </div>
        <BookCards />
      </div>
    );
}
