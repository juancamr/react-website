import { routes } from "../../../../common/constants";
import Link from "../Link/Link";
import "./LinkList.css";

const LinkList = () => {
  return (
    <nav className="bg-gray-800 navbar py-5">
      <ul className="space-x-8">
        <Link path="/" name="Inicio" />
        {routes.map((link) => (
          <Link path={link.path} name={link.name} />
        ))}
      </ul>
    </nav>
  );
};

export default LinkList;
