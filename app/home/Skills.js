import supabase from "@/utils/supabase";
import { SkillsAnimated } from "./SkillsAnimated";

async function Skills() {
  const { data: icons } = await supabase.from("icons").select().order("id");

  if (!icons) {
    notFound();
  }

  return <SkillsAnimated icons={icons} />;
}

export default Skills;
