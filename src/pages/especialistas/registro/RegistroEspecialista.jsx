import Banner from "./components/Banner";
import FormRegister from "./components/FormRegister";

export default function RegistroEspecialista() {
  return (
    <main class="min-h-screen flex items-center justify-center w-screen sm:p-6 sm:py-4 md:p-16 md:py-4 lg:p-4 bg-bluepastel 2xl:px-40 ">
      <div className="grid lg:grid-cols-3 h-full sm:rounded-3xl bg-white border border-gray-100 shadow-lg transition-all">
        <div className="col-span-1 hidden lg:block">
          <Banner />
        </div>
        <div className="col-span-2 h-full p-6 py-14 lg:py-6 lg:px-8">
          <FormRegister />
        </div>
      </div>
    </main>
  );
}
