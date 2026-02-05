import { LongArrow } from "../atoms/LongArrow";
import { SystemInfo } from "../atoms/SystemInfo"

export const SystemConnector = () => {  
    return (
        <div className="flex items-center w-full">
            <SystemInfo text="React" />  
            <LongArrow />
            <SystemInfo text="Node.js" /> 
            <LongArrow />
            <SystemInfo text="PostgreSQL" />
            <LongArrow />
            <SystemInfo text="Docker" />  
            <LongArrow />
            <SystemInfo text="AWS" />
        </div>
    )
};