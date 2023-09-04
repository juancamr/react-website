import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import MyModal from "./Modal";

export default function PoligrafoPopover() {
  const [open, setOpen] = useState(false);
  const servicesOnDemand = [
    "Limpieza",
    "Gasfitería",
    "Pintura",
    "Albañilería",
    "Electricista",
    "Profesores",
    "Paseo de mascotas",
  ];

  return (
    <>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button>
              <span className="ml-3">
                <i class="fa-solid fa-circle-info text-blue-500"></i>
              </span>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="p-4 bg-white border border-gray-200 shadow-xl rounded-lg max-w-md">
                  <p className="mb-2">
                    Pasar una prueba de poligrafo es importante si selecciona
                    servicios on demand
                  </p>
                  <span
                    className="cursor-pointer text-blue-500 hover:text-blue-600"
                    onClick={() => setOpen(true)}
                  >
                    Servicios on demand
                  </span>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <MyModal isOpen={open} setIsOpen={setOpen}>
        <div className="p-4 bg-white border border-gray-200 shadow-xl rounded-lg max-w-md">
          <h3 className="text-3xl font-bold mb-4">Servicios on demand</h3>
          <ul>
            {servicesOnDemand.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </MyModal>
    </>
  );
}
