import React, { useState, useContext } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import myContext from "../../context/myContext";
import { Link, useNavigate } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { fireDB, storage } from "../../Firebase/FirebaseConfig";

function CreateBlog() {
  const context = useContext(myContext);
  const { mode } = context;

  const navigate = useNavigate();

  const [blogs, setBlogs] = useState({
    title: "",
    category: "",
    content: "",
    time: Timestamp.now(),
  });

  const [thumbnail, setthumbnail] = useState();

  const addPost = async () => {
    if (
      blogs.title === "" ||
      blogs.category === "" ||
      blogs.content === "" ||
      blogs.thumbnail === ""
    ) {
      toast.error("Please Fill All Fields");
    }
    uploadImage();
  };

  const uploadImage = () => {
    if (!thumbnail) return;
    const imageRef = ref(storage, `blogimage/${thumbnail.name}`);
    uploadBytes(imageRef, thumbnail).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        const productRef = collection(fireDB, "blogPost");
        try {
          addDoc(productRef, {
            blogs,
            thumbnail: url,
            time: Timestamp.now(),
            date: new Date().toLocaleString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }),
          });
          navigate("/dashboard");
          toast.success("Post Added Successfully");
        } catch (error) {
          toast.error(error);
          console.log(error);
        }
      });
    });
  };

  const [text, settext] = useState("");
  console.log("Value: ");
  console.log("text: ", text);

  function createMarkup(c) {
    return { __html: c };
  }

  return (
    <div className="container mx-auto max-w-5xl py-6">
      <div className="p-5">
        <div className="mb-2 flex justify-between">
          <div className="flex gap-2 items-center">
            <Link to={"/dashboard"}>
              <BsFillArrowLeftCircleFill size={25} />
            </Link>
            <Typography variant="h4">Create blog</Typography>
          </div>
        </div>

        <div className="mb-3">
          {thumbnail && (
            <img
              className="w-full rounded-md mb-3"
              src={thumbnail ? URL.createObjectURL(thumbnail) : ""}
              alt="thumbnail"
            />
          )}

          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-semibold"
          >
            Upload Thumbnail
          </Typography>

          <input
            type="file"
            label="Upload thumbnail"
            className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] placeholder-black w-full rounded-md p-1"
            onChange={(e) => setthumbnail(e.target.files[0])}
          />
        </div>

        <div className="mb-3">
          <input
            label="Enter your Title"
            className={`shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 
                 outline-none ${
                   mode === "dark" ? "placeholder-black" : "placeholder-black"
                 }`}
            placeholder="Enter Your Title"
            onChange={(e) => setBlogs({ ...blogs, title: e.target.value })}
            value={blogs.title}
          />
        </div>

        <div className="mb-3">
          <input
            label="Enter your Category"
            className={`shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 
                 outline-none ${
                   mode === "dark" ? "placeholder-black" : "placeholder-black"
                 }`}
            placeholder="Enter Your Category"
            onChange={(e) => setBlogs({ ...blogs, category: e.target.value })}
            value={blogs.category}
          />
        </div>

        <Editor
          apiKey="9jo3lu73p1xbfqaw6jvgmsbrmy7qr907nqeafe1wbek6os9d"
          onEditorChange={(newValue, editor) => {
            setBlogs({ ...blogs, content: newValue });
            settext(editor.getContent({ format: "text" }));
          }}
          onInit={(evt, editor) => {
            settext(editor.getContent({ format: "text" }));
          }}
          init={{
            plugins:
              "a11ychecker advcode advlist advtable anchor autocorrect autolink autoresize autosave casechange charmap checklist code codesample directionality editimage emoticons export footnotes formatpainter fullscreen help image importcss inlinecss insertdatetime link linkchecker lists media mediaembed mentions mergetags nonbreaking pagebreak pageembed permanentpen powerpaste preview quickbars save searchreplace table tableofcontents template  tinydrive tinymcespellchecker typography visualblocks visualchars wordcount",
          }}
        />

        {/* Five Submit Button  */}
        <Button
          className=" w-full mt-5"
          onClick={addPost}
          style={{
            background:
              mode === "dark" ? "rgb(226, 232, 240)" : "rgb(30, 41, 59)",
            color: mode === "dark" ? "rgb(30, 41, 59)" : "rgb(226, 232, 240)",
          }}
        >
          Send
        </Button>
      </div>
    </div>
  );
}

export default CreateBlog;
