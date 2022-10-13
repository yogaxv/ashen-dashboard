import MainButton from "./MainButton/MainButton";
import NotificationButton from "./NotificationButton/NotificationButton";

import reactLogo from '../../../assets/react.svg'

const MainSidebar = () => {
  return (
    <div className="h-screen w-14 menu bg-[#f5f5f4] ">
      <div className="w-14 py-10 px-2  bg-lilac-900 z-10 menu-scroll overflow-y-auto overflow-x-hidden">
        <div className="center mb-20 cursor-pointer menu-button">
          <a href="https://reactjs.org" target="_blank" rel="noopener">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <MainButton name="profile" icon="bi-person-circle" />
        <NotificationButton />
      </div>
    </div>
  );
};

export default MainSidebar;
