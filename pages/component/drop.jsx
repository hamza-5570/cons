import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Circles from "../../public/png/circles.png";
import Image from "next/image";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Drop() {
  const [value, setValue] = useState({ fname: "", lastName: "" });
  const [isAuth, setIsAuth] = useState(false);

  function clearLocalStorage() {
    localStorage.clear();
    window.location.reload("/");
  }

  const GetUserValue = () => {
    let myUser = localStorage.getItem("user");
    let myToken = localStorage.getItem("token");
    let lastName = localStorage.getItem("userData");
    console.log({ myUser });

    if (myToken) {
      setIsAuth(true);
    }

    if (myUser) {
      let user = JSON.parse(myUser);

      setValue({ fname: user.first_name, lastName: user.last_name });
    } else {
      console.log("No user data found.");
    }
  };

  useEffect(() => {
    GetUserValue();
  }, []);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 ">
          <Image className="w-[50%] ml-auto" src={Circles} />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Link href="/editProfile">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {console.log("value", value)}
                    {value.fname + value.lastName}
                  </a>
                )}
              </Menu.Item>
            </Link>

            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    onClick={clearLocalStorage}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
