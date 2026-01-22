import{ useState} from 'react';
import type { ApiEndpoint } from '../../types/ApiEnpoint';
import { AVAILABLE_ENDPOINTS } from '../../types/ApiEnpoint';

export const RequestSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEndpoint, setSelectedEndpoint] = useState<ApiEndpoint | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (endpoint: ApiEndpoint) => {
    setSelectedEndpoint(endpoint);
    setIsOpen(false);
  };

  return (
    <div className="relative w-120">
      
      <button 
        onClick={toggleDropdown}
        className="w-full flex items-center justify-between bg-white border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <div className="flex items-center gap-2">
          {selectedEndpoint ? (
            <>
              <span className="font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded text-xs">
                {selectedEndpoint.method}
              </span>
              <span className="text-gray-700 truncate">{selectedEndpoint.url}</span>
            </>
          ) : (
            <span>Select an endpoint</span>
          )}
        </div>
        <span className="text-gray-400">▼</span>
      </button>

      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-auto">
          {AVAILABLE_ENDPOINTS.map((endpoint) => (
            <li 
              key={endpoint.id}
              onClick={() => handleSelect(endpoint)}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer transition-colors"
            >
              <span className="font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded text-xs">
                {endpoint.method}
              </span>
              <span className="text-gray-700">{endpoint.url}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};