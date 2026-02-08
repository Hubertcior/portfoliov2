export const Period = ({ start, end }: { start: string; end: string }) => {
    return (
        <span className="text-xs text-green-500 border rounded-lg p-1 border-green-500  font-mono ">
            {start} - {end}
        </span>
    );
};