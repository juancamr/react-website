import "./SocialLink.css";

const SocialLink = ({ icon, path }) => {
  return (
    <a
      target="_blank"
      className=" dark:hover:text-gray-800 
      bg-gray-600 hover:bg-gray-800 text-white
      "
      href={path}
    >
      <i class={icon}></i>
    </a>
  );
};

export default SocialLink;
