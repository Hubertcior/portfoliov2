export const InfoBackground = ({ children }: { children: React.ReactNode }) => {
    return (
         <div className="flex flex-col sm:grid  sm:gap-6 py-4 border-b border-green-900/50 bg-[#1a1a1a] hover:bg-green-900/10 hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300 px-4 rounded-sm font-mono group">
            {children}
        </div>
    );
}