export const BioDecoration = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`
      font-mono                 
      text-sm                 
      text-gray-300             
      leading-relaxed           
      tracking-wide             
      whitespace-pre-line       
      border-l-2                  
      pl-3                      
      mb-4                      
      selection:bg-green-500/30 selection:text-green-200
      gap-4
    `}>
      <div className="flex flex-col gap-4">
        {children}
        </div>
    </div>
  );
}