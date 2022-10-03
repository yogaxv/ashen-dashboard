import MainSidebar from "./MainSidebar/MainSidebar";
import SecondSidebar from "./SecondSidebar/SecondSidebar";

const MasterLayout = () => {
  return (
    <div className="w-full min-h-screen flex ">
      <aside className="flex flex-none flex-row h-screen w-80 sm:border-r border-gray-light ">
        <MainSidebar />
        <SecondSidebar />

        <button
          type="button"
          class="toggle-button absolute ltr:-right-2 rtl:-left-2 top-8 cursor-pointer transition-opacity ease-in-out z-50"
        >
        </button>
      </aside>

      <main className="flex flex-1 content-start container px-10 py-14">
        <h1>Basic Example</h1>

        <p>
          This example demonstrates some of the core features of React Router
          including nested <code>&lt;Route&gt;</code>s,{" "}
          <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
          "*" route (aka "splat route") to render a "not found" page when
          someone visits an unrecognized URL.
        </p>
      </main>
    </div>
  );
};

export default MasterLayout;
