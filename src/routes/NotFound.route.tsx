import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const NotFoundRoute: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen my-auto space-y-4">
      <span>This page does not exist.</span>
      <Button type="default" onClick={() => navigate("/")}>
        Go back to home
      </Button>
    </div>
  );
};

export default NotFoundRoute;
