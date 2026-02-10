import type { TechItem } from "../../../types/TechItems";
import { GreenHeaderTitle } from "../../atoms/common/GreenHeaderTitle";
import { ProjectCardBackground } from "../../atoms/ProjectItems/ProjectCardBackground";
import { ProjectDescription } from "../../atoms/ProjectItems/ProjectDescription";
import { ProjectImage } from "../../atoms/ProjectItems/ProjectImage";
import { TechStack } from "./TechStack";


export const ProjectCard = ({ title, description, imageSrc, imgAlt, techs, link }: { title: string; description: string; imageSrc: string; imgAlt: string; techs: TechItem[]; link: string }) => {
    return(
        <a href={link} target="_blank" rel="noopener noreferrer" >
            <ProjectCardBackground>
                <GreenHeaderTitle title={title} />
                <ProjectImage src={imageSrc} alt={imgAlt} />
                <ProjectDescription description={description} />
                <TechStack techs={techs} />
            </ProjectCardBackground>
        </a>
    )
}