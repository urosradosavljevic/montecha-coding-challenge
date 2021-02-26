import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const NavLink = ({ href, content }) => {
  return (
    <Link to={href}>
      <Box fontWeight="medium" fontSize="lg" color="blue" as="span">
        {content}
      </Box>
    </Link>
  );
};
