import { Flex, Grid, Heading } from "@chakra-ui/react";

const Header = ({ navLinks, children, ...props }) => {
  return (
    <Grid
      alignItems="center"
      templateColumns="auto 1fr auto"
      pos="static"
      py={3}
      px={4}
      boxShadow="md"
      {...props}
    >
      <Heading fontSize="xx-large" as="h1">
        Book
      </Heading>
      {children}
      <Flex direction="row">{navLinks}</Flex>
    </Grid>
  );
};

export default Header;
