
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";



const useNavigation = (filters, setFilters) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  let urlFilters = searchParams.get("filter");

  // console.log(urlTags);
  // console.log(tags);

  useEffect(() => {
    if (filters.length > 0) {
    router.push(`/?filter=${filters}`);
    // router.push(`/?tag=${tags}`, undefined, { shallow: true });
    // setTags(urlTags.split(","))
    }

    if (filters.length === 0) {
      router.push(`/`);
      // router.push(`/`, undefined, { shallow: true });
    }
  }, [filters]);

  useEffect(() => {
    // if (urlTags) {
    //   setTags(urlTags.split(","));
    // }

    if (!urlFilters) {
      setFilters([]);
    } else  {
      setFilters(urlFilters.split(","));
    }
  }, [urlFilters]);
};

export default useNavigation;
