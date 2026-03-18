import { useNavigate } from "react-router-dom";
import errorImg from "../../../assets/App-Error.png";

const AppNotFound = ({ onGoBack }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (onGoBack) {
      onGoBack();
    } else {
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 sm:px-6 md:px-10 text-center animate-fadeIn">
      
      {/* Image */}
      <div className="relative mb-6 sm:mb-8 md:mb-10">
        <img
          src={errorImg}
          alt="App Not Found"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto object-contain"
        />
      </div>

      {/* Text */}
      <div className="space-y-2 sm:space-y-3 md:space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#1A1A1A]">
          OOPS!! APP NOT FOUND
        </h2>
        <p className="text-gray-500 max-w-xs sm:max-w-sm md:max-w-md mx-auto text-sm sm:text-base md:text-lg">
          The App you are requesting is not found on our system. 
          Please try another app.
        </p>
      </div>

      {/* Button */}
      <div className="mt-6 sm:mt-8 md:mt-10">
        <button
          onClick={handleBackClick}
          className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 sm:px-10 md:px-12 py-2 sm:py-3 md:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg shadow-lg transition-all active:scale-95"
        >
          Go Back!
        </button>
      </div>
    </div>
  );
};

export default AppNotFound;
