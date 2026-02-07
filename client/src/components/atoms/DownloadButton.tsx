export const DownloadButton = ({ fileUrl }: { fileUrl: string }) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileUrl.split('/').pop() || 'file';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
<button
    onClick={handleDownload}
    className="
        px-4 py-2 
        font-mono font-bold 
        rounded 
        border-2 border-green-500  
        bg-green-500            
        text-gray-900             
        hover:bg-transparent           
        hover:text-green-500           
        transition-all duration-300    
    "
>
    [ DOWNLOAD_CV.pdf ]
</button>
    );
}
    