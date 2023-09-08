import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";

export default function CheckBox({ wantsPermanentJob, setWantsPermanentJob }) {
  return (
    <Switch
      checked={wantsPermanentJob}
      onChange={() => {
        setWantsPermanentJob((prev) => !prev);
      }}
      className={`${wantsPermanentJob ? "bg-blue-500" : "bg-gray-100"}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Trabajo fijo</span>
      <span
        aria-hidden="true"
        className={`${wantsPermanentJob ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  );
}
