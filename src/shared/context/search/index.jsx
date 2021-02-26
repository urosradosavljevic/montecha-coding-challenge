import { createContext } from "react";
import { useSearchBooks } from "shared/api/hooks/useSearchBooks";

export const SearchPaginationContext = createContext();
export const SearchResultsContext = createContext();
export const SearchDispatchContext = createContext();

const BookSearchProvider = ({ children }) => {
  const {
    searchForBooks,
    perPage,
    setPerPage,
    currentPage,
    setPage,
    totalPages,
    loading,
    data,
    error,
  } = useSearchBooks();

  return (
    <SearchResultsContext.Provider value={{ loading, error, data }}>
      <SearchDispatchContext.Provider value={{ searchForBooks }}>
        <SearchPaginationContext.Provider
          value={{ currentPage, totalPages, setPage, perPage, setPerPage }}
        >
          {children}
        </SearchPaginationContext.Provider>
      </SearchDispatchContext.Provider>
    </SearchResultsContext.Provider>
  );
};

export { BookSearchProvider };
