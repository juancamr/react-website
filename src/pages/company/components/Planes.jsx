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
      <h2 className="font-bold mb-5 text-2xl">{name}°</h2>
      <h2
        className={`mb-8 ${isBlue ? "text-blue-500" : "text-orange-600"}
        text-4xl font-bold
        `}
      >
        <span
          className={`text-base
        text-gray-800
        mr-2
        font-light`}
        >
          desde
        </span>
        S/{price}
      </h2>
      <div className="flex justify-center mb-6">
        <CustomButton
          orange={!isBlue}
          white={isBlue}
          isLink
          small
          fullWidth
          link={LINK_COMPANY}
          styles={`${!isBlue && "text-white"}`}
        >
          Solicitar
        </CustomButton>
      </div>
      {/* divider */}
      <div className="border-b border-gray-400 mb-6"></div>
      {/* features */}
      <section className="space-y-2">
        <p className="font-bold">El plan incluye</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index}>
              <p>
                <i
                  class={`fa-solid fa-check mr-2
              ${!isBlue ? "text-darkblue-500" : "text-gray-600"}
              `}
                ></i>
                {feature}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </Card>
  );
}

function Card({ isBlue, children }) {
  return (
    <div
      className={`rounded-3xl
      ${
        isBlue === true
          ? "bg-gradient-to-tl from-white via-white to-blue-100 border-blue-500"
          : "bg-white border-gray-300"
      }
      border
      shadow-xl
      relative
      p-8
      w-full
  `}
    >
      {isBlue && (
        <div className="absolute left-0 -top-4 w-full flex justify-center">
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white rounded-lg uppercase px-4 py-2 text-[0.8rem]">
            mejor valorado
          </span>
        </div>
      )}
      {children}
    </div>
  );
}

export default Planes;
