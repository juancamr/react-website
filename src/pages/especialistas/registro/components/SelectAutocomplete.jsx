import { useEffect, useState } from "react";
import { Combobox } from "@headlessui/react";
import { forwardRef } from "react";
import { quitarTildes } from "../../../../utils/stringFormatter";

const SelectAutocomplete = ({ data, selectElement, setSelectElement }) => {
  useEffect(() => {
    setSelectElement(data[0]);
  }, []);
  const [query, setQuery] = useState("");

  const filteredData =
    query === ""
      ? data
      : data.filter((element) => {
          return quitarTildes(element.toLowerCase()).includes(
            quitarTildes(query.toLowerCase())
          );
        });

  return (
    <div className="grid relative">
      <Combobox
        value={selectElement}
        onChange={setSelectElement}
        name="distritosList"
      >
        <div className="relative w-full">
          <Combobox.Input
            className="rounded-lg border border-gray-300 px-4 py-2 w-full"
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Options
            className="bg-white absolute mt-3 shadow-xl rounded-xl p-4 border border-gray-300 overflow-auto
      max-h-60 w-full z-40
      "
          >
            {filteredData.map((distrito) => (
              <Combobox.Option
                className="cursor-pointer"
                key={distrito}
                value={distrito}
              >
                {distrito}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  );
};

export default SelectAutocomplete;
