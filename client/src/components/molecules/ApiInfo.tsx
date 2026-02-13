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
            <div className="bg-[#0d1117] text-blue-300 font-mono rounded-lg border-2 border-blue-800 shadow-lg shadow-black/30">
                <div className="px-4 py-2 border-b-2 border-blue-800 bg-black/20">
                    <h3 className="text-lg font-semibold text-blue-400">API STATUS: CONNECTING...</h3>
                </div>
                <div className="p-4 animate-pulse">
                    [EXECUTING]...GET_API_STATUS
                </div>
            </div>
        );
    }

    if (error || !frozenData) {
        return (
            <div className="bg-[#0d1117] text-red-400 font-mono rounded-lg border-2 border-red-800 shadow-lg shadow-black/30">
                <div className="px-4 py-2 border-b-2 border-red-800 bg-black/20">
                    <h3 className="text-lg font-semibold text-red-400 flex items-center gap-2">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        API STATUS: OFFLINE
                    </h3>
                </div>
                <div className="p-4">
                    <p className="text-md">Błąd: {error || "Brak danych"}</p>
                </div>
            </div>
        );
    }

    const dynamicApiInfo = [
        { info: "API_VERSION", description: frozenData?.apiVersion },
        { info: "CONDITION", description: frozenData?.condition },
        { info: "LAST_REPORTED", description: frozenData ? new Date(frozenData.lastReported).toLocaleString() : "" },
    ];

    return (
        <div className="bg-[#0d1117] text-green-300 font-mono rounded-lg border-2 border-slate-700 shadow-lg shadow-black/30">
            <div className="px-4 py-2 border-b-2 border-slate-700 bg-black/20">
                <h3 className="text-lg font-semibold text-green-400 flex items-center gap-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    API STATUS: ONLINE
                </h3>
            </div>
            <div className="p-4 space-y-2">
                {dynamicApiInfo.map((item) => (
                    <div key={item.info} className="flex items-baseline">
                        <span className="font-semibold text-green-400 w-36">{item.info}</span>
                        <span className="grow border-b border-dotted border-slate-600 mx-2"></span>
                        <span className="text-green-200">{item.description}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

