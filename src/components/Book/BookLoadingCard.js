import React from 'react'



const LoadingSingle = () => {
    return (
        <div className='book-card col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 mt-2 px-2'>
            <div className="border-0 loading">
                <div className="image rounded book"></div>
            </div>
        </div>
    )
}



const BookLoadingCard = () => {
    return (
        <>
            <LoadingSingle />
            <LoadingSingle />
            <LoadingSingle />
            <LoadingSingle />
            <LoadingSingle />
            <LoadingSingle />
        </>
    )
};



export default BookLoadingCard;
