import Container from "../../../components/Container";
import CustomH1 from "../../../components/custom/CustomH1";
import CustomH2 from "../../../components/custom/CustomH2";
import CustomP from "../../../components/custom/CustomP";
import CustomH3 from "../../../components/custom/CustomH3";
import CustomButton from "../../../components/custom/CustomButton";
import { LINK_COMPANY } from "../../../common/constants";
import { company } from "../../../common/content";

const Planes = () => {
  return (
    <div
      className="
          px-4
          sm:px-16
          md:px-10
          2xl:px-52
    "
    >
      <div className="grid xl:grid-cols-2 gap-5">
        <section className="flex items-end">
          <div className="w-full">
            <h2 className="mb-8 text-darkblue-500 text-3xl md:text-4xl xl:text-5xl font-bold">
              Tarifas de reclutamiento
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex items-end">
                <Plan
                  name={company.planes[90].name}
                  price={company.planes[90].price}
                  features={company.planes[90].features}
                />
              </div>
              <Plan
                name={company.planes[180].name}
                price={company.planes[180].price}
                features={company.planes[180].features}
              />
            </div>
          </div>
        </section>
        <section className="h-full flex items-end">
          <div className="grid md:grid-cols-2 w-full">
            <Plan
              isBlue
              name={company.planes[360].name}
              price={company.planes[360].price}
              features={company.planes[360].features}
            />
            <div className="items-end hidden md:flex">
              <img
                src="assets/images/update/person_smiling.png"
                alt=""
                className="h-full object-contain"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

function Plan({ price, name, features, isBlue }) {
  return (
    <Card isBlue={isBlue}>
      <CustomH2 styles="mb-3">
        <span
          className={`text-base
        ${isBlue ? "text-slate-100" : "text-gray-800"}
        text-gray-800
        mr-2
        font-light`}
        >
          desde
        </span>
        S/{price}
      </CustomH2>
      <CustomH3 styles="font-bold mb-5">{name}°</CustomH3>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index}>
            <CustomP>
              <i
                class={`fa-solid fa-circle-check mr-2
              ${!isBlue && "text-darkblue-500"}
              `}
              ></i>
              {feature}
            </CustomP>
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <CustomButton
          orange={!isBlue}
          white={isBlue}
          isLink
          link={LINK_COMPANY}
          styles={`${!isBlue && "text-white"}`}
        >
          Solicitar
        </CustomButton>
      </div>
    </Card>
  );
}

function Card({ isBlue, children }) {
  return (
    <div
      className={`rounded-3xl
      ${
        isBlue === true
          ? "bg-gradient-to-l from-blue-400 via-blue-500 to-blue-600 text-white"
          : "bg-gradient-to-r from-slate-50 via-gray-100 to-gray-200 text-gray-800"
      }
      border border-gray-300
      shadow-xl
      p-10
      w-full
  `}
    >
      {children}
    </div>
  );
}

export default Planes;
