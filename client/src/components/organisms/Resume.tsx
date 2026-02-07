import { DownloadButton } from "../atoms/DownloadButton";
import { Content } from "../molecules/Content";
import { Window } from "../molecules/Window";

export const Resume = () => {
    return (
    <Window title="RESUME_DOWNLOAD">
            <Content>
                <div className="flex flex-col items-center gap-4">
                    <DownloadButton fileUrl="/files/HRADZIMSKI_RESUME.pdf" />
                    <p className="text-center text-green-500">Click the button to get the full resume in PDF format.</p>
                </div>
            </Content>
        </Window>
    );
}           