import React from "react";

import { Box, Flex } from "@chakra-ui/react";

export const BookDetails = ({ author_names, title, first_publish_year }) => (
  <Flex flexDirection="column" ml={4} mt={2}>
    <Box fontWeight="medium" mb={1}>
      {title}
    </Box>

    {author_names && (
      <Box mb={1} overflow="hidden">
        {`by ${author_names.join(", ")}`}
      </Box>
    )}

    {first_publish_year && (
      <Box as="span" justifySelf="flex-end" mb={1} fontSize="0.8rem">
        {`First published in ${first_publish_year}`}
      </Box>
    )}
  </Flex>
);
