import FooterLink from "../FooterLink/FooterLink";
import SocialLink from "../FooterLink/SocialLink";
import "./FooterSection.css";

const FooterSection = ({ data, socialData, contact }) => {
  const { name, links } = data;
  return (
    <div className="footer-col">
      <h4 className="text-gray-800 dark:text-slate-50">{name}</h4>
      <ul>
        {socialData ? (
          <div className="social-links">
            {links.map((socialLink) => (
              <SocialLink icon={socialLink.name} path={socialLink.path} />
            ))}
          </div>
        ) : contact ? (
          <div className="dark:text-gray-400 text-gray-600">
            <p className="mb-3">{data.content.direction}</p>
            <p>{data.content.numberPhone}</p>
          </div>
        ) : (
          links.map((footerLink) => (
            <FooterLink path={footerLink.path} name={footerLink.name} />
          ))
        )}
      </ul>
    </div>
  );
};

export default FooterSection;
