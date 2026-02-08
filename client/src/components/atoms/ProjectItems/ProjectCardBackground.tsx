export const ProjectCardBackground = ({ children }: { children: React.ReactNode }) => {
    return (
         <div className="flex flex-col rounded-2xl sm:grid  sm:gap-6 py-4 border-b border-green-900/50 bg-[#1a1a1a] hover:bg-green-900/10 duration-300 px-4  font-mono group">
            {children}
        </div>
    );
}