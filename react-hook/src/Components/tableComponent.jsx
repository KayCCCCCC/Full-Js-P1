import React from "react";
import { useState, useEffect } from "react";
import useFetch from "../Custom/fetchData";
import Loading from "./loadingComponent";
const Table = () => {
    let { data: dataCovid, loading } = useFetch('https://countriesnow.space/api/v0.1/countries', true)
    return (
        <React.Fragment>
            <h2 className="text-2xl font-bold mb-4">HTML Table</h2>
            {console.log('>>>>> check data: ', dataCovid)}
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="border border-gray-400 py-2 px-4">ISO2</th>
                        <th className="border border-gray-400 py-2 px-4">ISO3</th>
                        <th className="border border-gray-400 py-2 px-4">Country</th>
                    </tr>
                </thead>
                <tbody>
                    {loading === false && dataCovid && dataCovid.length > 0 && dataCovid.map((item, index) => (
                        <tr className={index % 2 === 0 ? "bg-gray-500" : "bg-gray-300"} key={index}>
                            <td className="border border-gray-400 py-2 px-4">{item.iso2}</td>
                            <td className="border border-gray-400 py-2 px-4">{item.iso3}</td>
                            <td className="border border-gray-400 py-2 px-4">{item.country}</td>
                        </tr>
                    ))}
                    {loading === true && <Loading />}
                </tbody>
            </table>
        </React.Fragment >
    )
}

export default Table;