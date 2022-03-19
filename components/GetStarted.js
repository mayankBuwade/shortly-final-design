import { css } from "@emotion/react";
import { Button, Container, Flex, Text } from "./library";
import Box from "./library/Box";
const bgM = "/bg-boost-mobile.svg";
const bgD = "/bg-boost-desktop.svg";

const GetStarted = () => {
  return (
    <Container>
      <Box
        backgroundImage={{ xs: `url(${bgM})`, sm: `url(${bgD})` }}
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-size: cover;
          background-repeat: no-repeat;
        `}
        width={{ xl: "1440px" }}
        height={{ xl: "250px" }}
        bg="darkViolet"
        py={3}
      >
        <Flex flexDirection="column">
          <Text as="h1" color="white" fontSize="larger">
            Boost your links today
          </Text>
          <Button isHover={true} p={1} px={3} mt={3} fontSize="bigger">
            Get Started
          </Button>
        </Flex>
      </Box>
    </Container>
  );
};

export default GetStarted;
