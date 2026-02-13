import { Window } from "../molecules/WindowItems/Window"
import { Content } from "../molecules/WindowItems/Content"
import { ProjectCard } from "../molecules/ProjectCards/ProjectCard";
import { PROJECTS } from "../../data/projects";

export const ProjectSection = () => {
    return (
        <Window title="PROJECTS">
            <Content>
                <div className="flex flex-col md:flex-row gap-4">
                   {PROJECTS.map((project) => (
                       <ProjectCard
                           key={project.id}
                           link={project.link}
                           title={project.title}
                           description={project.description}
                           imageSrc={project.imageSrc}
                           imgAlt={project.imgAlt}
                           techs={project.techs}
                       />
                   ))}
                </div>
            </Content>
        </Window>
    );
}   