import { useState } from "react";
import appsData from "../../data/apps.json"; 

const Installation = () => {
  const [installedApps, setInstalledApps] = useState(() => {
    const savedApps = JSON.parse(localStorage.getItem("installed-apps"));
    if (savedApps === null) {
      const initialApps = appsData.slice(0, 3);
      localStorage.setItem("installed-apps", JSON.stringify(initialApps));
      return initialApps;
    }
    return savedApps;
  });

  const [sortBy, setSortBy] = useState("");

  const handleSort = (type) => {
    setSortBy(type);
    let sorted = [...installedApps];
    if (type === "lowToHigh") {
      sorted.sort((a, b) => Number(a.size) - Number(b.size));
    } else if (type === "highToLow") {
      sorted.sort((a, b) => Number(b.size) - Number(a.size));
    }
    setInstalledApps(sorted);
  };

  const handleUninstall = (id) => {
    const remainingApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(remainingApps);
    localStorage.setItem("installed-apps", JSON.stringify(remainingApps));
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-20">

      {/* Header */}
      <div className="text-center pt-16 pb-10">
        <h1 className="text-5xl font-extrabold text-[#0F172A] mb-3">
          Your Installed Apps
        </h1>
        <p className="text-gray-500 text-base">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800">
            {installedApps.length} Apps Found
          </h2>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              className="text-sm border px-3 py-2 rounded-md cursor-pointer bg-white"
            >
              Sort By Size ▾
            </div>
            <ul className="dropdown-content mt-2 p-2 shadow bg-white rounded-md w-44 text-sm">
              <li>
                <button
                  onClick={() => handleSort("lowToHigh")}
                  className="hover:bg-gray-100 px-3 py-2 w-full text-left"
                >
                  Size: Low to High
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSort("highToLow")}
                  className="hover:bg-gray-100 px-3 py-2 w-full text-left"
                >
                  Size: High to Low
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* List */}
        <div className="flex flex-col gap-4">
          {installedApps.length > 0 ? (
            installedApps.map((app) => (
              <div
                key={app.id}
                className="flex items-center justify-between bg-white px-5 py-4 rounded-xl border border-gray-100 hover:shadow-sm transition"
              >
                {/* Left */}
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {app.title}
                    </h3>

                    <div className="flex items-center gap-4 text-sm mt-1">
                      <span className="text-green-500">↓ 9M</span>
                      <span className="text-orange-400">★ 5</span>
                      <span className="text-gray-400">
                        {app.size} MB
                      </span>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <button
                  onClick={() => handleUninstall(app.id)}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-red-500 hover:to-pink-500 text-white text-sm px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95 transition-all duration-300 ease-in-out"
                >
                  Uninstall
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-16 bg-white rounded-xl">
              <h3 className="text-gray-400 font-semibold text-lg">
                No Apps Installed Yet
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Installation;