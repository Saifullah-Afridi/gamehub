import { CanceledError } from "axios";
import apiClient from "../services/apiClient";
import { useEffect, useState } from "react";

const usePlatform = () => {
  const [platform, setPlatform] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, SetIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    SetIsLoading(true);
    apiClient
      .get("/platforms/lists/parents", { signal: controller.signal })
      .then((res) => {
        setPlatform(res.data.results);
        SetIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        SetIsLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { platform, error, isLoading };
};
export default usePlatform;
