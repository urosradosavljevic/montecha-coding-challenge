import { useContext } from "react";
import { SearchPaginationContext } from "shared/context/search";

export const useSearchPagination = () => {
  const context = useContext(SearchPaginationContext);
  if (context === undefined) {
    throw new Error(
      "useSearchPagination must be used within a BookSearchProvider"
    );
  }
  return context;
};
