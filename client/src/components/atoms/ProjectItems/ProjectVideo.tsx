import { useEffect, useRef } from "react";

export const ProjectVideo = ({ src, isPlaying }: { src: string; isPlaying: boolean }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        if (isPlaying) {
            videoElement.play().catch(error => {
                console.error("Video play prevented:", error);
            });
        } else {
            videoElement.pause();
            videoElement.currentTime = 0;
        }
    }, [isPlaying]);

    return (
        <div className="w-full h-48 overflow-hidden rounded-xl border border-green-500 bg-transparent"> 
            <video 
                ref={videoRef}
                src={src} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                muted
                loop
                playsInline
            />
        </div>
    );
}