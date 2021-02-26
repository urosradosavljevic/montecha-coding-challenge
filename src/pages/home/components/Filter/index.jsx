import React from "react";
import { Text, Stack } from "@chakra-ui/react";

import { Select } from "view/Form/controls/Select";
import { useSearchPagination } from "shared/context/search/hooks/search-pagination";

export const SearchFilter = ({ total }) => {
  const { perPage, setPerPage } = useSearchPagination();

  const onSelect = (e) => {
    setPerPage(parseInt(e.target.value));
  };

  return (
    <Stack direction="row" align="center" justify="space-between" w="100%">
      <Text as="span" mr="auto" whiteSpace="nowrap">
        Found {total} {total === 1 ? "match" : "matches"}
      </Text>

      <Text as="span" whiteSpace="nowrap">
        Books per page
      </Text>

      <Select maxW="10rem" value={perPage} onChange={onSelect}>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={40}>40</option>
        <option value={50}>50</option>
      </Select>
    </Stack>
  );
};
