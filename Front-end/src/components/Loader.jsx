import React from 'react';
import Logo from '../assets/images/Logo.png'; // your logo path

const Loader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <div className="relative w-24 h-24">
                {/* <img
                    src={Logo}
                    alt="Loading..."
                    className="w-full h-full object-contain animate-spin-logo"
                /> */}
                <div className="absolute inset-0 rounded-full border-4 border-t-[#006AAB] border-gray-200 animate-spin"></div>
            </div>

            <style>
                {`
          @keyframes spin-logo {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-logo {
            animation: spin-logo 1.5s linear infinite;
          }
          .animate-spin {
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}
            </style>
        </div>
    );
};

export default Loader;
