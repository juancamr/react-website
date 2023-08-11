import Container from "./Container";

const SloganContainer = ({ children, blue, orange, isCompany, styles }) => {
  return (
    <Container>
      <div
        className={`
        ${styles}
        rounded-xl
        xl:rounded-[50px] bg-gradient-
        ${
          orange &&
          "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-yellow-500 to-orange-500"
        }
        ${
          blue &&
          "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-300 to-blue-600"
        }
        ${!isCompany && "grid md:grid-cols-2 gap-10"}
        xl:h-[700px]
        `}
      >
        {children}
      </div>
    </Container>
  );
};

export default SloganContainer;
