import type { TechItem } from "../../../types/TechItems";
import { GreenHeaderTitle } from "../../atoms/common/GreenHeaderTitle";
import { ProjectCardBackground } from "../../atoms/ProjectItems/ProjectCardBackground";
import { ProjectDescription } from "../../atoms/ProjectItems/ProjectDescription";
import { ProjectImage } from "../../atoms/ProjectItems/ProjectImage";
import { TechStack } from "./TechStack";


export const ProjectCard = ({ title, description, imageSrc, imgAlt, techs }: { title: string; description: string; imageSrc: string; imgAlt: string; techs: TechItem[] }) => {
    return(
        <div>
            <ProjectCardBackground>
                <GreenHeaderTitle title={title} />
                <ProjectImage src={imageSrc} alt={imgAlt} />
                <ProjectDescription description={description} />
                <TechStack techs={techs} />
            </ProjectCardBackground>
        </div>
    )
}