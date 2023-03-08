import React from "react";
import {  useRouter } from 'next/router'

 const NotFound = () => {
    const router = useRouter()
    
    return (
        <div className="w-fit h-fit mx-auto mt-[40vh]">
            <h1 className="text-4xl font-bold">Page not found</h1>
            <p className="text-gray-600">This page is currently not available <br /></p>
            <code>Error 0001</code> <br /><br />
            <button className="text-blue-500" onClick={() =>  router.push('/')}>&lt;&nbsp;Back to home</button>
        </div>
    )
}

export default NotFound
