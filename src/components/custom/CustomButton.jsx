export default function CustomButton({
  children,
  styles,
  primary,
  orange,
  white,
  secondary,
  isLink,
  link,
  onClick,
}) {
  if (isLink) {
    return (
      <a
        href={link}
        class={`
    // custom
    ${styles}

    <!-- custom -->
    ${primary && "bg-blue-500 hover:bg-blue-600"}
    ${orange && "bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"}
    ${secondary && "border-darkblue-500 hover:bg-darkblue-500 hover:text-white"}
    ${white && "bg-white text-blue-500 hover:bg-blue-500 hover:text-white"}

    <!-- default -->
    rounded-3xl
    transition-all
    hover:rounded-none
    shadow-xl
    py-4
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
