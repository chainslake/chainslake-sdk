import { useEffect, useState } from "react";
import { useChainslake } from "./ChainslakeContext";
import {
  StaticQuestion
} from "@metabase/embedding-sdk-react";

type ChainslakeStatusProps = {
  id: string;
};

export const ChainslakeStatus = ({ id }: ChainslakeStatusProps) => {
  const { url } = useChainslake();

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${url}/api/v1/statuses/${id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        }

        const json = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, id]);

  // UI hiển thị
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const chart = !!data.chart_id && (
    <a href={data.chart_url} target="_blank">
      <StaticQuestion questionId={data.chart_id} />
    </a>
  );

  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: data.content }}></p>
      {chart}
    </div>
  );
};
