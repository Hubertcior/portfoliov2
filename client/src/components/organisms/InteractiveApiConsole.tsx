import { Content } from "../molecules/Content"
import { InteractiveApiHeader } from "../molecules/InteractiveApiHeader";
import { Window } from "../molecules/Window"

export const InteractiveApiConsole = () => {
  return (
    <Window title="INTERACTIVE_API_CONSOLE">
        <Content>
            <InteractiveApiHeader/>
        </Content>
    </Window>
  );
}
