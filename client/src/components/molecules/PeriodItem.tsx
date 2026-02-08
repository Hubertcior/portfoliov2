import { InfoBackground } from "../atoms/InfoBackground";

export const PeriodItem = ({ start, end, title, value }: { start: string; end: string; title: string; value: string }) => {
    return (
       <InfoBackground>
        <div className="">
            <span>[{start}]</span>
            -
            <span>[{end}]</span>
        </div>
        <div>
                <h4 className="text-base font-bold text-green-500 tracking-widest uppercase shadow-green-500 drop-shadow-[0_0_2px_rgba(34,197,94,0.5)]">
                    {title}
                </h4>
                <p className="text-sm text-green-600/80 mt-1 leading-relaxed border-l-2 border-green-900 pl-3 group-hover:text-green-400/90 group-hover:border-green-500 transition-all">
                    {value}
                </p>
            </div>
        </InfoBackground>
    );
}