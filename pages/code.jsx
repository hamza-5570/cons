import Image from "next/image";
import React, { useState, useEffect } from "react";
import Man from "..//public/png/man.png";
import OtpInput from "react-otp-input";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosClient, { BASE_URL } from "../helper";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";

function Code() {
  const router = useRouter();
  const { prop } = router.query;
  const [loading, setLoading] = useState(false);

  const [otp, setOtp] = useState("");
  const [showError, setShowError] = useState(false);

  const formik = useFormik({
    initialValues: {
      first_logIn_token: "",
    },
    validationSchema: yup.object({}),
    onSubmit: (values) => {
      if (otp?.length < 5) {
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 1500);
      } else {
        values.email = router.query.email;
        values.first_logIn_token = otp;
        console.log("======>", values);
        axiosClient()
          .post(
            "https://connexcbackend.onrender.com/user/firstTimelogin",
            values
          )

          .then((res) => {
            setLoading(true);
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
      }
    },
  });

  const GetTokenValue = () => {
    let myData = localStorage.getItem("token");
    if (myData) {
      router.push("/");
    }
    console.log("my", myData);
  };

  const GetUserValue = () => {
    let myUser = localStorage.getItem("user");
    if (myUser) {
      let user = JSON.parse(myUser);
      console.log("user", user);
    } else {
      console.log("No user data found.");
    }
  };
  useEffect(() => {
    GetTokenValue();
    GetUserValue();
  }, []);

  return (
    <React.Fragment>
      <ToastContainer />
      <div
        style={{
          background: "#3E3EE20D",
          height: "100vh",
        }}
      >
        <div className="grid lg:grid-cols-3 grid-cols-1 py-5 lg:pt-14">
          <div className="col-span-1 ">
            <div className="w-[90%] xl:w-[80%] mx-auto bg-[#EFF3FA] border-[1px] border-white p-5 xl:p-10 rounded-2xl">
              <p className="font-nunito  text-[40px] font-medium text-[#292949]">
                Enter code
              </p>
              <p className="font-nunito text-[16px] font-medium text-[#292949] mb-4">
                We have just sent a code to your device. Please enter the code
                that was sent to your email at oscarisacc@gmail.com. Please note
                You may need to check your spam folder if you dont see it in
                your inbox.
              </p>

              <form onSubmit={formik.handleSubmit}>
                <div
                  style={{
                    width: "max-content",
                    padding: "5px",
                  }}
                >
                  <OtpInput
                    inputStyle={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "10px",
                    }}
                    type="text"
                    name="first_logIn_token"
                    value={otp}
                    onChange={setOtp}
                    numInputs={5}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#3E3EE2] relative text-[white] p-2 text-[18px] font-nunito font-medium rounded-md w-full mt-[40px]"
                >
                  Submit
                </button>
              </form>

              <div className="text-center pb-10">
                <Link href="/forgot">
                  <div className="font-nunito  text-[15px] text-[#292949]  text-border cursor-pointer">
                    Didn’t receive a code?
                  </div>
                </Link>
                <p className="font-nunito  text-[15px] f text-[#3E3EE2]">
                  Get new code in
                </p>
              </div>
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

export default Code;
