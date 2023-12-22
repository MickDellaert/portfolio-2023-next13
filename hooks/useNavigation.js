import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const useNavigation = (filters, setFilters) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  let urlFilters = searchParams.get("filter");

  useEffect(() => {
    if (filters.length > 0) {
      router.push(`/?filter=${filters}`);
    }

    if (filters.length === 0) {
      router.push(`/`);
    }
  }, [filters]);

  useEffect(() => {
    if (!urlFilters) {
      setFilters([]);
    } else {
      setFilters(urlFilters.split(","));
    }
  }, [urlFilters]);
};

export default useNavigation;
