import { useNavigate } from "react-router-dom";
import error404Img from "../../assets/error-404.png";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-[85vh] flex flex-col items-center justify-center bg-white px-4 text-center">

            <div className="max-w-md w-full mb-10">
                <img
                    src={error404Img}
                    alt="Oops, page not found!"
                    className="w-full h-auto object-contain mx-auto"
                />
            </div>


            <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-black text-[#1A202C]">
                    Oops, page not found!
                </h1>
                <p className="text-gray-400 text-lg font-medium max-w-sm mx-auto">
                    The page you are looking for is not available.
                </p>
            </div>


            <div className="mt-8">
                <button
                    onClick={() => navigate("/")}
                    className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-12 py-4 h-auto rounded-xl border-none font-bold text-lg transition-all shadow-lg shadow-purple-100 active:scale-95"
                >
                    Go Back!
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;