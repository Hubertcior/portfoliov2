import { RequestDisplay } from "../atoms/ApiConsoleItems/RequestDisplay";
import { InteractiveApiHeader } from "../molecules/InteractiveApiHeader";
import { Window } from "../molecules/WindowItems/Window";
import { Content } from "../molecules/WindowItems/Content";
import { useApiRequest } from "../../hooks/useApiRequest";

export const InteractiveApiConsole = () => {
  const { execute, data, error } = useApiRequest();

  return (
    <Window title="INTERACTIVE_API_CONSOLE">
        <Content>
            <InteractiveApiHeader onExecute={execute} />
            <RequestDisplay data={data} error={error} />
        </Content>
    </Window>
  );
}