import React from 'react';

interface TextInfoProps {
  info: string;
  description: string;
  isLink?: boolean;
  url?: string; 
}

export const TextInfo = ({ info, description, isLink, url }: TextInfoProps) => {

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!isLink || !url) return;

    if (e.ctrlKey || e.metaKey) {
      return; 
    }

    e.preventDefault();
  };

  return (
    <div className="flex space-x-2 mb-2 items-center">
      <p className="text-sm md:text-base">{info}:</p>
      
      {isLink && url ? (
        <div className="relative group flex items-center">
          <a
            href={url}
            onClick={handleLinkClick}
            className="text-blue-200 cursor-pointer hover:underline hover:decoration-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            {description}
          </a>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-max px-2 py-1 bg-gray-800 text-white text-xs rounded shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Follow link (Ctrl + Click)
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
          </div>
        </div>
      ) : (
        <p className="text-green-600 cursor-default">{description}</p>
      )}
    </div>
  );
};