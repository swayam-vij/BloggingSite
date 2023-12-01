import { Button } from "@material-tailwind/react";
import React, { useContext } from "react";
import myContext from "../context/myContext";

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
    <section>
      <div>
        <div>
          <h2 className="text-lg lg:text-2xl font-bold">Make Comment</h2>
        </div>
        {/* Comment Form  */}
        <form>
          {/* Full Name Input  */}
          <div>
            <input
              type="text"
              placeholder="Enter Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          {/* Text Area  */}
          <div>
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows={6}
              value={commentText}
              onChange={(e) => setcommentText(e.target.value)}
              placeholder="Write a comment..."
              required
              defaultValue={""}
            />
          </div>
          {/* Button  */}
          <div>
            <Button onClick={addComment}>Post comment</Button>
          </div>
        </form>

        {/* Bottom Item  */}
        <article>
          {allComment.map((item, index) => {
            const { fullName, date, commentText } = item;
            return (
              <>
                <footer>
                  <div>
                    <p>{fullName}</p>
                    <p>{date}</p>
                  </div>
                </footer>
                <p>{commentText}</p>
              </>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default Comment;
