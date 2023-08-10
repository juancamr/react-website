export default function CustomH2({ styles, children }) {
  return (
    <h2
      class={`
    // custom
    ${styles}

    // default
    text-4xl
    font-medium

    lg:text-5xl

`}
    >
      <slot />
    </h2>
  );
}
