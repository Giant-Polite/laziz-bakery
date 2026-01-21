import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();

  // Define the path where the footer should be hidden
  // Change "/cakes" to match the exact path in your App.tsx routes
  const hideFooter = location.pathname === "/cakes";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      {/* Only render Footer if hideFooter is false */}
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;