import Comments from "../../../components/comments/Comments";
import Container from "../../../components/Container";
import { home } from "../../../common/content";

const UserComments = () => {
  const { userCommentsSection } = home;
  return (
    <Container>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 flex items-center">
          <div>
            <h2
              className="
            text-3xl text-gray-700 text-center  font-bold mb-2
            md:text-left md:text-4xl md:mb-4
            lg:text-5xl
          "
            >
              {userCommentsSection.title}
            </h2>
            <p
              className="text-base text-gray-600 font-light text-center
            md:text-left md:text-xl
          "
            >
              {userCommentsSection.paragraph}
            </p>
          </div>
        </div>
        <div className="lg:col-span-2">
          <Comments
            comments={userCommentsSection.comments}
            color="orange"
          />
        </div>
      </div>
    </Container>
  );
};

export default UserComments;
