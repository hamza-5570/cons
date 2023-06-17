import React, { useState, Fragment, useEffect } from "react";
import Logo from "../../public/asset/ConneXc.svg";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Drop from "./drop";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const GetTokenValue = () => {
    let myToken = localStorage.getItem("token");
    if (myToken) {
      setIsAuth(true);
    }
  };

  useEffect(() => {
    GetTokenValue();
  }, []);

  return (
    <>
      <div className=" grid-cols-4     py-5 justify-between flex  lg:grid w-[80%] mx-auto">
        <div className="col-span-1 self-center">
          <Link href="/">
            <Image
              alt="nothing to show"
              className=" w-[70%] lg:w-[40%]"
              src={Logo}
            />
          </Link>
        </div>
        <div className="col-span-2 hidden lg:flex  justify-between  self-center font-matter">
          <Link href="/">
            <p className="font-jakarta text-[15px] font-[500]  cursor-pointer text-[#2D2D46CC]">
              Why Us
            </p>
          </Link>
          <Link href="/">
            <p className="font-jakarta text-[15px] font-[500]  cursor-pointer text-[#2D2D46CC]">
              Our Process
            </p>
          </Link>
          <Link href="/">
            <p className="font-jakarta text-[15px] font-[500]  cursor-pointer text-[#2D2D46CC]">
              Our Mission
            </p>
          </Link>

          <Link href="/">
            <p className="font-jakarta text-[15px] font-[500]  cursor-pointer text-[#2D2D46CC]">
              FAQ
            </p>
          </Link>
          <p className="font-jakarta text-[15px] font-[500]  cursor-pointer text-[#2D2D46CC]">
            Contact
          </p>
        </div>

        <div className="self-center   col-span-1 hidden lg:block lg:ml-auto ">
          {!isAuth ? (
            <Link href="/signup">
              <button className="font-jakarta text-[20px] py-2 px-4 bg-white rounded-2xl font-[500]  cursor-pointer text-[##3E3EE2] border-[1px] border-[#3E3EE2]">
                Sign Up
              </button>
            </Link>
          ) : (
            <Drop />
          )}
        </div>
        <div className="flex lg:hidden justify-end ">
          <svg
            onClick={() => setOpen(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 self-center"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-xs pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div class="container grid grid-cols-1 p-3">
                        <Link href="/">
                          <Image alt="nothing to show" src={Logo} />
                        </Link>
                        <Link href="/services">
                          <p className="mt-10 text-[15px] font-[400] hover:font-[700]   cursor-pointer text-[#2B2855]">
                            Why Us
                          </p>
                        </Link>
                        <Link href="/case">
                          <p className="mt-5 text-[15px] font-[400] hover:font-[700]   cursor-pointer text-[#2B2855]">
                            Our Process
                          </p>
                        </Link>
                        <Link href="/process">
                          <p className="mt-5 text-[15px] font-[400] hover:font cursor-pointer text-[#2B2855]">
                            Our Mission
                          </p>
                        </Link>
                        <Link href="/company">
                          <p className="mt-5 text-[15px] font-[400] hover:font-[700]   cursor-pointer text-[#2B2855]">
                            FAQ
                          </p>
                        </Link>
                        <p className="mt-5 text-[15px] font-[400] hover:font-[700]   cursor-pointer text-[#2B2855]">
                          Contact
                        </p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default Navbar;
