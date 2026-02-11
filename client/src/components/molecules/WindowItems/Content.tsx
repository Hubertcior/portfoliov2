export const Content = ({children} : {children: React.ReactNode}) => {
  return (
    <div className="p-4 bg-gray-500/10 dark:bg-gray-800/20 backdrop-blur-md rounded-b">
      {children}
    </div>
  );
}