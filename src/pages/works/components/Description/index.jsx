import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export const BookDescription = ({ description }) => {
  const [colapsed, setColapsed] = useState(false);
  const toggle = () => setColapsed((old) => !old);
  return (
    <Box px={1} mb={2}>
      {description ? (
        <Box>
          <Text overflow="hidden" height={colapsed ? null : "70px"}>
            {typeof description === "string" ? description : description.value}
          </Text>
          <Box
            as="span"
            fontWeight="medium"
            cursor="pointer"
            fontSize="0.9rem"
            onClick={toggle}
          >
            {colapsed ? "Show less.." : "Show more.."}
          </Box>
        </Box>
      ) : (
        <Box>This book edition doesn't have a description yet.</Box>
      )}
    </Box>
  );
};
