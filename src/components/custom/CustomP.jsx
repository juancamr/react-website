export default function CustomP({ styles, children }) {
  return (
    <p
      className={`
    // custom
    ${styles}

    // default
    text-lg

    lg:text-xl

    xl:text-2xl
`}
    >
      {children}
    </p>
  );
}
