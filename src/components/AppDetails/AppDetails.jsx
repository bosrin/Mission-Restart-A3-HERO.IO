import { useParams } from "react-router-dom";
import { useState } from "react";
import appsData from "../../data/apps.json";
import AppNotFound from "../AppNotFound/AppNotFound";

const AppDetails = () => {
  const { id } = useParams();

  const app = appsData.find((item) => String(item.id) === String(id));

  const [isInstalled, setIsInstalled] = useState(() => {
    if (!app) return false;
    const savedData = localStorage.getItem("installed-apps");
    if (savedData) {
      try {
        const savedApps = JSON.parse(savedData);
        return savedApps.some((item) => item.id === app.id);
      } catch {
        return false;
      }
    }
    return false;
  });

  const handleInstall = () => {
    if (!app) return;

    const savedApps = JSON.parse(localStorage.getItem("installed-apps")) || [];

    const isExist = savedApps.find((item) => item.id === app.id);

    if (!isExist) {
      const newApps = [...savedApps, app];
      localStorage.setItem("installed-apps", JSON.stringify(newApps));
      setIsInstalled(true);
    }
  };

  if (!app) return <AppNotFound />;

  const defaultRatings = [
    { name: "5 star", count: 11000 },
    { name: "4 star", count: 6000 },
    { name: "3 star", count: 2500 },
    { name: "2 star", count: 1500 },
    { name: "1 star", count: 800 },
  ];

  const ratingsData =
    app.ratings && app.ratings.length > 0 ? app.ratings : defaultRatings;

  const totalReviews = ratingsData.reduce((sum, item) => sum + item.count, 0);
  const maxRating = Math.max(...ratingsData.map((item) => item.count));

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6 md:px-8 lg:px-10 bg-white rounded-xl shadow-sm">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row gap-6 border-b border-gray-200 pb-6">

        {/* Image */}
        <img
          src={app.image}
          alt={app.title}
          className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-contain bg-gray-100 p-4 rounded-lg"
        />

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700">
            {app.title}
          </h1>

          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Developed by{" "}
            <span className="text-blue-500 font-medium">
              {app.companyName}
            </span>
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-5">
            <div>
              <p className="text-green-500 text-lg">⬇</p>
              <p className="text-xs sm:text-sm text-gray-400">Downloads</p>
              <p className="font-semibold text-lg sm:text-xl text-gray-700">
                {Math.floor(app.downloads / 1000000)}M
              </p>
            </div>

            <div>
              <p className="text-orange-400 text-lg">★</p>
              <p className="text-xs sm:text-sm text-gray-400">Average Ratings</p>
              <p className="font-semibold text-lg sm:text-xl text-gray-700">
                {app.ratingAvg}
              </p>
            </div>

            <div>
              <p className="text-purple-400 text-lg">👍</p>
              <p className="text-xs sm:text-sm text-gray-400">Total Reviews</p>
              <p className="font-semibold text-lg sm:text-xl text-gray-700">
                {totalReviews >= 1000
                  ? `${Math.floor(totalReviews / 1000)}K`
                  : totalReviews}
              </p>
            </div>
          </div>

          {/* Install Button */}
          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`mt-6 px-5 py-2.5 text-sm sm:text-base rounded-lg font-medium text-white transition ${
              isInstalled
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      {/* RATINGS */}
     <div className="mt-10">
  <h2 className="font-semibold text-gray-600 mb-4 text-lg">Ratings</h2>

  <div className="space-y-4">
    {ratingsData.map((item, index) => (
      <div key={index} className="flex items-center">

        {/* Label */}
        <div className="w-20 text-sm text-gray-500">
          {item.name}
        </div>

        {/* Bar */}
        <div className="flex-1 mx-3">
          <div className="w-full bg-gray-200 h-5 rounded-full overflow-hidden">
            <div
              className="bg-orange-400 h-5 rounded-full transition-all duration-300"
              style={{ width: `${(item.count / maxRating) * 100}%` }}
            />
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Scale */}
  <div className="relative mt-4 mx-3 ml-20">
    <div className="flex justify-between text-xs text-gray-400">
      <span>0</span>
      <span>{Math.floor(maxRating * 0.25)}</span>
      <span>{Math.floor(maxRating * 0.5)}</span>
      <span>{Math.floor(maxRating * 0.75)}</span>
      <span>{maxRating}</span>
    </div>
  </div>
</div>

      {/* DESCRIPTION */}
      <div className="mt-10 border-t border-gray-200 pt-6">
        <h2 className="font-semibold text-gray-600 mb-3">Description</h2>
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
          {app.description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;