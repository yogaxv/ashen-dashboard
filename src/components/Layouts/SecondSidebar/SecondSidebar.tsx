import React from "react";
import UserMenu from "../UserMenu/UserMenu";

interface Props {
  className: string
}

const SecondSidebar = ({className}: Props) => {
  return (
    <div className={`flex flex-col flex-1 h-screen w-56 px-8 content-start py-12 ${className}`}>
      <UserMenu />

      <ul className="w-full group mt-14">
        <li className="group relative pb-2.5">
          <a
            id="menu-dashboard"
            className="flex items-center text-gray-400"
            href="#"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="bi bi-speedometer2"></i>
            </div>

            <span className="text ltr:ml-2 rtl:mr-2 font-thin hover:font-semibold">
              Dashboard
            </span>
          </a>
        </li>

        <li className="group relative pb-2.5">
          <a
            id="menu-items"
            className="flex items-center text-gray-400"
            href="#"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="bi bi-box-seam"></i>
            </div>

            <span className="text ltr:ml-2 rtl:mr-2 font-thin hover:font-semibold">
              Items
            </span>
          </a>
        </li>

        <li className="group relative pb-2.5">
          <a
            id="menu-reports"
            className="flex items-center text-gray-400"
            href="#"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="bi bi-file-post"></i>
            </div>

            <span className="text ltr:ml-2 rtl:mr-2 font-thin hover:font-semibold">
              Reports
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SecondSidebar;
