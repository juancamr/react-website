import "./FooterLink.css";

const FooterLink = ({ path, name }) => {
  return (
    <li>
      <a target="_blank" href={path}>{name}</a>
    </li>
  );
};

export default FooterLink;
