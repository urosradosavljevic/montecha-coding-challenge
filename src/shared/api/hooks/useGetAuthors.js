import { useEffect, useState } from "react";

import bookApi from "shared/api";
import { getAuthorUrl } from "shared/util/single-book";
import { useCustomToast } from "shared/util/useCustomToast";

export const useGetAuthors = (keys) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState([]);

  const { toastError } = useCustomToast();

  useEffect(() => {
    const search = async (key) => {
      setLoading(true);
      try {
        const { status, data } = await bookApi.get(getAuthorUrl(key));

        if (status === 200) {
          setData((old) => [...old, data]);
        }
      } catch (error) {
        console.error(error.message);
        toastError("Error occured", error.message);
        setError(error.message);
      }
      setLoading(false);
    };

    setData([]);
    const authorKeys = keys.split(",");
    authorKeys.forEach((author) => search(author));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keys]);

  return {
    loading,
    data,
    error,
  };
};
