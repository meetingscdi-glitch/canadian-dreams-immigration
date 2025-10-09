import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FadeInOnScroll from "../pages/FadeInOnScroll";

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
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

    // Back button handler
    const handleBackClick = () => {
        navigate('/our-services');
    };

    if (loading)
        return (
            <div
                className="flex items-center justify-center"
                style={{ minHeight: "calc(100vh - 150px)" }}
            >
                <div
                    style={{
                        border: "4px solid #f3f3f3",
                        borderTop: "4px solid #006AAB",
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                        animation: "spin 1s linear infinite",
                    }}
                />
                <style>
                    {`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}
                </style>
            </div>
        );

    if (!detail) return <p className="text-center py-10">No details found</p>;

    return (
        <>
            <FadeInOnScroll>
                <div className="py-1.5">
                    {detail.image && (
                        <img
                            src={detail.image}
                            alt={detail.name}
                            className="w-full max-h-[40rem] object-cover mb-6"
                        />
                    )}
                    {/* Back Button */}
                    <div className="container mx-auto px-3 mb-4">
                        <button
                            onClick={handleBackClick}
                            className="flex items-center gap-2 text-[#006AAB] hover:text-[#005a94] font-medium mb-4 transition-colors duration-200 cursor-pointer"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                            </svg>
                            Back to Services
                        </button>
                    </div>
                    <div className="container mx-auto px-3 mb-4">
                        <h1 className="text-3xl font-bold mb-4">{detail.name}</h1>

                        {/* --- Custom paired section mapping --- */}
                        {(() => {
                            const pairs = [
                                { headerNum: 1, subHeaderNum: 2, paragraphNum: 1 },
                                { headerNum: 3, subHeaderNum: 3, paragraphNum: 2 },
                                { headerNum: 4, subHeaderNum: 4, paragraphNum: 3 },
                                { headerNum: 5, subHeaderNum: 5, paragraphNum: 4 },
                                { headerNum: 6, subHeaderNum: 6, paragraphNum: 5 },
                                { headerNum: 7, subHeaderNum: 7, paragraphNum: 6 }
                            ];

                            const numberToWord = ["One", "Two", "Three", "Four", "Five", "Six", "Seven"];

                            return pairs.map((pair, index) => {
                                const headerKey = `header${numberToWord[pair.headerNum - 1]}`;
                                const subHeaderKey = `SubHeader${numberToWord[pair.subHeaderNum - 1]}`;
                                const paragraphKey = `paragraph${numberToWord[pair.paragraphNum - 1]}`;

                                const header = detail?.[headerKey];
                                const subHeader = detail?.[subHeaderKey];
                                const paragraph = detail?.[paragraphKey];

                                // Only render if we have at least header or subHeader
                                if (!header && !subHeader) return null;

                                return (
                                    <div key={index} className="mb-8 border-b border-[#00000020] pb-6 last:border-b-0">
                                        {header && (
                                            <h4 className="Roboto-500 md:text-2xl text-xl mb-3 text-[#006AAB]">
                                                {header}
                                            </h4>
                                        )}
                                        {subHeader && (
                                            <h5 className="md:text-xl text-lg mb-3 font-medium text-gray-700">
                                                {subHeader}
                                            </h5>
                                        )}
                                        {paragraph && (
                                            <div
                                                className="md:text-base text-sm text-gray-600 leading-relaxed"
                                                dangerouslySetInnerHTML={{ __html: paragraph }}
                                            />
                                        )}
                                    </div>
                                );
                            });
                        })()}
                    </div>
                </div>
            </FadeInOnScroll>
        </>
    );
};

export default ServiceDetail;
