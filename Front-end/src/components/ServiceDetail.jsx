import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ServiceDetail = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    const baseURL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const res = await axios.get(`${baseURL}subService/getSubServicesById/${id}`);
                if (res.data?.serviceSubCategoryData) {
                    setDetail(res.data.serviceSubCategoryData);
                }
            } catch (err) {
                console.error("Error fetching detail:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchDetail();
    }, [id]);

    if (loading)
        return (
            <div
                className="flex items-center justify-center"
                style={{ minHeight: "calc(100vh - 150px)" }} // adjust 150px if you have Navbar/Footer height
            >
                {/* Spinner or loader */}
                <div
                    style={{
                        border: "4px solid #f3f3f3",
                        borderTop: "4px solid #006AAB", // your theme color
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                        animation: "spin 1s linear infinite",
                    }}
                />
                <style>
                    {`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}
                </style>
            </div>
        ); if (!detail) return <p className="text-center py-10">No details found</p>;

    const numberToWord = ["One", "Two", "Three", "Four", "Five", "Six", "Seven"];

    return (
        <>
            <div className="py-1.5">
                {detail.image && (
                    <img
                        src={detail.image}
                        alt={detail.name}
                        className="w-full max-h-[40rem] object-cover mb-6"
                    />
                )}
                <div className="container mx-auto px-3 mb-4">
                    <h1 className="text-3xl font-bold mb-4">{detail.name}</h1>
                    {numberToWord.map((word, i) => {
                    const header = detail[`header${word}`];
                    const subHeader = detail[`SubHeader${word}`];
                    const paragraph = detail[`paragraph${word}`];

                    if (!header) return null;

                    return (
                        <div key={i} className="mb-6">
                            <h2 className="text-2xl font-semibold">{header}</h2>
                            {subHeader && <h3 className="text-lg mt-1">{subHeader}</h3>}
                            {paragraph && (
                                <div
                                    className="mt-2 text-gray-700"
                                    dangerouslySetInnerHTML={{ __html: paragraph }}
                                />
                            )}
                        </div>
                    );
                })}
                </div>
                
            </div>
        </>
    );
};

export default ServiceDetail;
