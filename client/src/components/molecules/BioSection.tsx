import { WindowTitle } from "../atoms/WindowTitle";

export const BioSection = ({ title }: { title: string }) => {

    return (
        <div>
            <WindowTitle title={title} />
        </div>
    )
}