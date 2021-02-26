import React, { useState } from "react";
import { FormControl, Input } from "@chakra-ui/react";

import { useSearchBook } from "shared/context/search/hooks/search-book";
import { useHistory } from "react-router-dom";

export const SearchInputForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();
  const { searchForBooks } = useSearchBook();

  const search = (e) => {
    e.preventDefault();
    history.push("/");
    searchForBooks(searchTerm);
  };

  const onSearchValueChanged = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };
  return (
    <form onSubmit={search}>
      <FormControl mx="auto" w="100%" maxW="30rem" mb={1}>
        <Input
          value={searchTerm}
          onChange={onSearchValueChanged}
          placeholder="Search for book.."
          id={"search"}
        />
      </FormControl>
    </form>
  );
};
