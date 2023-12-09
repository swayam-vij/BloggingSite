import React, { useContext } from "react";
import Layout from "../../components/Layout";
import myContext from "../../context/myContext";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const context = useContext(myContext);
  const { mode, getAllBlog, deleteBlogs } = context;

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Layout>
      <div className="py-10 bg-gray-100 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center lg:justify-center gap-4 lg:gap-10 px-4 lg:px-0 mb-8">
          <div className="max-w-xs lg:max-w-full">
            <img
              className="w-30 h-40 rounded-full border-4 p-2 mx-auto"
              src={"https://cdn.7tv.app/emote/626b01b8a6cbd39e46aa4eeb/4x.avif"}
              alt="profile"
            />
          </div>
          <div className="max-w-md lg:max-w-xl">
            <div className="text-center mt-2">
              <span className="font-semibold text-gray-600 dark:text-gray-300">
                Total Blogs:
              </span>{" "}
              {getAllBlog.length}
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <Link to={"/createblog"}>
                <Button
                  style={{
                    background: mode === "dark" ? "#4A5568" : "#4C51BF",
                    color: mode === "dark" ? "white" : "white",
                  }}
                  className="px-8 py-2"
                >
                  Create Blog
                </Button>
              </Link>
              <Button
                onClick={logout}
                style={{
                  background: mode === "dark" ? "#4A5568" : "#4C51BF",
                  color: mode === "dark" ? "white" : "white",
                }}
                className="px-8 py-2"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>

        <hr className="border-b-2 border-gray-300 dark:border-gray-400" />

        <div className="container mx-auto px-4 max-w-7xl my-5">
          <div className="overflow-x-auto shadow-md sm:rounded-xl bg-white dark:bg-gray-700">
            <table className="w-full border-2 border-white shadow-md text-sm text-gray-500 dark:text-gray-400">
              <thead
                style={{
                  background: mode === "dark" ? "#2D3748" : "#1A202C",
                }}
                className="text-xs text-white"
              >
                <tr>
                  <th className="px-6 py-3 font-bold">S.No</th>
                  <th className="px-6 py-3 font-bold">Thumbnail</th>
                  <th className="px-6 py-3 font-bold">Title</th>
                  <th className="px-6 py-3 font-bold">Category</th>
                  <th className="px-6 py-3 font-bold">Date</th>
                  <th className="px-6 py-3 font-bold">Action</th>
                </tr>
              </thead>
              {getAllBlog.length > 0 ? (
                <tbody>
                  {getAllBlog.map((item, index) => {
                    const { thumbnail, date, id } = item;
                    return (
                      <tr
                        className="border-b-2"
                        style={{
                          background: mode === "dark" ? "#2D3748" : "white",
                        }}
                        key={id}
                      >
                        <td className="px-6 py-4 font-medium">{index + 1}</td>
                        <td className="px-6 py-4 font-medium">
                          <img
                            className="w-16 rounded-lg"
                            src={thumbnail}
                            alt="thumbnail"
                          />
                        </td>
                        <td className="px-6 py-4 font-medium">
                          {item.blogs.title}
                        </td>
                        <td className="px-6 py-4 font-medium">
                          {item.blogs.category}
                        </td>
                        <td className="px-6 py-4 font-medium">{date}</td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => deleteBlogs(id)}
                            className="px-4 py-1 rounded-lg text-white font-bold bg-red-500"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              ) : (
                <tbody>
                  <tr>
                    <td colSpan="6" className="p-4 text-center">
                      Not Found
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
