import type { TechItem } from "../../../types/TechItems";
import { TechBadge } from "../../atoms/common/TechBadge";
import { TechBackground } from "../../atoms/ProjectItems/TechBackgroudn";

export const TechStack = ({ techs }: { techs: TechItem[] }) => {
    return (
        <TechBackground>
            {techs.map((item, index) => (
                <TechBadge 
                    key={index} 
                    Icon={item.icon} 
                    color={item.color} 
                />
            ))}
        </TechBackground>
    );
}