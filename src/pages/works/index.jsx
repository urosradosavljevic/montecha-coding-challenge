import { Box, Divider, Heading, Stack } from "@chakra-ui/react";

import { useGetBook } from "shared/api/hooks/useGetBook";
import { LoadingSpinner } from "view/LoadingSpinner";
import { SingleBookImage } from "pages/works/components/Image";
import { Subjects } from "pages/works/components/Subjects";
import { BookDescription } from "pages/works/components/Description";
import { Author } from "pages/works/components/Author";
import { Info } from "view/layout/Info";

const BookPage = ({ match }) => {
  const { loading, data } = useGetBook(match.params.key);

  if (loading) return <LoadingSpinner />;

  if (data && data.key) {
    const { title, first_publish_date, covers, description, subjects } = data;

    return (
      <Stack direction="column" width="100%">
        <Stack direction="row">
          <SingleBookImage title={title} ids={covers} />

          <Stack px={4} direction="column">
            <Heading as="h1" fontWeight="medium" pb="0.3rem">
              {title}
            </Heading>

            <Author olid={match.params.author} />

            {first_publish_date && (
              <Box px={1} pb={1}>
                {`This edition was published on ${first_publish_date}`}
              </Box>
            )}

            <Divider />

            <BookDescription description={description} />

            {subjects?.length > 0 && (
              <Subjects>
                {subjects.map((sub, i) => (
                  <Box
                    key={`subject-${i}`}
                    as="span"
                    fontSize="sm"
                    backgroundColor="gray.100"
                    rounded="full"
                    p={1}
                    px={2}
                    mr={1}
                    my={1}
                    whiteSpace="nowrap"
                  >
                    {sub}
                  </Box>
                ))}
              </Subjects>
            )}
            <Divider />
          </Stack>
        </Stack>
      </Stack>
    );
  }

  return <Info title="Error" message="Book with that key doesn't exist." />;
};

export default BookPage;
