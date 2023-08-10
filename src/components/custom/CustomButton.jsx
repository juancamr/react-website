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
    ${orange && "bg-orange-500 hover:bg-orange-600"}
    ${secondary && "border-darkblue-500 hover:bg-darkblue-500 hover:text-white"}
    ${white && "bg-white hover:bg-slate-400 text-blue-500"}

    <!-- default -->
    rounded-3xl
    transition-colors
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
