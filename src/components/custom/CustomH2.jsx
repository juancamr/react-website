export default function CustomH2({ styles, children }) {
  return (
    <h2
      class={`
    // custom
    ${styles}

    // default
    text-3xl
    font-bold

    lg:text-4xl

`}
    >
      {children}
    </h2>
  );
}
