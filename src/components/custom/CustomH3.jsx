export default function CustomH3({ styles, children }) {
  return (
    <h2
      class={`
    // custom
    ${styles}

    // default
    text-2xl
    font-bold

    lg:text-[3.25rem]
    leading-[50px]
`}
    >
      {children}
    </h2>
  );
}
