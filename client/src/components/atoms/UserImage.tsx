export const UserImage = ({ src, alt }: { src: string; alt: string }) => {
    return (
        <img src={src} alt={alt} className="w-24 h-24 rounded-full object-cover mb-4" />
    );
}