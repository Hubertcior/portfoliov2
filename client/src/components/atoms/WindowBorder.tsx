export const WindowBorder = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-2 border-gray-700/50 rounded-lg shadow-lg">  
        {children}
    </div>
    );  
}