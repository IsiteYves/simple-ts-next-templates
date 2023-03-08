import React from "react";

 const NotFound = () => {
    return (
        <div className="w-fit h-fit mx-auto mt-[40vh]">
            <h1 className="text-4xl font-bold">Page not found</h1>
            <p className="text-gray-600">This page is currently not available <br /></p>
            <code>Error 0001</code> <br /><br />
            <button className="text-green bg-green  bg-opacity-10 rounded-full py-3 px-6" onClick={() =>  history.back()}>Go Back</button>
        </div>
    )
}

export default NotFound
