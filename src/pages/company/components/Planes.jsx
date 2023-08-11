import Container from "../../../components/Container";
import CustomH1 from "../../../components/custom/CustomH1";
import CustomH2 from "../../../components/custom/CustomH2";
import CustomP from "../../../components/custom/CustomP";
import CustomH3 from "../../../components/custom/CustomH3";
import CustomButton from "../../../components/custom/CustomButton";
import { LINK_COMPANY } from "../../../common/constants";

const planes = {
  90: {
    name: "Seleccion 90",
    price: "4820",
    features: ["taoe hun nstahoeu", "taoe hun nstahoeu"],
  },
  180: {
    name: "Seleccion 180",
    price: "4820",
    features: ["taoe hun nstahoeu", "taoe hun nstahoeu", "taoe hun nstahoeu"],
  },
  360: {
    name: "Seleccion 360",
    price: "4820",
    features: [
      "taoe hun nstahoeu",
      "taoe hun nstahoeu",
      "taoe hun nstahoeu",
      "taoe hun nstahoeu",
      "taoe hun nstahoeu",
      "taoe hun nstahoeu",
    ],
  },
};

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
            <CustomH1 styles="mb-8 xl:mb-6 text-darkblue-500">
              Tarifas de reclutamiento
            </CustomH1>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex items-end">
                <Plan
                  name={planes[90].name}
                  price={planes[90].price}
                  features={planes[90].features}
                />
              </div>
              <Plan
                name={planes[180].name}
                price={planes[180].price}
                features={planes[180].features}
              />
            </div>
          </div>
        </section>
        <section className="h-full flex items-end">
          <div className="grid md:grid-cols-2 w-full">
            <Plan
              isBlue
              name={planes[360].name}
              price={planes[360].price}
              features={planes[360].features}
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
      className={`rounded-[50px]
      ${
        isBlue === true
          ? "bg-gradient-to-r from-blue-500 via-blue-300 to-sky-200 text-white"
          : "bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 text-gray-800"
      }
      p-10
      w-full
  `}
    >
      {children}
    </div>
  );
}

export default Planes;
