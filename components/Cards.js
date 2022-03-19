import Card from "./Card";
import { Container, Flex } from "./library";
const logo1 = "/icon-brand-recognition.svg";
const logo2 = "/icon-detailed-records.svg";
const logo3 = "/icon-fully-customizable.svg";


const Cards = () => {
  return (
    <Container pb={{xs:2, md:7}} mx={{ sm: 1, md: 2, lg: 9 }}>
      <Flex flexDirection={{xs:'column', md:'row'}} justifyContent='space-around'>
        <Card
          color="black"
          imgSrc={logo1}
          text='Brand Recognition'
        />
        <Card
          color="black"
          imgSrc={logo2}
          text='Detailed Records'
          position={{md:'relative'}}
          top={{md:4}}
        />
        <Card
          color="black"
          imgSrc={logo3}
          text='Fully Customizable'
          position={{md:'relative'}}
          top={{md:7}}
        />
      </Flex>
    </Container>
  );
};

export default Cards;
