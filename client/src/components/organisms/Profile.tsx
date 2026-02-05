import { UserImage } from "../atoms/UserImage";
import { Content } from "../molecules/Content"
import { UserInfo } from "../molecules/UserInfo";
import { Window } from "../molecules/Window"
import image  from "../../assets/profile.jpg"


export const Profile = () => {
    return (
        <Window title="USER_PROFILE">
            <Content>
                <div className="flex justify-center w-full">
                    <UserImage src={image} alt="User Profile" />
                </div>
                <UserInfo/>
            </Content>
        </Window>
    );
}