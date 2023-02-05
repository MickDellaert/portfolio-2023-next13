import useSWR from "swr";
import Loading from "@/app/loading";
import * as ReactIcons from "react-icons/si";

// const fetcher = (url) => fetch(url).then((res) => res.json());

function Skills({data}) {
  // const { data, error } = useSWR("/api/staticdata", fetcher);

  // if (error) return <div>Failed to load</div>;
  // if (!data) return <Loading />;

  return (
    <>
      <div className="mx-auto mt-32">
        <h2 className="mb-6 text-center text-4xl font-black">Skills</h2>

        <div className="w-50 h-50 flex flex-wrap justify-center gap-2">
          {data.skills.map((skill, i) => {
            const HomeSkills = ReactIcons[skill.icon];
            return (
              <HomeSkills
                key={i}
                className="h-12 w-12 cursor-pointer fill-gray-400 hover:fill-primary"
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Skills;
