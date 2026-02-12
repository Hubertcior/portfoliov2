export const RequestDisplay = ({ data, error }: { data: any; error: any }) => {
  const leftBracket = "{";
  const rightBracket = "}";

  return (
    <div className="w-full rounded-md border border-gray-700 bg-[#1a1a1a] mt-4 text-gray-300 p-4 font-mono text-sm shadow-inner flex flex-col items-start justify-center">
      <div className="text-yellow-500 font-bold">{leftBracket}</div>

      <div className="pl-8 py-1">
        {error ? (
          <span className="text-red-400">
            {JSON.stringify(error, null, 2)}
          </span>
        ) : data ? (
          <span className="text-white">
            {JSON.stringify(data, null, 2)}
          </span>
        ) : null}
      </div>
      <div className="text-yellow-500 font-bold">{rightBracket}</div>
    </div>
  );
};