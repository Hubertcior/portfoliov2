import { useEffect, useState } from "react";
import { useApiStatus } from "../../hooks/useApiStatus";
import type { ApiStatusEndpoint } from "../../types/ApiEnpoint";

export const ApiInfo = () => {
    const { data, isLoading, error } = useApiStatus('https://localhost:7021/api/status');

    const [frozenData, setFrozenData] = useState<ApiStatusEndpoint | null>(null);

    useEffect(() => {
        if (data && !frozenData) {
            setFrozenData(data);
        }
    }, [data, frozenData]);

    if (isLoading) {
        return (
            <div className="p-4 bg-[#0b1220] text-blue-300 font-mono rounded-lg border-2 border-blue-400 animate-pulse">
                Connecting to API...
            </div>
        );
    }

    if (error || !frozenData) {
        return (
            <div className="p-4 bg-[#0b1220] text-red-400 font-mono rounded-lg border-2 border-red-500">
                <h3 className="text-lg font-semibold">Status: OFFLINE</h3>
                <p className="text-md">Błąd: {error || "Brak danych"}</p>
            </div>
        );
    }

    const dynamicApiInfo = [
        { info: "API_VERSION", description: frozenData?.apiVersion }, 
        { info: "CONDITION", description: frozenData?.condition },
        { info: "LAST_REPORTED", description: frozenData ? new Date(frozenData.lastReported).toLocaleString() : "" },
    ];

    return (
        <>
            {dynamicApiInfo.map((item) => (
                <div key={item.info} className="flex flex-row items-start gap-6 p-4 bg-[#0b1220] text-green-300 font-mono rounded-lg shadow-inner border-2 border-slate-400 mb-4">
                    <h3 className="min-w-[180px] text-lg font-semibold text-green-200">
                    {item.info}
                    </h3>
                <p className="text-md flex-1">
                    {item.description}
                </p>
            </div>
         ))}
        </>
    );
}
