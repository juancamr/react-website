import {
  LINK_USER_GOOGLE_PLAY,
  LINK_ESPECIALISTA_GOOGLE_PLAY,
} from "../common/constants";

export default function Download({ users, heading, subHeading }) {
  return (
    <div
      className="absolute
        top-1/2
          w-3/4
          lg:w-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2 backdrop-blur-md bg-black/30
        text-white
        p-6 md:p-10 xl:p-20
        rounded-xl
        "
    >
      <h1
        className="
        text-center
        text-white-500
        font-bold
        text-3xl
        md:text-4xl
        xl:text-5xl
        xl:mb-4
        px-4
        mb-2
        "
      >
        {heading}
      </h1>
      <p className="text-white text-center md:text-left text-xl md:text-2xl mb-6 px-4 ">
        {subHeading}
      </p>
      <div className="flex justify-center">
        <a
          href={users ? LINK_USER_GOOGLE_PLAY : LINK_ESPECIALISTA_GOOGLE_PLAY}
          className={`
            px-5
            py-4
            xl:px-10
            xl:py-5
            bg-gradient-to-r
            ${
              users
                ? "from-orange-500 via-orange-600 to-orange-700"
                : "from-blue-500 via-blue-600 to-blue-700"
            }
            text-white
            text-xl
            2xl:text-2xl
            text-md
            shadow-lg
            rounded-3xl
            hover:from-orange-700 hover:via-orange-600 hover:to-orange-500
            `}
        >
          Descarga la app <i class="fa-brands ml-2 fa-google-play"></i>
        </a>
      </div>
    </div>
  );
}
