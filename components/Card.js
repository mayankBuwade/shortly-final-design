import { css } from "@emotion/react";
import { Container, Flex, Image, Text } from "./library";
import Box from "./library/Box";

const Card = (props) => {
  return (
    <Container py={4}>
      <Flex
        flexDirection="column"
        width="345px"
        bg="white"
        px={3}
        py={2}
        mx={5}
        {...props}
      >
        <Box
          width={[6, "75px"]}
          height={[6, "75px"]}
          borderRadius="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor="darkViolet"
          position="relative"
          right={{xs:0, md:8}}
          bottom={5}
        >
          <Image
            src={props.imgSrc}
            alt={props.imgAlt}
            width={"45px"}
            height={"45px" || imgHeight}
          />
        </Box>
        <Text
          position="relative"
          bottom={3}
          as="h1"
          mx={0}
          mb={3}
          fontSize={"big"}
          textAlign={{xs:'center', md:'left'}}
        >
          {props.text}
        </Text>
        <Text
          position="relative"
          bottom={2}
          textAlign={{xs:'center', md:'left'}}
          fontSize={"title"}
          color="gray"
        >
          Boost your brand recognition with each click. Generic links don&apos;t
          mean a thing. Branded links helps instil confidence in your content.
        </Text>
      </Flex>
    </Container>
  );
};

export default Card;
