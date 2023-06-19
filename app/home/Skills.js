import * as ReactIcons from "react-icons/si";
import supabase from "@/utils/supabase";

async function Skills() {
  const { data: icons } = await supabase.from("icons").select().order("id");

  if (!icons) {
    notFound();
  }

  console.log(icons);

  return (
    <>
      <div className="mx-auto mt-44">
        <h2 className="mb-12 text-center text-4xl font-black">Skills</h2>

        {/* <div className="w-50 h-50 flex flex-wrap justify-center gap-4 lg:w-3/4 m-auto">
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
        </div> */}

        <div className="mx-auto grid w-3/4 grid-cols-4 justify-items-center gap-y-8 gap-x-4 md:grid-cols-6">
          {icons.map((skill, i) => {
            const HomeSkills = ReactIcons[skill.iconCode];
            return (
              <>
                <div className="group flex flex-col items-center">
                  <HomeSkills
                    key={i}
                    className="h-12 w-12 cursor-pointer fill-gray-400 group-hover:fill-primary"
                  />
                  <h3 className="h-4 mt-1 opacity-0 group-hover:block text-sm md:text-base text-center text-primary group-hover:opacity-100">
                    {skill.iconName}
                  </h3>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Skills;
