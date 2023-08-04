import { Zoom } from "react-reveal";

export default function PlanesReclutamiento() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-10 gap-5 xl:gap-0">
      <div className="flex items-center xl:col-span-3 w-full">
        <div className="rounded-3xl xl:rounded-r-none border border-gray-400 p-7 md:p-10 shadow-xl w-full bg-slate-50">
          <div className="p-3.5 rounded-full bg-blue-500 w-14 text-center mb-3.5">
            <i className="fa-solid fa-cube text-slate-50 text-xl"></i>
          </div>
          <div className="bg-blue-200 text-blue-800 text-sm uppercase rounded-3xl px-3 py-1 w-fit mb-6">
            Reclutatamiento 90&#176;
          </div>
          <p className="text-slate-950 text-5xl mb-10">S/215</p>
          <ul className="text-base text-gray-800 mb-6">
            <li>
              <i className="fa-solid fa-check px-1.5 py-1 text-slate-50 rounded-full bg-blue-700 mr-2 mb-2 text-xs"></i>
              Verificaci&oacute;n social
            </li>
            <li>
              <i className="fa-solid fa-check px-1.5 py-1 text-slate-50 rounded-full bg-blue-700 mr-2 mb-2 text-xs"></i>
              Entrevista preempleo
            </li>
          </ul>
        </div>
      </div>
      <div
        className="rounded-3xl 
        bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900
        p-6 md:p-10 md:pb-14 text-slate-50
        shadow-xl xl:col-span-4"
      >
        <div className="p-3.5 rounded-full bg-blue-500 w-14 text-center mb-3.5">
          <i className="fa-solid fa-cube text-slate-50 text-xl"></i>
        </div>
        <div className="bg-slate-50 text-blue-800 uppercase rounded-3xl px-3 py-1 w-fit mb-6">
          Reclutatamiento 360&#176;
        </div>
        <p className="text-slate-50 text-5xl mb-10">S/2456</p>
        <ul className="text-base text-slate-50 mb-6">
          <li>
            <i className="fa-solid fa-check px-1.5 py-1 text-slate-50 rounded-full bg-blue-700 mr-2 mb-2 text-xs"></i>
            Verificaci&oacute;n domiciliaria
          </li>
          <li>
            <i className="fa-solid fa-check px-1.5 py-1 text-slate-50 rounded-full bg-blue-700 mr-2 mb-2 text-xs"></i>
            Verificacion academica
          </li>
          <li>
            <i className="fa-solid fa-check px-1.5 py-1 text-slate-50 rounded-full bg-blue-700 mr-2 mb-2 text-xs"></i>
            Verificacion laboral
          </li>
          <li>
            <i className="fa-solid fa-check px-1.5 py-1 text-slate-50 rounded-full bg-blue-700 mr-2 mb-2 text-xs"></i>
            Verificacion crediticia
          </li>
          <li>
            <i className="fa-solid fa-check px-1.5 py-1 text-slate-50 rounded-full bg-blue-700 mr-2 mb-2 text-xs"></i>
            Verificacion social
          </li>
          <li>
            <i className="fa-solid fa-check px-1.5 py-1 text-slate-50 rounded-full bg-blue-700 mr-2 mb-2 text-xs"></i>
            Entrevista psicologica
          </li>
          <li>
            <i className="fa-solid fa-check px-1.5 py-1 text-slate-50 rounded-full bg-blue-700 mr-2 mb-2 text-xs"></i>
            Entrevista pre-seleccion
          </li>
          <li>
            <i className="fa-solid fa-check px-1.5 py-1 text-slate-50 rounded-full bg-blue-700 mr-2 mb-2 text-xs"></i>
            Entrevista pre-empleo
          </li>
          <li>
            <i className="fa-solid fa-check px-1.5 py-1 text-slate-50 rounded-full bg-blue-700 mr-2 mb-2 text-xs"></i>
            Prueba psicolaboral proyectiva
          </li>
          <li>
            <i className="fa-solid fa-check px-1.5 py-1 text-slate-50 rounded-full bg-blue-700 mr-2 mb-2 text-xs"></i>
            Prueba psicolaboral conductual
          </li>
          <li>
            <i className="fa-solid fa-check px-1.5 py-1 text-slate-50 rounded-full bg-blue-700 mr-2 mb-2 text-xs"></i>
            Prueba confidiabilidad (poligraf&iacute;a)
          </li>
        </ul>
      </div>
      <div className="flex items-center xl:col-span-3">
        <div className="rounded-3xl xl:rounded-l-none border border-gray-400 p-6 md:p-10 w-full shadow-xl bg-slate-50">
          <div className="p-3.5 rounded-full bg-blue-500 w-14 text-center mb-3.5">
            <i className="fa-solid fa-cube text-slate-50 text-xl"></i>
          </div>
          <div className="bg-blue-200 text-blue-800 text-sm uppercase rounded-3xl px-3 py-1 w-fit mb-6">
            Reclutatamiento 180&#176;
          </div>
          <p className="text-slate-950 text-5xl mb-10">S/279</p>
          <ul className="text-base text-gray-800 mb-6">
            <li>
              <i className="fa-solid fa-check px-1.5 py-1 text-slate-50 rounded-full bg-blue-700 mr-2 mb-2 text-xs"></i>
              Verificacion social
            </li>
            <li>
              <i className="fa-solid fa-check px-1.5 py-1 text-slate-50 rounded-full bg-blue-700 mr-2 mb-2 text-xs"></i>
              Entrevista preempleo
            </li>
            <li>
              <i className="fa-solid fa-check px-1.5 py-1 text-slate-50 rounded-full bg-blue-700 mr-2 mb-2 text-xs"></i>
              Prueba psicolaboral
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
