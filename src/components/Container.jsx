export default function Container({ styles, children }) {
  return (
    <div
      className={`
        ${styles}
          px-4
          sm:px-16
          md:px-20
          xl:px-40
          2xl:px-52
      `}
    >
      {children}
    </div>
  );
}
