import { UserImage } from "../atoms/ProfileItems/UserImage";
import { Content } from "../molecules/WindowItems/Content"
import { UserInfo } from "../molecules/UserInfo";
import { Window } from "../molecules/WindowItems/Window"
import image  from "../../assets/profile.jpg"


export const Profile = () => {
    return (
        <Window title="USER_PROFILE">
            <Content>
                <div className="flex flex-col  items-center gap-4 w-full">
                    <div className="shrink-0">
                        <UserImage src={image} alt="User Profile" />
                    </div>
                    <div className="grow w-full min-w-0">
                        <UserInfo/>
                    </div>
                </div>
            </Content>
        </Window>
    );
}