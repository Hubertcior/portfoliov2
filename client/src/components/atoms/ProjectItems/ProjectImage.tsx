export const ProjectImage = ({ src, alt }: { src: string; alt: string }) => {
    return (
        <div className="w-full h-48 overflow-hidden rounded-xl border border-green-500 bg-transparent"> 
            <img 
                src={src} 
                alt={alt} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            />
        </div>
    );
}