import "./Link.css";

const Link = ({ path, name }) => {
  return (
    <li className="link-navbar-first inline-block">
      <a className="text-gray-800 text-lg" id={name} href={path}>
        {name}
      </a>
    </li>
  );
};

export default Link;
