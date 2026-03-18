import { useNavigate } from "react-router-dom";
import error404Img from "../../../assets/error-404.png"; 

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-[85vh] flex flex-col items-center justify-center bg-white px-4 sm:px-6 md:px-10 text-center">
            
            {/* 404 Image Section */}
            <div className="max-w-xs sm:max-w-sm md:max-w-md w-full mb-6 sm:mb-8 md:mb-10">
                <img 
                    src={error404Img} 
                    alt="404 Page Not Found" 
                    className="w-full h-auto object-contain mx-auto"
                />
            </div>

            {/* Text Content */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#1A202C]">
                    Oops, page not found!
                </h1>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg font-medium max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                    The page you are looking for is not available.
                </p>
            </div>

            {/* Go Back Button */}
            <div className="mt-6 sm:mt-8 md:mt-10">
                <button 
                    onClick={() => navigate("/")}
                    className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 sm:px-10 md:px-12 py-2 sm:py-3 md:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg shadow-lg shadow-purple-100 transition-all active:scale-95"
                >
                    Go Back!
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;
