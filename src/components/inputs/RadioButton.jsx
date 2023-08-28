import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";

const RadioButton = ({ options, indexDefault, setSelected, selected }) => {
  useEffect(() => {
    setSelected(options[indexDefault]);
  }, []);

  return (
    <div className="w-full space-y-2">
      <label htmlFor="" className="text-gray-500">
        Licencia de conducir
      </label>
      <div className="w-full">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="grid grid-cols-2 gap-2">
            {options.map((option) => (
              <RadioGroup.Option
                key={option}
                value={option}
                className={({ active, checked }) =>
                  `${active ? " ring-white ring-opacity-60" : ""}
                  ${
                    checked
                      ? " border-blue-500 border-2"
                      : "bg-white border-gray-300"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-2.5  border`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${"text-gray-900"}`}
                          >
                            {option}
                          </RadioGroup.Label>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-blue-500">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default RadioButton;
