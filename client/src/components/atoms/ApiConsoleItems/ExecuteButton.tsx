import { MatrixButton } from "../common/MatrixButton";

export const ExecuteButton = ({ onClick, label }: { onClick: () => void; label: string }) => {
  return (
    <MatrixButton onClick={onClick} label={label} />
    );
}