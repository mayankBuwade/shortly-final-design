import Box from "./Box";
import { css } from "@emotion/react";
import { theme } from "../../lib/theme";

const Container = (props) => {
  return (
    <Box
      css={css`
        max-width: 1440px;
        margin: 0 auto;
      `}
      {...props}
    >
      {props.children}
    </Box>
  );
};

const Flex = (props) => {
  return (
    <Box
      flexDirection={props.flexDirection || "row"}
      css={css`
        display: flex;
        margin: 0;
      `}
      {...props}
    >
      {props.children}
    </Box>
  );
};

const Text = (props) => {
  return (
    <Box as={props.as || "p"} {...props}>
      {props.children}
    </Box>
  );
};

const Link = (props) => {
  return (
    <Box
      as="a"
      marginLeft={3}
      href=""
      fontWeight="700"
      css={css`
        &:hover {
          color: gray;
        }
      `}
      {...props}
    >
      {props.children}
    </Box>
  );
};

const Button = (props) => {
  return (
    <Box
      as="button"
      borderRadius="120px"
      minWidth='100px'
      backgroundColor = {theme.colors.cyan}
      css={ css`
        color: ${theme.colors.white};
        border: none;
        font-weight: 700;
        &:hover {
          background-color: ${props.isHover && theme.colors.lightCyan};
        }
      `}
      {...props}
    >
      {props.children}
    </Box>
  );
};

const Image = (props) => {
  return (
    <Box as="img" {...props}>
      {props.children}
    </Box>
  );
};

const FooterLink = (props) => {
  return (
    <Link
      mx={0}
      my={1}
      fontWeight={5}
      color="gray"
      css= {css`
        &:hover {
          color: ${theme.colors.cyan};
        }
      `}
      {...props}
    >
      {props.children}
    </Link>
  );
};

export { Container, Flex, Text, Link, Button, Image, FooterLink };
