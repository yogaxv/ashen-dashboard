import HeaderPage from "../HeaderPage/HeaderPage";
import MainSidebar from "./MainSidebar/MainSidebar";
import SecondSidebar from "./SecondSidebar/SecondSidebar";

const MasterLayout = () => {
  return (
    <div className="w-full min-h-screen flex ">
      <aside className="flex flex-row h-screen w-80 sm:border-r border-gray-light ">
        <MainSidebar />
        <SecondSidebar />

        <button
          type="button"
          class="toggle-button absolute ltr:-right-2 rtl:-left-2 top-8 cursor-pointer transition-opacity ease-in-out z-50"
        ></button>
      </aside>

      <main className="flex flex-row">
        <section className="container pt-10 p-5">
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
