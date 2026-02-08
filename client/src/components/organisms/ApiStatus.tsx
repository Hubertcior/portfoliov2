import { ApiInfo } from "../molecules/ApiInfo";
import { Content } from "../molecules/WindowItems/Content"
import { Window } from "../molecules/WindowItems/Window"

export const ApiStatus = () => {
    return (
        <Window title="API_STATUS">
            <Content>
                <ApiInfo/>
            </Content>
        </Window>
    );
}