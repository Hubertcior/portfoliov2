import { Window } from "../molecules/WindowItems/Window"
import { Content } from "../molecules/WindowItems/Content"
import { TECH_STACK } from "../../data/projects";
import { TechBadge } from "../atoms/common/TechBadge";
import { GreenHeaderTitle } from "../atoms/common/GreenHeaderTitle";


export const TechStack = () => {
    return (
        <Window title="TECH_STACK">
            <Content>
                <div className="flex flex-col mb-4 gap-4">
                    <GreenHeaderTitle title="Turning ideas into code using:" />
                    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 items-center justify-items-center">
                    {TECH_STACK.map((tech, index) => (
                        <TechBadge key={index} Icon={tech.icon} color={tech.color} />
                    ))}
                    </div>
                </div>
            </Content>
        </Window>
    );
}   