import FooterLink from "../FooterLink/FooterLink";
import SocialLink from "../FooterLink/SocialLink";
import "./FooterSection.css";

const FooterSection = ({ data, socialData, contact }) => {
  const { name, links } = data;
  return (
    <div className="footer-col">
      <h4>{name}</h4>
      <ul>
        {socialData ? (
          <div className="social-links">
            {links.map((socialLink) => (
              <SocialLink icon={socialLink.name} path={socialLink.path} />
            ))}
          </div>
        ) : contact ? (
          <div className="text-gray-400">
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
