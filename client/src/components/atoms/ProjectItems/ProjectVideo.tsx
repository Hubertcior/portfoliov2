import { useEffect, useRef, useState } from "react";

const isTouchDevice = () => "ontouchstart" in window || navigator.maxTouchPoints > 0;

export const ProjectVideo = ({ src, isPlaying }: { src: string; isPlaying: boolean }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [isMobile] = useState(isTouchDevice);

    useEffect(() => {
        if (!isMobile) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.5 }
        );

        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [isMobile]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const showFirstFrame = () => {
            video.currentTime = 0.1;
        };
        video.addEventListener("loadedmetadata", showFirstFrame);
        return () => video.removeEventListener("loadedmetadata", showFirstFrame);
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const shouldPlay = isMobile ? isInView : isPlaying;

        if (shouldPlay) {
            video.play().catch(error => {
                console.error("Video play prevented:", error);
            });
        } else {
            video.pause();
            video.currentTime = 0.1;
        }
    }, [isPlaying, isInView, isMobile]);

    return (
        <div ref={containerRef} className="w-full h-48 overflow-hidden rounded-xl border border-green-500 bg-transparent">
            <video
                ref={videoRef}
                src={src}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                muted
                loop
                playsInline
                preload="metadata"
            />
        </div>
    );
}