import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import BookCardComponent from '../Book/BookCardComponent';
import BookLoadingCard from './BookLoadingCard';
import { useTranslation, useLocation } from "react-i18next";
import { Link, useParams } from 'react-router-dom';
import API from '../../api/API';
import NotFound from '../../pages/404';

export default function BookCards(props) {
    const { i18n, t } = useTranslation();
    const { category } = useParams();

    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [sniper, setSniper] = useState(false);
    const [hasNext, setHasNext] = useState(true);

    const queryParams = new URLSearchParams(window.location.search);

    // Access specific query parameters
    const url = queryParams.get('url');



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

    const loadBooks = async (pageNumber = 1) => {
        try {
            const endpoint = category ? `books/category/${category}` : (props.url ? props.url : 'books/');
            const response = await API.get(endpoint, {
                headers: {
                    'Content-Type': 'application/json'
                },
                params: { page: pageNumber }
            });

            const result = response.data.data;
            setSniper(false);
            setData(prevData => [...prevData, ...result.map(item => (
                <BookCardComponent
                    slug={item.slug || item.id}
                    title={item.name}
                    image={item.image}
                    key={item.id}
                />
            ))]);

            if (result.length === 0) {
                setData(<NotFound />);
            }

            setHasNext(response.data.has_next);
        } catch (error) {
            message.error(error.message);
        }
    };

  
    return (
      <div className="container-xxl">
        <div className='mt-3'>
          <Link
            className={`btn btn-sm fw-normal border ${
              props.url === "books/new" ? "btn-default" : "btn-primary"
            }`}
            to="/books/new"
          >
            {t("New books")}
          </Link>
          <Link
            className={`btn btn-sm mx-2 fw-normal border ${
              props.url === "books/trending" ? "btn-default" : "btn-primary"
            }`}
            to="/books/trending"
          >
            {t("Trending books")}
          </Link>
          <Link
            className={`btn btn-sm fw-normal border mx-2 ${
              props.url === "books/" ? "btn-default" : "btn-primary"
            }`}
            to="/books/"
          >
            {t("Best books")}
          </Link>

          <Link
            className="btn btn-sm fw-normal border btn-primary"
            to="/books/categories"
          >
            {t("Categories")}
          </Link>
        </div>

        <div className="row">
          {data.length > 0 ? data : <BookLoadingCard />}
        </div>
        <div className="d-flex justify-content-center">
          <button
            onClick={loadMore}
            className={`btn mt-3 px-5 rounded-pill ${
              hasNext ? "btn-primary" : "bg-white disabled border-0"
            }`}
            disabled={!hasNext || sniper}
          >
            {sniper ? (
              <div
                className="spinner-border"
                style={{ height: "25px", width: "25px" }}
                role="status"
              ></div>
            ) : hasNext ? (
                t("Load More")
            ) : (
              t("This is All")
            )}
          </button>
        </div>
      </div>
    );
}
