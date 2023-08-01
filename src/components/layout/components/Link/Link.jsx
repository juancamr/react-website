import "./Link.css";

const Link = ({ path, name }) => {
  return (
    <li className="link-navbar-first inline-block">
      <a href={path}>{name}</a>
    </li>
  );
};

export default Link;
