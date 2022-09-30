import MainSidebar from "../MainSidebar/MainSidebar";

const MasterLayout = () => {
  return (
    <div className="h-max  flex flex-row">

      <MainSidebar />

      <main>
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
