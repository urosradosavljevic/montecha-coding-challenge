import { useEffect, useState } from "react";

import bookApi from "shared/api";
import { SEARCH_PATH } from "shared/constants/paths";
import { useCustomToast } from "shared/util/useCustomToast";

export const useSearchBooks = () => {
  const [searchParameter, searchForBooks] = useState("");
  const [perPage, setPerPage] = useState(20);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [searchResults, setSearchResults] = useState([]);

  const { toastError } = useCustomToast();

  useEffect(() => {
    const search = async () => {
      setLoading(true);

      if (searchParameter.length <= 2) {
        setError("Search parameter has to have more than 2 letters");
        toastError(
          "Try again",
          "Search parameter has to have more than 2 letters"
        );
        setLoading(false);
        return;
      } else {
        try {
          const { status, data } = await bookApi.get(SEARCH_PATH, {
            params: {
              q: searchParameter,
              page: currentPage,
              limit: perPage,
            },
          });

          if (status === 200) {
            setSearchResults(data);
            setTotalPages(Math.ceil(data.numFound / perPage));
          }
        } catch (error) {
          toastError("Error occured", error.message);
          setError(error.message);
          console.error(error);
        }
      }
      setLoading(false);
    };

    if (searchParameter !== "") search();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParameter, currentPage, perPage]);

  return {
    searchForBooks,
    currentPage,
    setPage,
    loading,
    data: searchResults,
    totalPages,
    perPage,
    setPerPage,
    error,
  };
};
