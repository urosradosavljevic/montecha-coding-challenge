import React from "react";
import { Grid } from "@chakra-ui/react";

export const SearchResultsGrid = ({ children }) => {
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
      }}
      gap={5}
      m={4}
    >
      {children}
    </Grid>
  );
};
