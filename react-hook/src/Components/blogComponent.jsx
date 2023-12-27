import React from "react";
import useFetch from "../Custom/fetchData";
import Loading from "./loadingComponent";
import { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import Popup from "./modalComponent";
const Blog = () => {
    const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts', false);
    let newData = null;
    if (data && data.length > 0) {
        newData = data.slice(0, 10);
    }

    return (
        <React.Fragment>
            <Popup />
            <h2 className="text-2xl font-bold mb-4">Blog Post</h2>
            {console.log('>>>>> check data: ', newData)}
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="border border-gray-400 py-2 px-4">ID</th>
                        <th className="border border-gray-400 py-2 px-4">Title</th>
                        <th className="border border-gray-400 py-2 px-4">Content</th>
                    </tr>
                </thead>
                <tbody>
                    {loading === false && newData && newData.length > 0 && newData.map((item, index) => (
                        <tr className={index % 2 === 0 ? "bg-gray-500" : "bg-gray-300"} key={index}>
                            <td className="border border-gray-400 py-2 px-4">{item.id}</td>
                            <td className="border border-gray-400 py-2 px-4">{item.title}</td>
                            <td className="border border-gray-400 py-2 px-4 text-blue-500 underline hover:text-blue-700"><NavLink to={`/blog/${item.id}`}>Blog Detail</NavLink></td>
                        </tr>
                    ))}
                    {loading === true && <Loading />}
                </tbody>
            </table>
        </React.Fragment >
    )
}
export default Blog;