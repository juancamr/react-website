export default function CustomButton({
  children,
  styles,
  primary,
  orange,
  white,
  secondary,
  isLink,
  currentPage,
  link,
  small,
  fullWidth,
  onClick,
}) {
  if (isLink) {
    return (
      <a
        href={link}
        target={`${currentPage ? "_self" : "_blank"}`}
        class={`
    // custom
    ${styles}

    <!-- custom -->
    ${primary && "bg-blue-500 hover:bg-blue-600"}
    ${orange && "bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"}
    ${secondary && "border-darkblue-500 hover:bg-darkblue-500 hover:text-white"}
    ${white && "bg-white text-blue-500 border border-gray-300"}
    ${small ? "py-2" : "py-4"}
    ${fullWidth && "w-full text-center"}

    <!-- default -->
    rounded-3xl
    transition-all
    hover:rounded-lg
    shadow-xl
    px-7

    <!-- font -->
    text-lg
    lg:text-xl
    font-medium
`}
      >
        {children}
      </a>
    );
  }
}
