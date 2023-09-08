import {
  ADMIN_URL,
  LINK_ESPECIALISTA_GOOGLE_PLAY,
  inputsText,
  servicesOnDemand,
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
import { validateEmail } from "../../../../utils/stringFormatter";
import PoligrafoPopover from "./poligrafo-popover";
import { Switch } from "@headlessui/react";

export default function FormRegister() {
  useEffect(() => {
    document.getElementById("nombres").focus();
  }, []);
  const [isOpenSuccessModal, setIsOpenSuccessModal] = useState(false);
  const [isOpenErrorModal, setIsOpenErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [needsPoligrafo, setNeedsPoligrafo] = useState(false);

  const [selectedServices, setSelectedServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCv, setSelectedCv] = useState(null);
  const [selectedCertijoven, setSelectedCertijoven] = useState(null);
  const [selectedDistrito, setSelectedDistrito] = useState(null);
  const [selectedProfesion, setSelectedProfesion] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [wantsPermanentJob, setWantsPermanentJob] = useState(false);

  const stringFormRef = {
    nombres: useRef(null),
    apellidos: useRef(null),
    email: useRef(null),
    password: useRef(null),
    dni: useRef(null),
    direccion: useRef(null),
    phone: useRef(null),
    fecha: useRef(null),
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
      selectedDistrito === null
    ) {
      return {
        success: false,
        message: "Debe llenar todos los campos",
      };
    } else if (password.current.value.length < 8)
      return {
        success: false,
        message: "La contraseña debe tener más de 8 caracteres",
      };
    else if (
      (selectedProfesion === null || selectedProfesion === "Ninguno") &&
      selectedServices.length === 0
    ) {
      return {
        success: false,
        message: "Debe seleccionar una ocupación o especialidad",
      };
    }
    return { success: true };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const files = [selectedCv, selectedCertijoven];
    let data = {
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
      wantsPermanentJob,
    };

    if (stringFormRef.fecha.current) {
      if (stringFormRef.fecha.current.value !== "") {
        data = { ...data, fecha: stringFormRef.fecha.current.value };
      }
    }

    const response = validateParams();
    if (response.success) {
      if (validateEmail(stringFormRef.email.current.value) === false) {
        setErrorMessage("El correo no es válido");
        setIsOpenErrorModal(true);
        return;
      }
      if (stringFormRef.phone.current.value.length !== 9) {
        setErrorMessage("El teléfono debe tener 9 dígitos");
        setIsOpenErrorModal(true);
        return;
      }

      for (let i = 0; i < selectedServices.length; i++) {
        const service = selectedServices[i];
        if (servicesOnDemand.includes(service._id)) {
          if (stringFormRef.fecha.current) {
            if (stringFormRef.fecha.current.value === "") {
              setErrorMessage(
                "Es necesario que agende una fecha para una prueba de confiabilidad"
              );
              setIsOpenErrorModal(true);
              return;
            }
            if (new Date(stringFormRef.fecha.current.value) < new Date()) {
              setErrorMessage(
                "La fecha de la prueba de confiabilidad debe ser mayor a la fecha actual"
              );
              setIsOpenErrorModal(true);
              return;
            }
          }
        }
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
            setIsLoading(false);
            if (response.success) {
              setIsOpenSuccessModal(true);
            } else {
              setErrorMessage(response.message);
              setIsOpenErrorModal(true);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
      // }
    } else {
      setErrorMessage(response.message);
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
            {/* <BasicInput
              ref={stringFormRef.dni}
              name={"dni"}
              label={"DNI"}
              type={"text"}
              placeholder={"DNI"}
              numberVerification
            /> */}
            <div className="flex items-start w-full transition-all">
              <div class="grid space-y-2 w-full">
                <label
                  for="price"
                  class="block text-base font-medium leading-6 text-gray-500"
                >
                  Documento de identidad
                </label>
                <div class="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="text"
                    name="price"
                    ref={stringFormRef.dni}
                    id="price"
                    class="block w-full rounded-lg border-0 pl-4 py-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                    placeholder="Número de documento"
                  />
                  <div class="absolute inset-y-0 right-0 flex items-center border border-l-white border-y-gray-300 rounded-r-lg px-2">
                    <label for="currency" class="sr-only">
                      Tipo
                    </label>
                    <select
                      id="currency"
                      name="currency"
                      class="h-full rounded-md border-0 bg-transparent py-0 pl-2 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    >
                      <option>PERUANO</option>
                      <option>EXTRANJERO</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
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
              label={"Celular"}
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
                  value="Lima / Callao"
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
              setNeedsPoligrafo={setNeedsPoligrafo}
            />
            {needsPoligrafo && (
              <div className="space-y-2">
                <label className="text-gray-500 flex ">
                  Fecha prueba de confiabilidad
                  <span>
                    <PoligrafoPopover />
                  </span>
                </label>
                <div class="relative max-w-sm">
                  <input
                    ref={stringFormRef.fecha}
                    type="date"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Seleccionar fecha"
                  />
                </div>
              </div>
            )}

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
              <label className="text-gray-500">Modalidad de trabajo</label>
              <div className="flex w-full">
                <p className="mr-auto">Por horas</p>
                <Switch
                  className={`bg-blue-500 relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 opacity-50`}
                >
                  <span
                    aria-hidden="true"
                    className={`translate-x-9 pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                  />
                </Switch>
              </div>
              <div className="flex space-x-2">
                <p>
                  Activar la casilla si estoy interesado en contrato a tiempo
                  completo.
                </p>
                <CheckBox
                  wantsPermanentJob={wantsPermanentJob}
                  setWantsPermanentJob={setWantsPermanentJob}
                />
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
