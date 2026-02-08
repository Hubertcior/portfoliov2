export const SystemInfo = ({text} : {text: string}) =>{
    return(
        <div className="p-4 bg-[#0b1220] text-green-300 font-mono rounded-lg shadow-inner border-2 border-slate-400">
            <h2 className="text-xl font-semibold text-green-200">{text}</h2>
        </div>
    );
};