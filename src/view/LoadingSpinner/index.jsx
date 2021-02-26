import React from "react";
import { Text, Spinner, Flex } from "@chakra-ui/react";

export const LoadingSpinner = () => {
  return (
    <Flex direction="column" align="center">
      <Spinner mb={4} fontSize="2rem" size="xl" />
      <Text>Please wait..</Text>
    </Flex>
  );
};
