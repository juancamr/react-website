export default function CustomH3({ styles, children }) {
  return (
    <h2
      class={`
    // custom
    ${styles}

    // default
    text-[2.5rem]
    font-medium

    lg:text-[3.25rem]
`}
    >
      <slot />
    </h2>
  );
}
