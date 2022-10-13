import HeaderPage from "./HeaderPage/HeaderPage";
import MainSidebar from "./MainSidebar/MainSidebar";
import SecondSidebar from "./SecondSidebar/SecondSidebar";
import { useState } from "react";

const MasterLayout = () => {
  const [open, setOpen] = useState(true);
  const [display, setDisplay] = useState(true);

  const handleToggleClick = () => {
    if(open){
      setDisplay(!display)
      setTimeout(() => setOpen(!open), 100)
    } else {
      setOpen(!open)
      setTimeout(() => setDisplay(!display), 400)
    }
  }

  return (
    <div className="w-full min-h-screen flex ">
      <aside
        className={`flex flex-row h-screen w-80 sm:border-r border-gray-light relative duration-300 ${
          open ? "w-80" : "w-14 delay-300"
        }`}
      >
        <div
          className="w-5 h-5 flex items-center rounded-full justify-center bg-sky-300 cursor-pointer absolute top-14 -right-3 z-20"
          onClick={handleToggleClick}
        >
          <i className={`bi bi-chevron-left scale-50 stroke-width-2 text-slate-600 ${!open && "rotate-180"}`}></i>
        </div>

        <MainSidebar />
        <SecondSidebar className={`transition-all duration-200 ${display ? "opacity-100" : "opacity-0"}`} />

        <button
          type="button"
          className="toggle-button absolute ltr:-right-2 rtl:-left-2 top-8 cursor-pointer transition-opacity ease-in-out z-50"
          title="test"
        ></button>
      </aside>

      <main className="flex flex-row">
        <section className="container pt-12 px-16">
          <HeaderPage
            name="Dashboard"
            description="This is sample dashboard"
            className="mb-5"
          />

          <h1>Basic Example</h1>

          <p>
            This example demonstrates some of the core features of React Router
            including nested <code>&lt;Route&gt;</code>s,{" "}
            <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using
            a "*" route (aka "splat route") to render a "not found" page when
            someone visits an unrecognized URL.
          </p>

          <div className="grid grid-cols-3 gap-8">
            <div>One of three columns</div>
            <div>One of three columns</div>
            <div>One of three columns</div>
          </div>
        </section>

        <section className="md:w-4/12"></section>
      </main>
    </div>
  );
};

export default MasterLayout;
