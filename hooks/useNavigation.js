import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";

const useNavigation = (tags, setTags) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlTags = searchParams.get("tag");

  console.log(urlTags);

  useEffect(() => {
    router.push(`/?tag=${tags}`, undefined, { shallow: true });

    if (tags.length === 0) {
      router.push(`/`, undefined, { shallow: true });
    }
  }, [tags]);

  useEffect(() => {
    if (!urlTags) {
      setTags([]);
    } else {
      setTags(urlTags.split(","));
    }
  }, [urlTags]);
};

export default useNavigation;
