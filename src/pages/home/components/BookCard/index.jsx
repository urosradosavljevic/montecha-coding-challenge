import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

import { BookDetails } from "pages/home/components/BookCard/Details";
import { CardImage } from "pages/home/components/BookCard/Image";

export const BookCard = ({ book }) => {
  const {
    key,
    isbn,
    cover_edition_key,
    author_name,
    author_key,
    title,
    first_publish_year,
  } = book;

  return (
    <Flex direction={"row"} boxShadow="md" rounded="md" p={4}>
      <Link to={`${key}/${author_key}`}>
        <CardImage
          title={title}
          cover_edition_key={cover_edition_key}
          isbn={isbn}
        />
      </Link>

      <Link to={`${key}/${author_key}`}>
        <BookDetails
          author_names={author_name}
          title={title}
          first_publish_year={first_publish_year}
        />
      </Link>
    </Flex>
  );
};
