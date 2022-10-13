import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Transition from "../../Utils/Transition/Transition";

interface KeyHandlerProps {
  keyCode: number
}

const UserMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<HTMLButtonElement | null>(null);
  const dropdown = useRef<HTMLInputElement | null>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      if (
        !dropdownOpen ||
        dropdown.current?.contains(event.target as Node) ||
        trigger.current?.contains(event.target as Node)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyHandlerProps) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative w-full group">
      <button
        ref={trigger}
        className="flex w-full group items-center"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        // aria-expanded={dropdownOpen}
      >
        <img
          className="rounded-full"
          src="https://i.pravatar.cc/300"
          width="36px"
          height="36px"
          alt="User"
        />
        <div className="flex justify-between w-full text-left">
          <div className="pl-4">
            <div className="text-sm group-hover:text-teal-800">John Doe</div>
            <div className="text-xs font-thin text-slate-400">
              Administrator
            </div>
          </div>
          <div className="p-1">
            <i className="bi bi-caret-down-fill text-slate-400"></i>
          </div>
        </div>
      </button>

      <Transition
        className="origin-top-right z-10 absolute right-0 w-full bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-5"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
          className="divide-y divide-slate-200"
        >
          <ul className="py-3">
            
            <li>
              <Link
                className="text-slate-400 hover:font-bold hover:text-slate-800 flex items-center py-1 px-3"
                to="/"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-400 hover:font-bold hover:text-slate-800 flex items-center py-1 px-3"
                to="/"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Settings
              </Link>
            </li>
          </ul>
          <div className="items-center py-3 px-3">
            <Link
              className="text-slate-400 hover:font-bold hover:text-slate-800"
              to="/"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Sign Out
            </Link>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default UserMenu;
