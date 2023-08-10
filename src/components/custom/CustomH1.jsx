export default function CustomH1({ styles, children }) {
  return (
    <h1
      class={`
    // custom
    ${styles}

    // default
    text-5xl
    
    lg:text-6xl
    
    xl:text-7xl
`}
    >
      {children}
    </h1>
  );
}
