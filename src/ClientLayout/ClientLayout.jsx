import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "../App.css";
import Footer from "../components/Footer/Footer";
import { AuthContext } from "../Context/AuthProvider";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const ClientLayout = () => {
  const { loading } = useContext(AuthContext);

  return (
    <div className="bg-prigmayBG ">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <Navbar />
          {/* min-h-screen === height:100% */}
          <div className="min-h-screen bg-white layout">
            <Outlet />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default ClientLayout;
