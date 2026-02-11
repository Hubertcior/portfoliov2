import type { IconType } from "react-icons";

export const TechBadge = ({ Icon, color }: { Icon: IconType; color: string }) => {
  return (
    <div className={`p-2 rounded-lg border bg-[#1a1a1a]/50 transition-colors duration-300 ${color}`}>
      <Icon size={20} />
    </div>
  );
};