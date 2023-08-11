const MainContainer = ({ children, beige, blue }) => {
  return (
    <main
      className={`
      py-20 lg:py-28
      space-y-14
      xl:space-y-20
      ${beige ? "bg-beige" : blue ? "bg-bluepastel" : "bg-white"}
      `}
    >
      {children}
    </main>
  );
};

export default MainContainer;
