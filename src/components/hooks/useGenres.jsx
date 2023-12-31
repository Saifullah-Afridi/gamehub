import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";

const useGenres = (requestConfig, depend) => {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, SetIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    SetIsLoading(true);
    apiClient
      .get("/genres", { signal: controller.signal, ...requestConfig })
      .then((res) => {
        setGenres(res.data.results);
        SetIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        SetIsLoading(false);
      });

    return () => controller.abort();
  }, [depend]);
  return { genres, error, isLoading };
};

export default useGenres;
