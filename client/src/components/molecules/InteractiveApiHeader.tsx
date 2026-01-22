import { ExecuteButton } from "../atoms/ExecuteButton"
import { RequestSelect } from "../atoms/RequestSelect"

export const InteractiveApiHeader = () => {
    return (
        <div className="p-4 border-b flex flex-row space-x-3 border-gray-300 font-bold text-lg">
            <RequestSelect />
            <ExecuteButton onClick={() => {}} label="EXECUTE REQUEST" />
        </div>
    )
}   
    