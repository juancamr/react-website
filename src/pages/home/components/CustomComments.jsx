import Container from "../../../components/Container";
import CustomH2 from "../../../components/custom/CustomH2";
import CustomH3 from "../../../components/custom/CustomH3";
import CustomP from "../../../components/custom/CustomP";

const comments = [
  {
    photo: "assets/images/mockup.webp",
    name: "holamundo",
    comment:
      "Cillum est veniam do ex in minim non dolore. Deserunt deserunt ex dolore eu laborum ex.",
  },
  {
    photo: "assets/images/mockup.webp",
    name: "holamundo",
    comment:
      "Velit aute enim deserunt nisi. Proident qui minim reprehenderit aliqua aliqua officia.",
  },
  {
    photo: "assets/images/mockup.webp",
    name: "holamundo",
    comment:
      "Velit aute enim deserunt nisi. Proident qui minim reprehenderit aliqua aliqua officia.",
  },
  {
    photo: "assets/images/mockup.webp",
    name: "holamundo",
    comment:
      "Velit aute enim deserunt nisi. Proident qui minim reprehenderit aliqua aliqua officia.",
  },
];

function Comment({ image, name, comment }) {
  return (
    <div
      className="rounded-xl
        w-full
        backdrop-blur-md
        bg-black/50
        lg:flex
        p-5
        lg:p-0
        text-white
        "
    >
      <img
        src={image}
        alt=""
        className="
        mx-auto
        rounded-full
        lg:rounded-none
        lg:rounded-l-xl
        h-28 w-28
        md:h-40 md:w-40
        lg:mb-0
        lg:w-40
        xl:w-52
        2xl:w-64
        lg:h-auto
        object-cover
      "
      />
      <div className="p-5 lg:p-10">
        <CustomP styles="text-center lg:text-left mb-2 lg:mb-3">
          "{comment}"
        </CustomP>
        <CustomP styles="text-center lg:text-left text-orange-200">
          {name}
        </CustomP>
      </div>
    </div>
  );
}

export default function CustomComments() {
  return (
    <div
      className="
      py-5
      md:py-10
      xl:py-16
        "
      style={{
        backgroundImage: "url(https://images7.alphacoders.com/447/447466.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="h-full
        w-full
        py-6
      "
      >
        <Container>
          <CustomH2
            styles="text-center
                mb-5
                md:mb-8
                xl:mb-12
                text-white
        "
          >
            Nuestros clientes comentan
          </CustomH2>
          <div
            className="grid md:grid-cols-2 gap-5 lg:gap-10
          xl:gap-14
          "
          >
            {comments.map((comment, id) => (
              <Comment
                key={id}
                image={comment.photo}
                name={comment.name}
                comment={comment.comment}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
