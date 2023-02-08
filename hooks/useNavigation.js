import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";

const useNavigation = (tags, setTags) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const paramTag = searchParams.get("tag");

  useEffect(() => {
    router.push(`/?tag=${tags}`);

    console.log(tags);

    if (tags.length === 0) {
      router.push(`/`);
    }
  }, [tags]);

  useEffect(() => {
    if (paramTag) {
      router.push(`/?tag=${paramTag}`);
    }

    if (!paramTag) {
      setTags([]);
    }
    
  }, [pathname, searchParams]);
};

export default useNavigation;
