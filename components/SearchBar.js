import { Button, Container, Flex } from "./library";
import { css } from "@emotion/react";
const boostImgD = "/bg-boost-desktop.svg";
const boostImgM = "/bg-boost-mobile.svg";
import Box from "./library/Box";
const SearchBar = () => {
  return (
    <Container position="relative" bottom={6}>
      <Box
        backgroundImage = {{xs:`url(${boostImgM})` , sm:`url(${boostImgD})`}}
        css={css`
          background-size: cover;
          background-repeat: no-repeat;
          border-radius: 5px;
        `}
        width={{ xl: "1250x" }}
        height={{ xl: "175px" }}
        bg="darkViolet"
        mx={{ sm: 1, md: 2, lg: 9 }}
        py={4}
      >
        <Flex
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            as="input"
            width={{ xs: "80vw", sm: "850px" }}
            height={5}
            borderRadius="5px"
            pl="25px"
            ml={{ xs: 0, sm: 4 }}
            mr={{ xs: 0, sm: 2 }}
            fontSize="big"
          />
          <Container>
            <Button
              isHover={true}
              width={{ xs: "80vw", sm: "200px" }}
              height={5}
              borderRadius="5px"
              mr={{ xs: 0, sm: 3 }}
              my={{ xs: 2, sm: 0 }}
              fontSize={"big"}
            >
              Shorten It!
            </Button>
          </Container>
        </Flex>
      </Box>
    </Container>
  );
};

export default SearchBar;
