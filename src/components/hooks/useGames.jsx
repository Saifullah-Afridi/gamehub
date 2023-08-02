import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

const useGames = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, SetIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    SetIsLoading(true);
    apiClient
      .get("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        SetIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        SetIsLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { games, error, isLoading };
};

export default useGames;
