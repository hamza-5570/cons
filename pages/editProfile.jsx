import Image from "next/image";
import React, { useEffect, useState } from "react";
import Man from "..//public/png/man.png";

// import { useFormik } from "formik";
// import * as yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { BASE_URL } from "../helper";
// import axiosClient from "../helper";
import { useRouter } from "next/router";

function ScreenProfile() {
  // const router = useRouter();
  // const [loading, setLoading] = useState(false);
  // const [user, setUser] = useState(null);
  // const [value, setValue] = useState("");

  // const fetchUser = async () => {
  //   let myUser = localStorage.getItem("user");
  //   let user;
  //   if (myUser) {
  //     user = JSON.parse(myUser);
  //     console.log("user", user);

  //     setValue(user._id);
  //   } else {
  //     console.log("No user data found.");
  //   }

  //   axiosClient()
  //     .get(`getUserById/${user._id}`)
  //     .then((res) => {
  //       setUser(res?.data?.data);
  //       console.log("set==>", res.data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  // if (!user) {
  //   return <p>Loading...</p>;
  // }

  // useEffect(() => {
  //   fetchUser();
  // }, []);

  return (
    <React.Fragment>
      <ToastContainer />

      <div
        style={{
          background: "#3E3EE20D",
          height: "100vh",
        }}
      >
        <div className="grid md:grid-cols-3 grid-cols-1 py-5 ">
          <div className="col-span-1 ">
            <div className="w-[90%] xl:w-[80%] mx-auto bg-[#EFF3FA] border-[1px] border-white p-5 md:p-10 rounded-2xl">
              <p className="font-nunito  text-[40px] font-medium text-[#292949]">
                Edit Profile
              </p>
              <p className="font-nunito  text-[15px] font-medium text-[#292949]">
                Please enter your name.
              </p>
              <form>
                <div className="mt-2 text-border">
                  <label className="font-nunito text-[12px] font-medium">
                    Name *
                  </label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    placeholder="John"
                    className="p-4 bg-[#E7ECF5]  w-full font-[400] text-[#2D2D4673] text-[15px] rounded-2xl border-[1px] border-white"
                  />
                </div>

                <div className="mt-3 text-border">
                  <label className="font-nunito text-[12px] font-medium">
                    Enter your Phone number *
                  </label>
                  <br />
                  <input
                    type="text"
                    name="phone"
                    placeholder="1234567"
                    className="p-4 bg-[#E7ECF5]  w-full font-[400] text-[#2D2D4673] text-[15px] rounded-2xl border-[1px] border-white"
                  />
                </div>

                <div className="mt-3 text-border">
                  <label className="font-nunito text-[12px] font-medium">
                    Enter your Email address *
                  </label>
                  <br />
                  <input
                    type="text"
                    name="email"
                    placeholder="example@gmail.com"
                    className="p-4 bg-[#E7ECF5]  w-full font-[400] text-[#2D2D4673] text-[15px] rounded-2xl border-[1px] border-white"
                  />
                </div>
                <div className="mt-3 text-border">
                  <label className="font-nunito text-[12px] font-medium">
                    Enter your password *
                  </label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    placeholder="********"
                    className="p-4 bg-[#E7ECF5]  w-full font-[400] text-[#2D2D4673] text-[15px] rounded-2xl border-[1px] border-white"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#3E3EE2] relative text-[white] p-2 text-[18px] font-nunito font-medium rounded-md w-full mt-[40px]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-span-2  hidden lg:block self-center">
            <Image className="block mx-auto" src={Man} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ScreenProfile;
