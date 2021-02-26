import { useContext } from "react";
import { SearchDispatchContext } from "shared/context/search";

export const useSearchBook = () => {
  const context = useContext(SearchDispatchContext);
  if (context === undefined) {
    throw new Error("useSearchBook must be used within a BookSearchProvider");
  }
  return context;
};
