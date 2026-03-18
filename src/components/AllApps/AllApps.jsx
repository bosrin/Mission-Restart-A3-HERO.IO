import { useState } from "react";
import appsData from "../../data/apps.json";
import { Link } from "react-router-dom";
import AppNotFound from "../AppNotFound/AppNotFound";
import starIcon from "../../../assets/icon-ratings.png";
import downloadIcon from "../../../assets/icon-downloads.png";

const AllApps = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredApps = appsData.filter((app) =>
    app.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 py-10 md:py-14 lg:py-16 px-3 sm:px-5 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 mb-2 md:mb-3">
            Our All Applications
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base max-w-xl mx-auto">
            Explore all apps developed by us — crafted for millions of users
          </p>
        </div>

        {/* Search + Count */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12 gap-4">

          <h2 className="font-semibold text-sm sm:text-base md:text-lg text-gray-800">
            {filteredApps.length} Apps Found
          </h2>

          <div className="relative w-full md:max-w-sm">
            <input
              type="text"
              placeholder="Search apps..."
              className="w-full pl-10 pr-4 py-2 md:py-2.5 rounded-xl border border-gray-200 focus:border-[#7C3AED] focus:ring-2 focus:ring-purple-100 outline-none text-sm transition"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 absolute left-3 top-3 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Grid */}
        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-7">
            {filteredApps.map((app) => (
              <Link
                to={`/app/${app.id}`}
                key={app.id}
                className="group bg-white p-3 sm:p-4 md:p-5 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300"
              >
                {/* Image */}
                <div className="bg-gray-50 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 mb-3 md:mb-4 flex items-center justify-center">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="h-14 sm:h-16 md:h-20 object-contain group-hover:scale-110 transition"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 md:mb-3 line-clamp-2 group-hover:text-[#7C3AED] transition">
                  {app.title}
                </h3>

                {/* Stats */}
                <div className="flex justify-between items-center mt-2 md:mt-4">

                  <div className="flex items-center gap-1 text-[10px] sm:text-xs bg-green-50 text-green-600 px-2 py-1 rounded-md">
                    <img src={downloadIcon} alt="" className="w-3 h-3" />
                    {app.size}M
                  </div>

                  <div className="flex items-center gap-1 text-[10px] sm:text-xs bg-orange-50 text-orange-500 px-2 py-1 rounded-md">
                    <img src={starIcon} alt="" className="w-3 h-3" />
                    {app.ratingAvg}
                  </div>

                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-10 md:py-12 bg-white rounded-2xl md:rounded-3xl shadow-sm">
            <AppNotFound onGoBack={() => setSearchQuery("")} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;
