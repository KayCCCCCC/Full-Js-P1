import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../Custom/fetchData";
import Loading from "./loadingComponent";
const BlogDetail = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, undefined);
    console.log('>>> check data detail: ', data)
    const handleBack = () => {
        navigate(-1);
    };

    return (
        <React.Fragment>
            <div>
                Hello Blog with ID: {id}
                <button className="bg-blue-500 rounded ml-4 hover:bg-blue-300" onClick={() => handleBack()}>Back</button>
            </div>
            {loading === false && <div className='bg-white text-black text-sm'>
                {data.body}
            </div>}
            <div className="w-[20%] h-[20%] flex items-center justify-center">
                {loading === true && <Loading />}
            </div>
        </React.Fragment>
    );
};

export default BlogDetail;
