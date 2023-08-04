import Socials from "../../home/components/Socials";

export default function Slogan({ text }) {
  return (
    <div
      className="flex items-center p-6 md:p-10
    bg-white
    rounded-3xl w-full"
    >
      <div>
        <h1 className="text-gray-800 text-4xl md:text-6xl 2xl:text-8xl font-bold uppercase mb-3">
          {text.heading}
        </h1>
        <p className="text-gray-400 text-xl lg:text-2xl mb-7 md:mb-10 leading-6">
          {text.content}
        </p>
      </div>
    </div>
  );
}
