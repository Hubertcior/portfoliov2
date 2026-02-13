interface TextInfoProps {
  info: string;
  description: string;
  isLink?: boolean;
  url?: string; 
}

export const TextInfo = ({ info, description, isLink, url }: TextInfoProps) => {

  return (
    <div className="flex items-center gap-2 mb-3 text-sm md:text-base w-full">
      
      <span className="font-bold text-gray-400 shrink-0 uppercase mt-0.5">
        {info}:
      </span>
      
      <div className="flex min-w-0">
        {isLink && url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 hover:underline hover:decoration-blue-400 transition-colors wrap-break-word block"
          >
            {description}
          </a>
        ) : (
          <span className="text-green-500 wrap-break-word block">
            {description}
          </span>
        )}
      </div>
    </div>
  );
};