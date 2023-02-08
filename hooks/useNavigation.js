import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const useNavigation = (tags, setTags) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlTags = searchParams.get("tag");

  console.log(urlTags);

  useEffect(() => {
    if (tags.length === 0) {
      router.push(`/`);
    } else {
      router.push(`/?tag=${tags}`);
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
