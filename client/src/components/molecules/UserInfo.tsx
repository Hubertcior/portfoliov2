import { TextInfo } from "../atoms/TextInfo";

const USER_INFO = [
    { info: "NAME", description: "HUBERT"},
    { info: "SURNAME", description: "RADZIWINSKI" },
    { info: "EMAIL", description: "HRADZIWINSKI@GMAIL.COM"},
    { info: "LINKEDIN", description: "https://linkedin.com", isLink: true, url: "https://www.linkedin.com/in/hubert-radziwi%C5%84ski-601a89373/" },
    { info: "GITHUB", description: "https://github.com", isLink: true, url: "https://github.com/Hubertcior" },
];

export const UserInfo = () => {
    return(
        <>
            {USER_INFO.map((item) => (
                <div key={item.info}>
                    <TextInfo info={item.info} description={item.description} isLink={item.isLink} url={item.url} />
                </div>
            ))}
        </>
    )
}