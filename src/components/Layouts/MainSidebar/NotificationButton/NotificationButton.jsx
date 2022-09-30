const NotificationButton = () => {
  return (
    <div className="group flex flex-col items-center justify-center menu-toggle-buttons">
      <span
        className="relative auto"
        data-tooltip-target="tooltip-notifications"
        data-tooltip-placement="right"
      >
        <button
          type="button"
          className="flex items-center menu-button justify-center w-8 h-8 mb-2.5 relative cursor-pointer js-menu-toggles"
          data-menu="notifications-menu"
        >
          <span
            id="menu-notification-icon"
            name="notifications"
            className="bi bi-bell text-purple "
          ></span>
        </button>

        <span
          data-notification-count=""
          className="w-2 h-2 absolute top-2 right-2 inline-flex items-center justify-center p-2.5 text-xs text-slate-200 font-bold leading-none transform translate-x-1/2 -translate-y-1/2 bg-orange rounded-full"
        >
          1
        </span>
      </span>
    </div>
  );
};

export default NotificationButton;
