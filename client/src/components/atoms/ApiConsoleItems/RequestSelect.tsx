import { useState } from 'react';
import type { ApiEndpoint } from '../../../types/ApiEnpoint';
import { AVAILABLE_ENDPOINTS } from '../../../types/ApiEnpoint';
import { GreenHeaderTitle } from '../ProfileItems/common/GreenHeaderTitle';

interface RequestSelectProps {
  onSelect: (endpoint: ApiEndpoint) => void;
}

export const RequestSelect = ({ onSelect }: RequestSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEndpoint, setSelectedEndpoint] = useState<ApiEndpoint | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (endpoint: ApiEndpoint) => {
    setSelectedEndpoint(endpoint);
    setIsOpen(false);
    onSelect(endpoint); 
  };

  return (
    <div className="relative w-full max-w-xl">
      
      <button 
        onClick={toggleDropdown}
        className="w-full flex items-center justify-between bg-gray-500/20 border border-green-500 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"
      >
        <div className="flex items-center gap-2 flex-1 min-w-0">
          {selectedEndpoint ? (
            <>
              <span className="font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded text-xs shrink-0">
                {selectedEndpoint.method}
              </span>
              
              <span className="text-green-700 truncate w-full">
                {selectedEndpoint.url}
              </span>
            </>
          ) : (
            <GreenHeaderTitle title={'Select an endpoint'} />
          )}
        </div>
        <span className="text-gray-400 shrink-0 ml-2">▼</span>
      </button>

      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-black/90 rounded shadow-lg max-h-60 overflow-auto border border-green-500 divide-y divide-gray-700 backdrop-blur-sm">
          {AVAILABLE_ENDPOINTS.map((endpoint) => (
            <li 
              key={endpoint.id}
              onClick={() => handleSelect(endpoint)}
              className={`flex items-center gap-2 p-2 cursor-pointer transition-colors ${
                endpoint.id === selectedEndpoint?.id ? 'bg-green-700/30 text-white' : 'hover:bg-gray-700/50 text-gray-200'
              }`}
            >
              <span className="font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded text-xs shrink-0">
                {endpoint.method}
              </span>
              <span className="text-green-300 text-sm break-all">
                {endpoint.url}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};