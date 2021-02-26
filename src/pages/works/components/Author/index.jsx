import { Box, Button, Spinner, Stack, useDisclosure } from "@chakra-ui/react";
import { AuthorDrawer } from "pages/works/components/Author/AuthorDrawer";
import React, { useEffect, useState } from "react";
import { useGetAuthors } from "shared/api/hooks/useGetAuthors";
import { useCustomToast } from "shared/util/useCustomToast";

export const Author = ({ olid }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [author, setAuthor] = useState(null);
  const { loading, data } = useGetAuthors(olid);
  const { toastInfo } = useCustomToast();

  const onClick = (author) => {
    if (author.bio) {
      setAuthor(author);
      onOpen();
    } else toastInfo("Info", "There is no more info for this author.");
  };

  useEffect(() => {
    if (data.length > 0) setAuthor(data[0]);
  }, [data]);

  if (loading) return <Spinner size="lg" />;

  if (author && data && data.length > 0) {
    return (
      <>
        <Stack spacing={2} direction="row" align="center" flexWrap="wrap">
          <Box as="span">by:</Box>
          {data.map((author, i) => (
            <Button
              key={`author-${i}`}
              onClick={() => onClick(author)}
              w="max-content"
            >
              {author.name}
            </Button>
          ))}
          <AuthorDrawer isOpen={isOpen} onClose={onClose} author={author} />
        </Stack>
      </>
    );
  }

  return null;
};
