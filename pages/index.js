import Cards from "../components/Cards";
import Details from "../components/Details";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import { Container } from "../components/library";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Venue from "../components/Venue";

const Home = () => {
  return (
    <Container>
      <Container bg='white' pb={9}>
        <Navbar />
        <Venue />
      </Container>
      <Container bg='lightGray'>
        <SearchBar />
        <Details />
        <Cards />
        <GetStarted />
        <Footer />
      </Container>
    </Container>
  );
};

export default Home;
