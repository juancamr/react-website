import Heading from "./text/Heading";
import Paragraph from "./text/Paragraph";

export default function () {
  return (
    <div
      className="lg:w-1/2 lg:mx-auto
      mx-4
      text-center
        bg-slate-50 text-slate-900
        rounded-3xl
        p-8 md:p-14 lg:p-20 xl:p-20
        shadow
    "
    >
      <div className="w-full">
        <i class="fa-solid fa-at text-5xl mb-4"></i>
      </div>
      <Heading className="uppercase mb-3">Suscr&iacute;bete</Heading>
      <Paragraph className="mb-5">
        Suscr&iacute;bete a nuestro newsletter y mantente actualizado.
      </Paragraph>
      <div className="grid grid-cols-5 gap-x-2 lg:w-1/2 mx-auto">
        <input
          className="rounded-3xl border border-gray-200 shadow-xl
          col-span-3
        text-lg px-4 py-2
        "
          type="text"
          placeholder="yo@yo.com"
        />
        <button className="bg-orange-400
        rounded-3xl px-3 col-span-2
        ">Suscribirme</button>
      </div>
    </div>
  );
}
