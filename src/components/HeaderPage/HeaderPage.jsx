const HeaderPage = ({ name, description, className }) => {
  return (
    <header id="header" class={`${className}`}>
      <h1 class="text-2xl sm:text-3xl font-extrabold ">
        {name}
      </h1>
      <p class="text-xs text-slate-700 dark:text-slate-400">{description}</p>
    </header>
  );
};

export default HeaderPage;
