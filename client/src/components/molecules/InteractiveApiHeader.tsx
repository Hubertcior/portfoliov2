import { useState } from "react"
import type { ApiEndpoint } from "../../types/ApiEnpoint";
import { ExecuteButton } from "../atoms/ApiConsoleItems/ExecuteButton"
import { RequestSelect } from "../atoms/ApiConsoleItems/RequestSelect"

export interface InteractiveApiHeaderProps {
    onExecute: (url: string, method: string) => void;
}

export const InteractiveApiHeader = ({ onExecute }: InteractiveApiHeaderProps) => {
    const [selectedEndpoint, setSelectedEndpoint] = useState<ApiEndpoint | null>(null);

    return (
        <div className="p-4 border-b flex md:flex-row space-y-3 flex-col space-x-3 border-gray-300 font-bold text-lg">
            <RequestSelect onSelect={(endpoint) => setSelectedEndpoint(endpoint)} />
            <ExecuteButton onClick={() => {
                if (selectedEndpoint) {
                    onExecute(selectedEndpoint.url, selectedEndpoint.method);
                }
            }} label="EXECUTE REQUEST" />
        </div>
    )
}