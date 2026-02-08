import { GreenHeaderTitle } from "../atoms/common/GreenHeaderTitle";
import { ProjectCardBackground } from "../atoms/ProjectItems/ProjectCardBackground";
import { ProjectDescription } from "../atoms/ProjectItems/ProjectDescription";
import { ProjectImage } from "../atoms/ProjectItems/ProjectImage";


export const ProjectCard = ({ title, description, imageSrc, imgAlt }: { title: string; description: string; imageSrc: string; imgAlt: string }) => {
    return(
        <div>
            <ProjectCardBackground>
                <GreenHeaderTitle title={title} />
                <ProjectImage src={imageSrc} alt={imgAlt} />
                <ProjectDescription description={description} />
            </ProjectCardBackground>
        </div>
    )
}