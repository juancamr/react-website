import Container from "../../../components/Container";

import { company } from "../../../common/content";
import CustomH2 from "../../../components/custom/CustomH2";

const Mapa = () => {
  const { title } = company.mapa;
  return (
    <Container>
      <CustomH2 styles="text-center text-darkblue-500">{title}</CustomH2>
      <div
        className=" 
        py-5
        xl:px-20
        "
      >
        <img src="assets/images/update/map.png" alt="" />
      </div>
    </Container>
  );
};

export default Mapa;
