import React, { useState } from "react";
import Man from "../public/png/man.png";
import Image from "next/image";
import axiosClient from "../helper";
import Fade from "react-reveal/Fade";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  let name, value;
  const handleSubmit = (event) => {
    console.log(event);
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (event) => {
    event.preventDefault();
    console.log("user", user);
    
    axiosClient()
          .post(
            "/login",
            user
          )

          .then((res) => {
            setLoading(true);
            console.log(res)
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.data));
            console.log("res :>>", res);
            toast.success(res.data.message);
            setTimeout(() => {
              router.push("/");
            }, 2000);
            console.log({ res });
          })
          .catch((err) => {
            // toast.error("failed");
            toast.error(err.response.data.message);
            console.log("err..", err);
          });
  };
  return (
    <>
    <Navbar/>
    <ToastContainer />
      <div className="bg-[#3E3EE20D] py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] md:w-[80%] mx-auto ">
          <Fade>
            <div className="self-center">
              <p className="font-[800] text-[30px] md:text-[45px] text-[#292949] text-center lg:text-start">
                Need Fundraising?
              </p>
              <p className="mt-1 font-[00] text-[18px] text-[#292949] text-center lg:text-start">
                Log in to stay informed with us.
              </p>

              <Image
                alt="nothing"
                className="hidden lg:block mt-10 w-[60%]"
                src={Man}
              />
            </div>
          </Fade>

          <div className="mt-10 lg:mt-0 self-center">
            <form>
              <div className="  bg-[#EFF3FA] border-[1px] border-white rounded-2xl p-10">

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={user.email}
                  autoComplete="off"
                  onChange={handleSubmit}
                  className="mt-5 p-4 bg-[#E7ECF5]  w-full font-[400] text-[#2D2D4673] text-[15px] rounded-2xl border-[1px] border-white"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={user.password}
                  autoComplete="off"
                  onChange={handleSubmit}
                  className="mt-5 p-4 bg-[#E7ECF5]  w-full font-[400] text-[#2D2D4673] text-[15px] rounded-2xl border-[1px] border-white"
                />



                <button
                  type="submit"
                  onClick={postData}
                  className=" block mx-auto mt-5 md:mt-10  font-jakarta font-[400] text-[20px] py-4 px-10 rounded-2xl text-white bg-[#3E3EE2]"
                >
                  Login
                </button>
              </div>
            </form>

            <Image
              alt="nothing"
              className="block lg:hidden mt-10 w-[60%] mx-auto"
              src={Man}
            />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
