import { Container, Flex, Text } from "./library";

const Details = () => {
  return (
    <Container py={5}>
      <Flex flexDirection="column">
        <Text as="h1"
        fontSize='larger'
        >
            Advance Statistics</Text>
        <Text as="p" fontSize='bigger' textAlign='center' width={{xm:8,sm:7}} my={2} color='gray' fontWeight={4}>
          Track how your links are performing across the web with our advance
          statistics dashboard.
        </Text>
      </Flex>
    </Container>
  );
};

export default Details;
