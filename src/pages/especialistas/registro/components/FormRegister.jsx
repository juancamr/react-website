import {
  ADMIN_URL,
  LINK_ESPECIALISTA_GOOGLE_PLAY,
  inputsText,
} from "../../../../common/constants";
import { useEffect, useRef, useState } from "react";
import BasicInput from "../../../../components/inputs/BasicInput";
import SelectAutocomplete from "./SelectAutocomplete";
import MyModal from "./Modal";
import RadioButton from "../../../../components/inputs/RadioButton";
import ServicesSelector from "./ServicesSelector";
import FileInput from "../../../../components/inputs/FileInput";
import CheckBox from "../../../../components/inputs/CheckBox";
import { distritos, jobElements } from "../../../../common/constants";
import Loading from "../../../../components/Loading";

export default function FormRegister() {
  useEffect(() => {
    document.getElementById("nombres").focus();
  }, []);
  const [isOpenSuccessModal, setIsOpenSuccessModal] = useState(false);
  const [isOpenErrorModal, setIsOpenErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [selectedServices, setSelectedServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCv, setSelectedCv] = useState(null);
  const [selectedCertijoven, setSelectedCertijoven] = useState(null);
  const [selectedDistrito, setSelectedDistrito] = useState(null);
  const [selectedProfesion, setSelectedProfesion] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const stringFormRef = {
    nombres: useRef(null),
    apellidos: useRef(null),
    email: useRef(null),
    password: useRef(null),
    dni: useRef(null),
    direccion: useRef(null),
    phone: useRef(null),
  };

  const defaultCity = {
    id: "6422762d086e93db5609dc7f",
    name: "Lima",
  };
  const defaultCountry = {
    id: "6422726c086e93db5609dc6e",
    name: "Peru",
  };

  const validateParams = () => {
    const { nombres, apellidos, email, password, dni, direccion, phone } =
      stringFormRef;

    if (
      nombres.current.value === "" ||
      apellidos.current.value === "" ||
      email.current.value === "" ||
      password.current.value === "" ||
      dni.current.value === "" ||
      direccion.current.value === "" ||
      phone.current.value === "" ||
      selectedDistrito === null ||
      selectedProfesion === null
    ) {
      return false;
    } else if (password.current.value.length < 8) return false;
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const files = [selectedCv, selectedCertijoven];
    const data = {
      first_name: stringFormRef.nombres.current.value,
      last_name: stringFormRef.apellidos.current.value,
      country_phone_code: "+51",
      phone: stringFormRef.phone.current.value,
      app_version: "1.0.0",
      referral_code: "",
      country_id: defaultCountry.id,
      country_name: defaultCountry.name,
      city_id: defaultCity.id,
      city_name: defaultCity.name,
      wallet_currency_code: "PEN",
      email: stringFormRef.email.current.value,
      password: stringFormRef.password.current.value,
      social_id: "",
      selectedServices,

      licenciaConducir: selectedOption === "Sí tengo" ? true : false,
      dni: stringFormRef.dni.current.value,
      direccion: stringFormRef.direccion.current.value,
      distrito: selectedDistrito,
      profesion: selectedProfesion,
    };

    console.log(data);
    if (validateParams()) {
      if (stringFormRef.dni.current.value.length !== 8) {
        setErrorMessage("El DNI debe tener 8 dígitos");
        setIsOpenErrorModal(true);
        return;
      }
      if (stringFormRef.phone.current.value.length !== 9) {
        setErrorMessage("El teléfono debe tener 9 dígitos");
        setIsOpenErrorModal(true);
        return;
      }
      if (files[0] === null || files[1] === null) {
        setErrorMessage("Debe subir los documentos");
        setIsOpenErrorModal(true);
      } else {
        const formData = new FormData();
        formData.append("data", JSON.stringify(data));
        formData.append("files", files[0]);
        formData.append("files", files[1]);
        setIsLoading(true);

        await fetch(ADMIN_URL + "/api/provider/register", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            setIsLoading(false);
            if (response.success) {
              setIsOpenSuccessModal(true);
            } else {
              setErrorMessage(response.message);
              setIsOpenErrorModal(true);
              console.log(response);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
      // }
    } else {
      setErrorMessage("Debe llenar todos los campos");
      setIsOpenErrorModal(true);
    }
  };

  return (
    <>
      <div class="flex h-full w-full items-center justify-center">
        <form onSubmit={handleSubmit} class="w-full space-y-4">
          <div className="relative">
            <h1 class="text-2xl lg:text-3xl text-gray-800 font-bold mb-8 lg:mb-3">
              Reg&iacute;strate
            </h1>
            <a href="/">
              <img
                src="/assets/images/logo-tiims.png"
                alt="tiims-logo"
                className="h-8 lg:hidden absolute top-0 right-0"
              />
            </a>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 gap-y-4 pb-2">
            {inputsText.map((input, index) => (
              <BasicInput
                ref={
                  input.name === "nombres"
                    ? stringFormRef.nombres
                    : input.name === "apellidos"
                    ? stringFormRef.apellidos
                    : input.name === "email"
                    ? stringFormRef.email
                    : input.name === "password"
                    ? stringFormRef.password
                    : null
                }
                key={index}
                name={input.name}
                label={input.label}
                type={input.type}
                placeholder={input.placeholder}
              />
            ))}
            <BasicInput
              ref={stringFormRef.dni}
              name={"dni"}
              label={"DNI"}
              type={"text"}
              placeholder={"DNI"}
              numberVerification
            />
            <BasicInput
              ref={stringFormRef.direccion}
              name={"direccion"}
              label={"Dirección"}
              type={"text"}
              placeholder={"Jr. Los Pinos 123"}
            />
            {/* phone */}
            <BasicInput
              ref={stringFormRef.phone}
              name={"phone"}
              label={"Teléfono"}
              type={"text"}
              placeholder={"999 999 999"}
              numberVerification
            />
            <section className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <label className="text-gray-500" htmlFor="">
                  Pa&iacute;s
                </label>
                <label className="text-gray-500" htmlFor="">
                  Ciudad
                </label>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500
                  bg-gray-100"
                  disabled
                  value="Perú"
                />
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500
                  bg-gray-100"
                  disabled
                  value="Lima"
                />
              </div>
            </section>

            <div className="space-y-2 grid">
              <label className="text-gray-500">Distrito</label>
              <SelectAutocomplete
                selectElement={selectedDistrito}
                setSelectElement={setSelectedDistrito}
                data={distritos}
              />
            </div>

            <RadioButton
              selected={selectedOption}
              setSelected={setSelectedOption}
              options={["Sí tengo", "No tengo"]}
              indexDefault={1}
            />

            <ServicesSelector
              selectedServices={selectedServices}
              setSelectedServices={setSelectedServices}
            />

            <div className="flex items-start w-full">
              <div className="space-y-2 grid w-full">
                <label className="text-gray-500">Ocupaci&oacute;n</label>
                <SelectAutocomplete
                  selectElement={selectedProfesion}
                  setSelectElement={setSelectedProfesion}
                  data={jobElements}
                />
              </div>
            </div>

            <section className="space-y-2">
              <label className="text-gray-500">Documentos</label>
              <div className="flex flex-wrap gap-4 gap-y-2 w-full">
                <FileInput
                  selectedFile={selectedCv}
                  setSelectedFile={setSelectedCv}
                  label="Sube tu curriculum"
                />
                <FileInput
                  selectedFile={selectedCertijoven}
                  setSelectedFile={setSelectedCertijoven}
                  label="Sube tu certijoven"
                />
              </div>
            </section>

            <section className="space-y-2">
              <label className="text-gray-500">Selecci&oacute;n</label>
              <div className="flex space-x-2">
                <p>
                  Estoy disponible para desempe&ntilde;arme de manera fija
                  (contrato)
                </p>
                <CheckBox />
              </div>
            </section>
          </div>
          <button
            type="submit"
            class="text-white bg-blue-500 px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors inline-flex space-x-2 items-center"
          >
            <span>Registrarse</span>
            {isLoading && <Loading />}
          </button>
        </form>
      </div>
      <MyModal isOpen={isOpenSuccessModal} setIsOpen={setIsOpenSuccessModal}>
        <div className="p-6 bg-white">
          <div className="relative">
            <h1 className="text-2xl font-bold text-gray-800 mb-3">
              Suscrito correctamente
            </h1>
            <i class="fa-solid fa-circle-check absolute right-0 top-0 text-xl text-green-600"></i>
          </div>
          <p className="text-gray-500">
            &#161;Genial! Bienvenido nuestro equipo. No olvides de descargar
            nuestra app disponible en Google Play, list@ para probarlo? 😉
          </p>
          <a
            target="_blank"
            href={LINK_ESPECIALISTA_GOOGLE_PLAY}
            className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors inline-flex space-x-2 items-center mt-5"
          >
            <span>&#161;Vamos!</span>
          </a>
        </div>
      </MyModal>
      <MyModal isOpen={isOpenErrorModal} setIsOpen={setIsOpenErrorModal}>
        <div className="p-6 bg-white">
          <div className="relative">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Error al suscribirse
            </h1>
            <i class="fa-solid fa-circle-exclamation absolute right-0 top-0 text-xl text-red-500"></i>
          </div>
          <p className="text-gray-500">{errorMessage}</p>
          <button
            onClick={() => setIsOpenErrorModal(false)}
            className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors inline-flex space-x-2 items-center mt-4"
          >
            <span>De acuerdo</span>
          </button>
        </div>
      </MyModal>
    </>
  );
}
