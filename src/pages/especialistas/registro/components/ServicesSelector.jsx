import { useState, useEffect } from "react";
import { ADMIN_URL, servicesOnDemand } from "../../../../common/constants";
import { defaultLocation } from "../../../../common/constants";
import { Combobox } from "@headlessui/react";
import { quitarTildes } from "../../../../utils/stringFormatter";

const ServicesSelector = ({
  selectedServices,
  setSelectedServices,
  setNeedsPoligrafo,
}) => {
  const [services, setServices] = useState([]);
  const [query, setQuery] = useState("");

  const filteredServices =
    query === ""
      ? services
      : services.filter((service) => {
          return quitarTildes(service.name.en.toLowerCase()).includes(
            quitarTildes(query.toLowerCase())
          );
        });

  const fetchData = async () => {
    try {
      const response = await fetch(`${ADMIN_URL}/api/admin/get_service_list`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(defaultLocation),
      });
      const data = await response.json();
      setServices(data.service_list);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    return async () => {
      await fetchData();
    };
  }, []);

  return (
    <div>
      <div className="space-y-2">
        <div className="space-y-2 grid relative">
          <label htmlFor="distritosList" className="text-gray-500">
            Especialidades en Tiims
          </label>
          <Combobox
            onChange={() => {
              // setSelectedServices(function (prev) {
              //   if (prev.includes(filteredServices[0])) return prev;
              //   console.log("hola");
              //   return [...prev, filteredServices[0]];
              // });
            }}
            name="distritosList"
          >
            <div className="relative w-full">
              <Combobox.Input
                placeholder="Buscar una especialidad ..."
                className="rounded-lg border border-gray-300 px-4 py-2 w-full"
                onChange={(event) => setQuery(event.target.value)}
              />
              <Combobox.Options
                className="bg-white absolute mt-3 shadow-xl rounded-xl p-4 border border-gray-300 overflow-auto
      max-h-60 w-full z-40
      "
              >
                {filteredServices.map((service) => (
                  <Combobox.Option
                    className="cursor-pointer"
                    key={service._id}
                    onClick={() => {
                      setSelectedServices((prev) => {
                        if (prev.includes(service)) return prev;
                        const entireServices = [...prev, service];
                        entireServices.forEach((service_id) => {
                          if (servicesOnDemand.includes(service_id._id)) {
                            setNeedsPoligrafo(true);
                          }
                        });
                        return entireServices;
                      });
                    }}
                  >
                    {service.name.en}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            </div>
          </Combobox>
        </div>
      </div>
      {selectedServices.length > 0 && (
        <SelectedServices
          setNeedsPoligrafo={setNeedsPoligrafo}
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
        />
      )}
    </div>
  );
};

function SelectedServices({
  selectedServices,
  setSelectedServices,
  setNeedsPoligrafo,
}) {
  const deleteSelectedService = (id) => () => {
    setSelectedServices(() => {
      const finalSelected = selectedServices.filter(
        (service) => service._id !== id
      );
      if (finalSelected.length === 0) {
        setNeedsPoligrafo(false);
        return finalSelected;
      }

      const notIncludes = [];
      finalSelected.forEach((service) => {
        const { _id } = service;
        if (!servicesOnDemand.includes(_id)) {
          notIncludes.push(service);
        }
      });
      if (notIncludes.length === finalSelected.length) {
        setNeedsPoligrafo(false);
      }
      return finalSelected;
    });
  };

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {selectedServices.map((service) => (
        <span
          key={service._id}
          className="bg-slate-100 text-black rounded-xl px-4 pe-3 py-2"
        >
          {service.name.en}
          <button
            onClick={deleteSelectedService(service._id)}
            className="ml-3 rounded-full  px-2 "
          >
            <i class="fa-solid fa-x text-[10px] text-gray-500"></i>
          </button>
        </span>
      ))}
    </div>
  );
}

export default ServicesSelector;
