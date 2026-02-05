import { WindowBorder } from "../atoms/WindowBorder";
import { WindowTitle } from "../atoms/WindowTitle";

export const Window = ({children, title}: {children: React.ReactNode, title: string}) => {
    return (
        <WindowBorder>
            <div className="flex items-center justify-between px-3 py-2 
                            bg-gray-500/20 dark:bg-gray-800/40 
                            backdrop-blur-md
                            border-b border-gray-200/50 dark:border-gray-700/50 
                            rounded-t">
                <div className="flex items-center gap-3">
                    <div className=" select-none text-sm font-medium text-gray-700 dark:text-gray-200">
                        <WindowTitle title={title}/>
                    </div>
                </div>
            </div>
            {children}
        </WindowBorder>
    );
}