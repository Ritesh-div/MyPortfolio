import { ArrowRight } from "lucide-react";

export default function ProjextImage({projectImg, projectLink}: { projectImg: string , projectLink?: string }) {
  return (
        <div className="w-[45%] bg-gray-800 p-5 rounded-lg">
          <img
            src={projectImg}
            alt="Project Image"
            className="w-full h-auto mb-4"
          />
          <a
            href={projectLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-red-300 transition-colors duration-300"
          >
            <p className="">VIEW PROJECT</p> <ArrowRight />
          </a>
        </div>
  )
}
