import { DownloadButton } from "../atoms/ResumeItems/DownloadButton";
import { Content } from "../molecules/WindowItems/Content";
import { Window } from "../molecules/WindowItems/Window";
import resume from "../../assets/Hubert_Radziwinski_CV.pdf"

export const Resume = () => {
    return (
        <Window title="RESUME_DOWNLOAD">
            <Content>
                <div className="flex flex-col items-center gap-4 w-full px-2 py-2">
                    <div className="w-full max-w-full flex justify-center overflow-hidden">
                        <DownloadButton fileUrl={resume} />
                    </div>
                    <p className="text-center text-green-500 text-sm md:text-base px-2 wrap-break-word w-full">
                        Click the button to get the full resume in PDF format.
                    </p>
                </div>
            </Content>
        </Window>
    );
}
