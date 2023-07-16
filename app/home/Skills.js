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

      <div className="mx-auto mt-40">
        <h2 className="mb-12 text-center text-4xl">Skills</h2>

        {/* <div className="mx-auto grid w-3/4 grid-cols-4 justify-items-center gap-y-8 gap-x-4 md:grid-cols-6 xl:w-2/3"> */}
        <div className="mx-auto flex w-[90%] flex-wrap justify-center xl:w-3/4 2xl:w-4/6">
          {icons.map((skill, i) => {
            const HomeSkills = skillIcons[skill.iconCode];
            return (
              <>
                <div className="group flex basis-1/4 flex-col py-1 md:basis-1/6">
                  <HomeSkills
                    key={i}
                    className="m-auto h-10 w-10 cursor-pointer fill-neutral-400 group-hover:fill-primary md:h-12 md:w-12"
                  />
                  <h4 className="mb-6 mt-1 h-4 text-center text-sm font-semibold text-primary opacity-0 group-hover:block group-hover:opacity-100 md:text-base">
                    {skill.iconName}
                  </h4>
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
