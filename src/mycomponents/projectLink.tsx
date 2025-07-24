import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ProjectLink({ link }: { link: string }) {
  return (
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Button className="flex justify-between items-center gap-1 rounded-lg hover:text-violet-500 transition-colors duration-800 cursor-pointer">
          <p>View live site</p> <ArrowRight size={18} className="mt-1" />
        </Button>
      </a>
    </div>
  );
}
