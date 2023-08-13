import "./FooterLink.css";

const FooterLink = ({ path, name }) => {
  return (
    <li>
      <a
        target="_blank"
        className="text-gray-600 hover:text-gray-800"
        href={path}
      >
        {name}
      </a>
    </li>
  );
};

export default FooterLink;
