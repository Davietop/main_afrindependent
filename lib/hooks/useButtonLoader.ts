import { useEffect, useState } from "react";

export const useButtonLoader = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (sent || error) {
      timeout = setTimeout(() => {
        if (sent) setSent(false);
        if (error) setError(false);
      }, 5000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [sent, error]);

  return {
    sending,
    setSending,
    sent,
    setSent,
    error,
    setError,
  };
};
