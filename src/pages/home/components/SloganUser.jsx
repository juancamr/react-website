import Container from "../../../components/Container";
import CustomH1 from "../../../components/custom/CustomH1";
import CustomP from "../../../components/custom/CustomP";
import CustomButton from "../../../components/custom/CustomButton";
import { LINK_USER_GOOGLE_PLAY, WEBSITE_URL } from "../../../common/constants";

export default function SloganUser() {
  return (
    <Container>
      <div
        className="
        rounded-3xl bg-gradient-
        bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-yellow-500 to-orange-500
        grid
        md:grid-cols-2
        gap-10
        "
      >
        <div className="p-5">
          <CustomH1 styles={"text-white mb-4"}>
            La app multiservicios N1 del Per&uacute;
          </CustomH1>
          <CustomP styles={"text-slate-200 mb-6"}>
            Contrata especialistas verificados y confiables para resolver tus
            tareas del hogar
          </CustomP>
          <div className="mb-7">
            <CustomButton isLink link={LINK_USER_GOOGLE_PLAY} styles={"mb-5"} white>
              Descarga la app
            </CustomButton>
          </div>
          <div>
            <CustomButton isLink link={`${WEBSITE_URL}/app/reservar`} white>
              Reserva tus servicios
            </CustomButton>
          </div>
        </div>
        <div className="flex justify-end items-end">
          <img
            className="h-52"
            src="assets/images/update/mockup_top.png"
            alt="mockup"
          />
        </div>
      </div>
    </Container>
  );
}
