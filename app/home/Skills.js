import skillIcons from "@/components/skillIcons";
import supabase from "@/utils/supabase";

async function Skills() {
  const { data: icons } = await supabase.from("icons").select().order("id");

  if (!icons) {
    notFound();
  }

  // console.log(icons);

  return (
    <>
      <div id="skills" className="relative top-36"></div>

      <div className="mx-auto mt-44">
        <h2 className="text-primary mb-12 text-center text-4xl font-bold">
          Skills
        </h2>

        <div className="mx-auto grid w-3/4 grid-cols-4 justify-items-center gap-y-8 gap-x-4 md:grid-cols-6 xl:w-2/3">
          {icons.map((skill, i) => {
            const HomeSkills = skillIcons[skill.iconCode];
            return (
              <>
                <div className="group flex flex-col items-center">
                  <HomeSkills
                    key={i}
                    className="h-12 w-12 cursor-pointer fill-neutral-400 group-hover:fill-primary"
                  />
                  <h3 className="mt-1 h-4 text-center text-sm font-bold text-primary opacity-0 group-hover:block group-hover:opacity-100 md:text-base">
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
