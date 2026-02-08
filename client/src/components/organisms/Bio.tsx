import { AboutMe } from "../atoms/AboutMe";
import { BioDecoration } from "../atoms/BioDecoration";
import { BioSection } from "../molecules/BioSection";
import { Content } from "../molecules/Content";
import { PeriodItem } from "../molecules/PeriodItem";
import { Window } from "../molecules/Window";

export const Bio = () => {
    return(
        <Window title="BIO">
            <Content>
                <div className="flex flex-row w-full gap-6">
                    <div className="flex-1">
                        <BioSection title={"ABOUT_ME"} />
                        <BioDecoration>
                            <AboutMe />
                        </BioDecoration>
                    </div>
                    <div className="flex-1">
                        <BioSection title={"EDUCATION"} />
                        <BioDecoration>
                            <PeriodItem start="2019" end="2024" title="IT Technician" value="ZDZ Rzeszów" />
                            <PeriodItem start="2024" end="current" title="Bachelor's Degree" value="WSIiZ" />
                        </BioDecoration>
                    </div>
                    <div className="flex-1">
                        <BioSection title={"EXPERIENCE"} />
                        <BioDecoration>
                            <PeriodItem start="jul 2025" end="sep 2025" title="Fullstack Developer" value="Mobitouch" />
                        </BioDecoration>
                    </div>
                </div>
            </Content>
        </Window>
    )
}