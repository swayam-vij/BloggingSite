import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AllBlogs from "./pages/AllBlogs";
import NoPage from "./pages/NoPage";
import BlogInfo from "./pages/BlogInfo";
import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import MyState from "./context/myState";
import { Toaster } from "react-hot-toast";
import CreateBlog from "./pages/admin/CreateBlog";
function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/allblogs" element={<AllBlogs />} />
          <Route path="/bloginfo/:id" element={<BlogInfo />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRouteForAdmin>
                <Dashboard />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/createBlog"
            element={
              <ProtectedRouteForAdmin>
                <CreateBlog />
              </ProtectedRouteForAdmin>
            }
          />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
      <Toaster />
    </MyState>
  );
}

export default App;

export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("admin"));
  if (admin?.user?.email === "admin@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/adminlogin"} />;
  }
};
