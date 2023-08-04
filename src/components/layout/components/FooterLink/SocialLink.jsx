import "./SocialLink.css";

const SocialLink = ({ icon, path }) => {
  return (
    <a
      className="dark:bg-gray-600 dark:text-white dark:hover:text-gray-800 dark:hover:bg-slate-50
      bg-gray-600 hover:bg-gray-800 text-white
      "
      href={path}
    >
      <i class={icon}></i>
    </a>
  );
};

export default SocialLink;
