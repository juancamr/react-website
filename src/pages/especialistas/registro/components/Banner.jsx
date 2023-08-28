import EspecialistasComments from "../components/EspecialistasComments";

export default function Banner() {
  return (
    <section className="bg-darkblue-400 rounded-3xl p-6 xl:p-10 h-full w-full">
      <div className="h-1/2 relative flex items-end">
        <a href="/" className="absolute top-0">
          <img
            src="/assets/images/tiims-blanco.png"
            alt="tiims-logo"
            className="h-7"
          />
        </a>
        <div className="space-y-4">
          <h2 className="text-white text-5xl font-bold">
            Tu &eacute;xito comienza aqu&iacute;.
          </h2>
          <p className="text-white text-xl font-light">
            &Uacute;nete como especialista y empieza a ganar en tu horario.
          </p>
        </div>
      </div>
      <div className="h-1/2 flex items-end">
        <EspecialistasComments />
      </div>
    </section>
  );
}
