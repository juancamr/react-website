import "./FooterLink.css";

const FooterLink = ({ path, name }) => {
  return (
    <li>
      <a className="dark:text-gray-400 dark:hover:text-gray-100 text-gray-600 hover:text-gray-800" target="_blank" href={path}>{name}</a>
    </li>
  );
};

export default FooterLink;
