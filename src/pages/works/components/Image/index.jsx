import React from "react";
import { Flex } from "@chakra-ui/react";

import fallback from "shared/assets/avatar_book.png";
import { getImageByID } from "shared/util/image";

export const SingleBookImage = ({ title, ids }) => {
  const addDefaultSrc = (e) => {
    e.preventDefault();
    e.target.src = fallback;
  };

  return (
    <Flex w="200px" h="300px" flexShrink={0}>
      {ids && ids[0] ? (
        <img
          width="100%"
          height="auto"
          style={{ objectFit: "contain" }}
          alt={`Cover for: ${title}`}
          title={`Cover for: ${title}`}
          onError={addDefaultSrc}
          src={getImageByID(ids[0])}
        />
      ) : (
        <img
          style={{ objectFit: "contain" }}
          width="100%"
          height="auto"
          title={`Cover for: ${title}`}
          alt={`Cover for: ${title}`}
          src={fallback}
        />
      )}
    </Flex>
  );
};
