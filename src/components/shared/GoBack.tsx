import { To, useNavigate } from "react-router-dom";

export const GoBack: React.FC<{ to?: string; replace?: boolean }> = ({
  to,
  replace,
}) => {
  const navigate = useNavigate();
  return (
    <button
      className="text-sm text-gray-600 whitespace-nowrap hover:text-brand-600"
      type="button"
      onClick={() => navigate((to ?? -1) as To, { replace })}
    >
      ← Go back
    </button>
  );
};
