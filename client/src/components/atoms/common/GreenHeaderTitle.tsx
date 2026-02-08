export const GreenHeaderTitle = ({ title }: { title: string }) => {
    return (
        <h4 className="text-base font-bold text-green-500 tracking-widest uppercase shadow-green-500 drop-shadow-[0_0_2px_rgba(34,197,94,0.5)]">
            {title}
        </h4>
    );
}