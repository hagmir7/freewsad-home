import React from "react";


const LoadingSingle = () => {
    return (
        <div className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-3'>
            <div className="border-0 loading">
                <div className="image rounded"></div>
                <div className="content"><div></div></div>
            </div>
        </div>
    )
}



const PostCardLoading = () => {
    return (
        <>
            <LoadingSingle />
            <LoadingSingle />
            <LoadingSingle />
        </>
    )
};



export default PostCardLoading;