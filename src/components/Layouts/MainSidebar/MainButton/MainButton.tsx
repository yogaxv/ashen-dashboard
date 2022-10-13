interface Props {
  name: string
  icon: string
}

const MainButton = ({name, icon} : Props) => {
  return (
    <div
      data-tooltip-target={`tooltip-${name}`}
      data-tooltip-placement="right"
      className="flex flex-col items-center justify-center mb-5 cursor-pointer menu-button"
      data-menu={`${name}-menu`}
    >
      <span
        id="menu-profile-icon"
        className={`bi ${icon} text-gray-400 w-8 h-8 flex items-center justify-center text-center`}
        title={name}
      ></span>
    </div>
  );
};

export default MainButton;
