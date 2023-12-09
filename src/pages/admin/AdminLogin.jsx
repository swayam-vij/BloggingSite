import React, { useContext, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import myContext from "../../context/myContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/FirebaseConfig";

export default function AdminLogin() {
  const context = useContext(myContext);
  const { mode } = context;

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //* Login Function
  const login = async () => {
    if (!email || !password) {
      return toast.error("Fill all required fields");
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Success");
      localStorage.setItem("admin", JSON.stringify(result));
      navigate("/dashboard");
    } catch (error) {
      toast.error("Login Failed");
      console.log(error);
    }
  };

  return (
    <div className="flex justify-end items-center h-screen p-20">
      {/* Set the background image for the entire page */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9naW58ZW58MHx8MHx8fDA%3D')`,
        }}
      ></div>

      {/* Card  */}
      <Card className="w-full max-w-[24rem] bg-cover bg-center relative bg-opacity-10">
        {/* CardHeader */}
        <CardHeader
          floated={false}
          shadow={false}
          className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center bg-opacity-10"
        >
          <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-2 text-white">
            <div className=" flex justify-center">
              {/* Image  */}
              <img
                src="https://cdn.7tv.app/emote/626b01b8a6cbd39e46aa4eeb/4x.avif"
                className="h-20 w-20"
              />
            </div>
          </div>

          {/* Top Heading  */}
          <Typography
            variant="h4"
            style={{
              color: mode === "dark" ? "rgb(30, 41, 59)" : "#000000",
            }}
          >
            Admin Login
          </Typography>
        </CardHeader>

        {/* CardBody */}
        <CardBody>
          <form className=" flex flex-col gap-4">
            {/* First Input  */}
            <div>
              <Input
                type="email"
                label="Email"
                name="email"
                color="black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Second Input  */}
            <div>
              <Input
                type="password"
                label="Password"
                color="black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* Login Button  */}
            <Button
              onClick={login}
              style={{
                background:
                  mode === "dark" ? "rgb(226, 232, 240)" : "rgb(30, 41, 59)",
                color:
                  mode === "dark" ? "rgb(30, 41, 59)" : "rgb(226, 232, 240)",
              }}
            >
              Login
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
