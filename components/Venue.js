import { Button, Container, Flex, Image, Text } from "./library";

const Venue = () => {
  return (
    <Container ml={{ sm: 1, md: 2, lg: 9 }} pt={4}>
      <Flex
        flexDirection={{ xm: "column-reverse", md: "row" }}
        overflow="hidden"
      >
        <Flex
          flexDirection="column"
          justifyContent={{ xs: "center", md: "flex-start" }}
          alignItems={{ xs: "center", md: "flex-start" }}
        >
          <Text
            p={{ xs: 1, ms: 0 }}
            textAlign={{ xs: "center", md: "left" }}
            opacity={0.8}
            fontWeight={7}
            as="h1"
            te
            fontSize={{ xs: "mediumLarger", sm: "extraLarger" }}
          >
            More than just shorter links
          </Text>
          <Text
            textAlign={{ xs: "center", md: "left" }}
            color="gray"
            fontWeight={5}
            px={{ xs: 3, md: 0 }}
            as="h3"
            fontSize={"bigger"}
          >
            Build your brand&#39;s recognition and get detailed insight on how
            your links are performing.
          </Text>
          <Flex>
            <Button
              isHover={true}
              display="flex"
              my={4}
              ml={0}
              fontSize={"big"}
              height={4}
              px={4}
              py={3}
              alignItems="center"
            >
              Get Started
            </Button>
          </Flex>
        </Flex>
        <Flex position={{ xs: "static", md: "relative" }}>
          <Image
            left={{ md: "5" }}
            position={{ xs: "static", md: "relative" }}
            src="/illustration-working.svg"
          />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Venue;
