import React from "react";
import UserMenu from "../../UserMenu/UserMenu";

const SecondSidebar = () => {
  return (
    <div className="flex flex-col flex-1 h-screen w-56 px-5 content-start py-10">
      <UserMenu />

      <ul className="w-full group mt-14">
        <li className="group relative pb-2.5">
          <a
            id="menu-"
            className="flex items-center text-gray-400"
            href="http://akaunting.test/1"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <i class="bi bi-speedometer2"></i>
            </div>

            <span className="text ltr:ml-2 rtl:mr-2 font-semibold">
              Dashboard
            </span>
          </a>
        </li>

        <li className="group relative pb-2.5">
          <a
            id="menu-"
            className="flex items-center text-gray-400"
            href="http://akaunting.test/1"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <i class="bi bi-box-seam"></i>
            </div>

            <span className="text ltr:ml-2 rtl:mr-2 font-semibold">
              Items
            </span>
          </a>
        </li>

        <li className="group relative pb-2.5">
          <a
            id="menu-"
            className="flex items-center text-gray-400"
            href="http://akaunting.test/1"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <i class="bi bi-file-post"></i>
            </div>

            <span className="text ltr:ml-2 rtl:mr-2 font-semibold">
              Reports
            </span>
          </a>
        </li>
      </ul>

     
    </div>
  );
};

export default SecondSidebar;
