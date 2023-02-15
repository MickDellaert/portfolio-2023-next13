import * as ReactIcons from "react-icons/si";
import supabase from "@/utils/supabase";

async function Skills() {
  const { data: icons } = await supabase.from("icons").select().order("id");

  if (!icons) {
    notFound();
  }

  return (
    <>
      <div className="mx-auto mt-44">
        <h2 className="mb-6 text-center text-4xl font-black">Skills</h2>

        <div className="w-50 h-50 flex flex-wrap justify-center gap-4 lg:w-3/4 m-auto">
          {icons.map((skill, i) => {
            const HomeSkills = ReactIcons[skill.iconCode];
            return (
              <>
                <HomeSkills
                  key={i}
                  className="h-12 w-12 cursor-pointer fill-gray-400 hover:fill-primary"
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Skills;
