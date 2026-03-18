import { Link, useNavigate } from "react-router-dom";
import appsData from "../../data/apps.json";
import heroImg from "../../../assets/hero.png";
import starIcon from "../../../assets/icon-ratings.png";
import downloadIcon from "../../../assets/icon-downloads.png";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import { FaCheck, FaClock, FaPowerOff } from "react-icons/fa";
import { BsGrid } from "react-icons/bs";
import { GiCrossedSwords } from "react-icons/gi";

const Home = () => {
  const navigate = useNavigate();
  const trendingApps = appsData.slice(0, 8);

  return (
    <div className="bg-[#F9FAFB] font-sans overflow-hidden">
{/* --- Hero Section --- */}
<section className="text-center pt-20 pb-0 px-4">
    <h1 className="text-5xl md:text-7xl font-black text-[#1A1A1A] leading-tight">
        We Build <br />
        <span className="text-[#7C3AED]">Productive</span> Apps
    </h1>

    <p className="max-w-3xl mx-auto text-gray-500 mt-6 text-lg">
        At HERO.IO, we craft innovative apps designed to make everyday life simpler, 
        smarter, and more exciting. Our goal is to turn your ideas into digital experiences.
    </p>

    <div className="flex justify-center gap-4 mt-10 mb-16">
        <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline border-gray-300 px-8 rounded-lg hover:bg-[#7C3AED] hover:border-[#7C3AED] hover:text-white transition-all"
        >
            Google Play
        </a>

        <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline border-gray-300 px-8 rounded-lg hover:bg-[#7C3AED] hover:border-[#7C3AED] hover:text-white transition-all"
        >
            App Store
        </a>
    </div>

    <div className="relative max-w-2xl mx-auto">
        <img src={heroImg} alt="Hero Mobile" className="w-full h-auto" />
    </div>
</section>


{/* --- Stats Section --- */}
<section className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-400 py-16 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">

  <div className="max-w-4xl mx-auto px-6 text-center text-white">

    <h3 className="text-2xl md:text-3xl font-bold mb-10">
      Trusted By Millions, Built For You
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      <div>
        <p className="text-white/70 text-sm mb-2">Total Downloads</p>
        <h2 className="text-4xl font-extrabold">29.6M</h2>
        <p className="text-white/70 text-sm mt-2">
          21% More Than Last Month
        </p>
      </div>

      <div>
        <p className="text-white/70 text-sm mb-2">Total Reviews</p>
        <h2 className="text-4xl font-extrabold">906K</h2>
        <p className="text-white/70 text-sm mt-2">
          46% More Than Last Month
        </p>
      </div>

      <div>
        <p className="text-white/70 text-sm mb-2">Active Apps</p>
        <h2 className="text-4xl font-extrabold">132+</h2>
        <p className="text-white/70 text-sm mt-2">
          31 More Will Launch
        </p>
      </div>

    </div>
  </div>

</section>

      {/* ================= TRENDING ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Trending Apps
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Explore all trending apps developed by us
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {trendingApps.map((app) => (
            <div
              key={app.id}
              onClick={() => navigate(`/app/${app.id}`)}
              className="cursor-pointer group"
            >
              <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition p-5">

                <div className="bg-gray-100 rounded-2xl h-[180px] flex items-center justify-center mb-5 overflow-hidden">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-24 h-24 object-contain group-hover:scale-110 transition"
                  />
                </div>

                <h3 className="font-semibold text-lg mb-4 group-hover:text-purple-600">
                  {app.title}
                </h3>

                <div className="flex justify-between items-center border-t pt-3 text-sm">

                  <div className="flex items-center gap-2 text-green-500 font-semibold">
                    <img src={downloadIcon} alt="" className="w-4 h-4" />
                    {app.size}M
                  </div>

                  <div className="flex items-center gap-2 text-yellow-500 font-semibold">
                    <img src={starIcon} alt="" className="w-4 h-4" />
                    {app.ratingAvg}
                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

        <div className="text-center mt-16">
          <Link to="/apps">
            <button className="bg-gradient-to-r from-purple-600 to-purple-400 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Show All
            </button>
          </Link>
        </div>

      </section>

    </div>
  );
};

export default Home;