import { useState, useEffect } from "react";

const Dashboard = () => {
  const [visitorData, setVisitorData] = useState({
    totalVisitors: 0, // No dummy data
    pageViews: 0,     // No dummy data
    resumeDownloads: 0,
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminPass, setAdminPass] = useState("");
  const correctPasskey = "har@#2809"; // Set your admin passkey

  // Handle first-time visitors
  useEffect(() => {
    const isNewVisitor = !localStorage.getItem("isNewVisitor");

    if (isNewVisitor) {
      // Increment total visitors if new visitor
      const newVisitorCount = parseInt(localStorage.getItem("totalVisitors") || 0, 10) + 1;
      localStorage.setItem("totalVisitors", newVisitorCount);

      // Store in localStorage that the user is a returning visitor
      localStorage.setItem("isNewVisitor", true);
    }

    // Increment page views
    const newPageViews = parseInt(localStorage.getItem("pageViews") || 0, 10) + 1;
    localStorage.setItem("pageViews", newPageViews);
  }, []);

  // Fetch visitor and page views only after admin login
  useEffect(() => {
    if (isAuthenticated) {
      const totalVisitors = parseInt(localStorage.getItem("totalVisitors") || 0, 10);
      const pageViews = parseInt(localStorage.getItem("pageViews") || 0, 10);
      const resumeDownloads = parseInt(localStorage.getItem("resumeDownloads") || 0, 10);

      setVisitorData({
        totalVisitors,
        pageViews,
        resumeDownloads,
      });
    }
  }, [isAuthenticated]);

  // Function to reset resume download count (Admin only)
  const resetDownloadCount = () => {
    localStorage.setItem("resumeDownloads", 0);
    setVisitorData((prevData) => ({ ...prevData, resumeDownloads: 0 }));
  };

  // Authenticate Admin
  const handleLogin = () => {
    if (adminPass === correctPasskey) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect passkey!");
    }
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      {isAuthenticated ? (
        <>
          <h1 className="text-3xl font-semibold text-center mb-8">
            Website Analytics Dashboard
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Total Visitors */}
            <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-medium mb-2">Total Visitors</h2>
              <p className="text-4xl">{visitorData.totalVisitors}</p>
            </div>

            {/* Page Views */}
            <div className="bg-purple-500 text-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-medium mb-2">Total Page Views</h2>
              <p className="text-4xl">{visitorData.pageViews}</p>
            </div>

            {/* Resume Downloads */}
            <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-medium mb-2">Resume Downloads</h2>
              <p className="text-4xl">{visitorData.resumeDownloads}</p>
              <button
                onClick={resetDownloadCount}
                className="mt-4 bg-red-500 text-white p-2 rounded"
              >
                Reset Download Count
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Admin Access</h2>
          <input
            type="password"
            value={adminPass}
            onChange={(e) => setAdminPass(e.target.value)}
            placeholder="Enter admin passkey"
            className="border-2 border-gray-300 p-2 mb-4 rounded"
          />
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
