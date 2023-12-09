import { Button } from "@material-tailwind/react";
import React, { useContext } from "react";
import myContext from "../context/myContext";
import { useNavigate } from "react-router";
// ... (previous imports)

function BlogPostCard() {
  const context = useContext(myContext);
  const { mode, getAllBlog } = context;

  const navigate = useNavigate();

  return (
    <div>
      <section
        style={{
          color: mode === "dark" ? "rgb(226, 232, 240)" : "rgb(30, 41, 59)",
        }}
        className="text-gray-600 body-font "
      >
        <div className="container mx-auto max-w-7xl ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getAllBlog.length > 0 ? (
              getAllBlog.map((item, index) => {
                const { thumbnail, id, date } = item;
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden"
                  >
                    <img
                      onClick={() => navigate(`/bloginfo/${id}`)}
                      className="w-full h-48 object-cover cursor-pointer"
                      src={thumbnail}
                      alt="blog"
                    />
                    <div className="p-6">
                      <p className="text-sm text-gray-400">{date}</p>
                      <h1 className="text-xl font-bold text-gray-900 my-2">
                        {item.blogs.title}
                      </h1>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.blogs.description}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-3">
                <h1 className="text-xl font-bold">Not Found</h1>
              </div>
            )}
          </div>

          {/* See More Button  */}
          <div className="flex justify-center my-5">
            <Button
              style={{
                background:
                  mode === "dark" ? "rgb(226, 232, 240)" : "rgb(30, 41, 59)",
                color:
                  mode === "dark" ? "rgb(30, 41, 59)" : "rgb(226, 232, 240)",
              }}
            >
              See More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPostCard;
