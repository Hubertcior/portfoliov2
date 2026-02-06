import { ApiInfo } from "../molecules/ApiInfo";
import { Content } from "../molecules/Content"
import { Window } from "../molecules/Window"

export const ApiStatus = () => {
    return (
        <Window title="API_STATUS">
            <Content>
                <ApiInfo/>
            </Content>
        </Window>
    );
}