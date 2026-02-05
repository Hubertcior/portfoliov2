export const SystemInfo = ({text} : {text: string}) =>{
    return(
        <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{text}</h2>
        </div>
    );
};