import { BioSection } from "../molecules/BioSection";
import { Content } from "../molecules/Content";
import { Window } from "../molecules/Window";

export const Bio = () => {
    return(
        <Window title="BIO">
            <Content>
                <div className="flex flex-row w-full gap-6">
                    <div className="flex-1">
                        <BioSection title={"ABOUT_ME"} value={"I am a software developer with a passion for creating interactive web applications."} />
                    </div>
                    <div className="flex-1">
                        <BioSection title={"EDUCATION"} value={"Currently studying Computer Science at WSIIZ University in Rzeszów"} />
                    </div>
                    <div className="flex-1">
                        <BioSection title={"EXPERIENCE"} value={"3 months of experience in web development. I participated in an internship program at Mobitouch."} />
                    </div>
                </div>
            </Content>
        </Window>
    )
}