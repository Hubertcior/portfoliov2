import { InfoBackground } from "../../atoms/BioItems/InfoBackground";
import { GreenHeaderTitle } from "../../atoms/ProfileItems/common/GreenHeaderTitle";

export const PeriodItem = ({ start, end, title, value }: { start: string; end: string; title: string; value: string }) => {
    return (
       <InfoBackground>
        <div className="">
            <span>[{start}]</span>
            -
            <span>[{end}]</span>
        </div>
        <div>
                <GreenHeaderTitle title={title} />
                <p className="text-sm text-green-600/80 mt-1 leading-relaxed border-l-2 border-green-900 pl-3 group-hover:text-green-400/90 group-hover:border-green-500 transition-all">
                    {value}
                </p>
            </div>
        </InfoBackground>
    );
}