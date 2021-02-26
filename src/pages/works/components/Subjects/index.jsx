import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";

export const Subjects = ({ children }) => {
  const [colapsed, setColapsed] = useState(false);
  const toggle = () => setColapsed((old) => !old);
  return (
    <Box>
      <Box m={1} width="100%" fontWeight="medium">
        Subjects:
      </Box>
      <Flex flexWrap="wrap" overflow="hidden" height={colapsed ? null : "40px"}>
        {children}
      </Flex>
      <Box
        as="span"
        fontWeight="medium"
        cursor="pointer"
        fontSize="0.9rem"
        pl={1}
        onClick={toggle}
      >
        {colapsed ? "Show less.." : "Show more.."}
      </Box>
    </Box>
  );
};
