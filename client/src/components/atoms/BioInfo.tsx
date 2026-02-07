export const BioInfo = ({ value }: { value: string }) => {
  return (
    <div className="
      font-mono                 
      text-sm                 
      text-gray-300             
      leading-relaxed           
      tracking-wide             
      whitespace-pre-line       
      border-l-2               
      border-green-500/50      
      pl-3                      
      mb-4                      
      selection:bg-green-500/30 selection:text-green-200
    ">
      <span className="text-green-500 font-bold mr-2 opacity-70">{`>>`}</span>
      {value}
    </div>
  );
}