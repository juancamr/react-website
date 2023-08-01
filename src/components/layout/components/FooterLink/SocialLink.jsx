import "./SocialLink.css";

const SocialLink = ({ icon, path }) => {
  return (
    <a href={path}>
      <i class={icon}></i>
    </a>
  );
};

export default SocialLink;
