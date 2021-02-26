import { ButtonGroup, Flex } from "@chakra-ui/react";

import { PaginationButton } from "pages/home/components/Pagination/SingleButton";
import { extractButtonInfo } from "pages/home/components/Pagination/util";
import { useSearchPagination } from "shared/context/search/hooks/search-pagination";

export const Pagination = () => {
  const { currentPage, totalPages, setPage } = useSearchPagination();

  const changePage = (i) => setPage(i);

  return (
    <Flex mb={4} mt={2} justifyContent="space-between" direction="row">
      <ButtonGroup>
        {extractButtonInfo(currentPage, totalPages).map(
          ({ style, content, page }, index) => (
            <PaginationButton
              key={`pagination-btn-${index}`}
              content={content}
              disabled={page === -1}
              changePage={() => changePage(page)}
              {...style}
            />
          )
        )}
      </ButtonGroup>
    </Flex>
  );
};
