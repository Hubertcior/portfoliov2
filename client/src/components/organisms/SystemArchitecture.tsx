import { Window } from "../molecules/Window"
import { Content } from "../molecules/Content"
import { SystemConnector } from "../molecules/SystemConnector";

export const SystemArchitecture = () => {
    return (
        <Window title="SYSTEM_ARCHITECTURE">
            <Content>
                <div className="flex justify-center w-full">
                    <SystemConnector/>
                </div>
            </Content>
        </Window>
    );
}   