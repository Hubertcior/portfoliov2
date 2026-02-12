export const MatrixButton = ({ onClick, label }: { onClick: () => void; label: string }) => {
    return (          
<button
    onClick={onClick}
    className="
        px-4 py-2 
        font-mono font-bold 
        rounded 
        border-2 border-green-500  
        bg-green-500            
        text-gray-900             
        hover:bg-transparent           
        hover:text-green-500           
        transition-all duration-300    
        cursor-pointer
    "
>
    [ {label} ]
</button>
    );
}