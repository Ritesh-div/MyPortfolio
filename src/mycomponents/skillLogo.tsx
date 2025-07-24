import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function SkillLogo({skillName, skillLogo}: {skillName: string, skillLogo: string}) {
  return (
    <div>
      <Tooltip>
        <TooltipTrigger>
          {" "}
          <img src={skillLogo} alt="" className="h-5 mt-2" />
        </TooltipTrigger>
        <TooltipContent>
          <p>{skillName}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
