import { MatrixButton } from "../common/MatrixButton";

export const DownloadButton = ({ fileUrl }: { fileUrl: string }) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileUrl.split('/').pop() || 'file';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return(
        <MatrixButton onClick={handleDownload} label=" ↓ DOWNLOAD CV" />
    )

}
    