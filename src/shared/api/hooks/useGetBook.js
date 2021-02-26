import { useEffect, useState } from "react";

import bookApi from "shared/api";
import { getBookUrl } from "shared/util/single-book";
import { useCustomToast } from "shared/util/useCustomToast";

export const useGetBook = (key) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState([]);

  const { toastError } = useCustomToast();

  useEffect(() => {
    const search = async () => {
      setLoading(true);
      try {
        const { status, data } = await bookApi.get(getBookUrl(key));

        if (status === 200) {
          setData(data);
        }
      } catch (error) {
        console.error(error.message);
        toastError("Error occured", error.message);
        setError(error.message);
      }
      setLoading(false);
    };

    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return {
    loading,
    data,
    error,
  };
};
