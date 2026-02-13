import { useState } from "react";
import type { TechItem } from "../../../types/TechItems";
import { GreenHeaderTitle } from "../../atoms/ProfileItems/common/GreenHeaderTitle";
import { ProjectCardBackground } from "../../atoms/ProjectItems/ProjectCardBackground";
import { ProjectDescription } from "../../atoms/ProjectItems/ProjectDescription";      
import { ProjectVideo } from "../../atoms/ProjectItems/ProjectVideo";
import { TechStack } from "./TechStack";


export const ProjectCard = ({ title, description, videoSrc, techs, link }: { title: string; description: string; videoSrc: string; techs: TechItem[]; link: string }) => {    
    const [isHovered, setIsHovered] = useState(false);
    
    return(
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <ProjectCardBackground>
                <GreenHeaderTitle title={title} />
                <ProjectVideo src={videoSrc} isPlaying={isHovered} />
                <ProjectDescription description={description} />
                <TechStack techs={techs} />
            </ProjectCardBackground>
        </a>
    )
}