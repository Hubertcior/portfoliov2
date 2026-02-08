import { Window } from "../molecules/WindowItems/Window"
import { Content } from "../molecules/WindowItems/Content"
import proj1 from "../../assets/proj1.png"
import { ProjectCard } from "../molecules/ProjectCard";


export const ProjectSection = () => {
    return (
        <Window title="PROJECTS">
            <Content>
                <div className="flex flex-row gap-4">
                    <ProjectCard title="PORTFOLIO WEBSITE" description="A personal portfolio website built with React, showcasing projects and skills with a modern design." imageSrc={proj1} imgAlt="Portfolio Website" />
                 <ProjectCard title="PORTFOLIO WEBSITE" description="A personal portfolio website built with React, showcasing projects and skills with a modern design." imageSrc={proj1} imgAlt="Portfolio Website" />
                  <ProjectCard title="PORTFOLIO WEBSITE" description="A personal portfolio website built with React, showcasing projects and skills with a modern design." imageSrc={proj1} imgAlt="Portfolio Website" />
                </div>
            </Content>
        </Window>
    );
}   