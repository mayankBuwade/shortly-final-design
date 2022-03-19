import { useState } from "react";
import { Container, Text, Image, Link, Flex, Button } from "./library";
const menuIcon = "/menu.png";

const Navbar = () => {
  const [toDisplay, setToDisplay] = useState("none");

  return (
    <Container mx={{ xs: 4, md: 2, lg: 9 }} py={3}>
      <Flex alignItems="center" justifyContent="space-between">
        <Container width="100%" display="flex" justifyContent="space-between">
          <Flex alignItems="center">
            <Text fontWeight={7} fontSize={"larger"} color="black">
              Shortly
            </Text>
            <Container
              display={{ xs: "none", sm: "block" }}
              color={"gray"}
              fontSize={"title"}
            >
              <Link color={"gray"}>Features</Link>
              <Link color={"gray"}>Pricing</Link>
              <Link color={"gray"}>Resources</Link>
            </Container>
          </Flex>
          <Flex display={{ xs: "none", sm: "flex" }} alignItems="center">
            <Link mx={4} color={"gray"} fontSize={"title"}>
              Login
            </Link>
            <Button isHover={true} p={1} px={2}>
              Sign Up
            </Button>
          </Flex>
        </Container>
        <Container display={{ xs: "block", sm: "none" }}>
          <Button
            bg="white"
            onClick={() =>
              setToDisplay(toDisplay === "none" ? "block" : "none")
            }
          >
            <Image src={menuIcon} />
          </Button>

          <Container
            zIndex={1}
            left="1.1rem"
            top={"7rem"}
            position="absolute"
            width="90%"
            bg="darkViolet"
            display={toDisplay}
            borderRadius="15px"
          >
            <Flex flexDirection="column" alignItems="center" py={2}>
              <Link p={1} m={0} color="white">
                Features
              </Link>
              <Link p={1} m={0} color="white">
                Pricing
              </Link>
              <Link p={1} m={0} mb={1} color="white">
                Resources
              </Link>
              <hr width="80%" border="solid" radius="1px" borderRadius="1px" />
              <Link p={1} m={0} my={1} color="white">
                Login
              </Link>
              <Button isHover={true} p={1} px={2}>
                Sign Up
              </Button>
            </Flex>
          </Container>
        </Container>
      </Flex>
    </Container>
  );
};

export default Navbar;
