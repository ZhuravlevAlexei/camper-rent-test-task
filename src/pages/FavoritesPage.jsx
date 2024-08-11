import { useSelector } from "react-redux";
import { selectFavItems } from "../redux/campers/selectors.js";
import Camper from "../components/Camper/Camper.jsx";
import Container from "../shared/components/Container/Container.jsx";

const FavoritesPage = () => {
  const favItems = useSelector(selectFavItems);

  const campers = [...favItems];

  return (
    <Container>
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        {campers.length &&
          campers.map((camper) => {
            return <Camper key={camper._id} camper={camper} />;
          })}
      </div>
    </Container>
  );
};

export default FavoritesPage;
