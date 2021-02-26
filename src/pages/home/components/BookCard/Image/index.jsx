import React from "react";
import { Flex } from "@chakra-ui/react";

import fallback from "shared/assets/avatar_book.png";
import { getImageByIsbn, getImageByCoverKey } from "shared/util/image";

const CardImage = ({ title, cover_edition_key, isbn }) => {
  const addDefaultSrc = (e) => {
    e.preventDefault();
    e.target.src = fallback;
  };

  return (
    <Flex align="center" w="90px" h="150px">
      {cover_edition_key ? (
        <img
          width="100%"
          height="auto"
          alt={`Cover for: ${title}`}
          title={`Cover for: ${title}`}
          onError={addDefaultSrc}
          src={getImageByCoverKey(cover_edition_key)}
        />
      ) : isbn && isbn.length > 0 ? (
        <img
          width="100%"
          height="auto"
          alt={`Cover for: ${title}`}
          title={`Cover for: ${title}`}
          onError={addDefaultSrc}
          src={getImageByIsbn(isbn[0])}
        />
      ) : (
        <img
          width="100%"
          height="auto"
          alt={`Cover for: ${title}`}
          src={fallback}
        />
      )}
    </Flex>
  );
};

export { CardImage };
