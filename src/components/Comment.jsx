import { Button } from "@material-tailwind/react";
import React, { useContext } from "react";
import myContext from "../context/myContext";
// ... (previous imports)

function Comment({
  addComment,
  commentText,
  setcommentText,
  allComment,
  fullName,
  setFullName,
}) {
  const context = useContext(myContext);
  const { mode } = context;

  console.log(allComment);
  return (
    <section style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <div>
        <div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            Make Comment
          </h2>
        </div>
        {/* Comment Form  */}
        <form style={{ marginTop: "1rem" }}>
          {/* Full Name Input  */}
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="text"
              style={{
                border: "1px solid #ccc",
                padding: "0.5rem",
                width: "100%",
              }}
              placeholder="Enter Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          {/* Text Area  */}
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows={6}
              value={commentText}
              onChange={(e) => setcommentText(e.target.value)}
              placeholder="Write a comment..."
              style={{
                border: "1px solid #ccc",
                padding: "0.5rem",
                width: "100%",
              }}
              required
              defaultValue={""}
            />
          </div>
          {/* Button  */}
          <div>
            <Button
              style={{ backgroundColor: "indigo", color: "white" }}
              onClick={addComment}
            >
              Post comment
            </Button>
          </div>
        </form>

        {/* Bottom Item  */}
        <article style={{ marginTop: "1rem" }}>
          {allComment.map((item, index) => {
            const { fullName, date, commentText } = item;
            return (
              <div key={index} style={{ marginBottom: "1rem" }}>
                <footer style={{ fontSize: "0.875rem", color: "#888" }}>
                  <div>
                    <p style={{ fontWeight: "bold" }}>{fullName}</p>
                    <p>{date}</p>
                  </div>
                </footer>
                <p>{commentText}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default Comment;
