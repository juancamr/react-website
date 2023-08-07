export default function Heading({ children, className }) {
  return (
    <h1
      className={`
        ${className}
        font-bold
        text-3xl
        md:text-4xl
        xl:text-5xl
        `}
    >
      {children}
    </h1>
  );
}
