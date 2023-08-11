import CustomP from "./custom/CustomP";

export default function Card({ icon, text }) {
  return (
    <div
      className="
        rounded-3xl
        p-5
        flex
        items-center
        justify-center
        border
        border-gray-300
        shadow-lg
        "
    >
      <div>
        <img className="mx-auto mb-3 2xl:h-36 w-36" src={icon} alt={icon} />
        <CustomP styles={"text-center text-gray-800"}>{text}</CustomP>
      </div>
    </div>
  );
}
