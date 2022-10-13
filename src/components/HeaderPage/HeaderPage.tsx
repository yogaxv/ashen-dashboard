interface Props {
  name: string
  description: string
  className: string
}

const HeaderPage = ({ name, description, className }: Props) => {
  return (
    <header id="header" className={`${className}`}>
      <h1 className="text-2xl sm:text-3xl font-extrabold ">
        {name}
      </h1>
      <p className="text-xs text-slate-700 dark:text-slate-400">{description}</p>
    </header>
  );
};

export default HeaderPage;
