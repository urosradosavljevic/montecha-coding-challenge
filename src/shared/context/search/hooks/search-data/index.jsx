import { useContext } from "react";
import { SearchResultsContext } from "shared/context/search";

export const useSearchResults = () => {
  const context = useContext(SearchResultsContext);
  if (context === undefined) {
    throw new Error(
      "useSearchResults must be used within a BookSearchProvider"
    );
  }
  return context;
};
