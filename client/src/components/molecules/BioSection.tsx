import { BioInfo } from "../atoms/BioInfo";
import { WindowTitle } from "../atoms/WindowTitle";

export const BioSection = ({ title, value }: { title: string; value: string }) => {
    return (
        <div>
            <WindowTitle title={title} />
            <BioInfo value={value} />
        </div>
    )
}