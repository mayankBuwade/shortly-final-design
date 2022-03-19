import { Container, Flex, FooterLink, Image, Text } from "./library";
const ig = "/icon-instagram.svg";
const fb = "/icon-facebook.svg";
const pt = "/icon-pinterest.svg";
const tw = "/icon-twitter.svg";


const Footer = () => {
  return (
    <Container bg="veryDarkBlue" py={5} px={4}>
      <Flex flexDirection={{xs:'column', sm:'row'}} alignContent={{xs:'center', sm:"space-between"}}  borderColor="red">
        <Container>
          <Text as="h1" color="white">
            Shortly
          </Text>
        </Container>
        <Container>
          <Flex flexDirection="column" justifyContent='center' alignItems={{xs:'center', sm:'flex-start'}}>
            <Text as="h3" m={{xs:3, sm:0}} color="white">
              Features
            </Text>
            <FooterLink>Link Shortening</FooterLink>
            <FooterLink>Branded Link</FooterLink>
            <FooterLink>Analytics</FooterLink>
          </Flex>
        </Container>
        <Container>
          <Flex flexDirection="column" justifyContent='center' alignItems={{xs:'center', sm:'flex-start'}}>
            <Text as="h3" m={{xs:3, sm:0}} color="white">
              Resources
            </Text>
            <FooterLink>Blog</FooterLink>
            <FooterLink>Developers</FooterLink>
            <FooterLink>Support</FooterLink>
          </Flex>
        </Container>
        <Container>
          <Flex flexDirection="column" justifyContent='center' alignItems={{xs:'center', sm:'flex-start'}}>
            <Text as="h3" m={{xs:2, sm:0}} color="white">
              Company
            </Text>
            <FooterLink>About</FooterLink>
            <FooterLink>Our Team</FooterLink>
            <FooterLink>Careers</FooterLink>
            <FooterLink>Contact</FooterLink>
          </Flex>
        </Container>
        <Container>
          <Flex m={{xs:2, sm:0}}>
            <Image p={{xs:2, sm:1}}  src={fb} alt='ig' />
            <Image p={{xs:2, sm:1}}  src={tw} alt='ig' />
            <Image p={{xs:2, sm:1}}  src={pt} alt='ig' />
            <Image p={{xs:2, sm:1}}  src={ig} alt='ig' />
          </Flex>
        </Container>
      </Flex>
    </Container>
  );
};

export default Footer;
