import { Button } from "antd";

const NotFoundCharacter: React.FC = () => {
  return (
    <div className="flex h-screen gap-y-4">
      <div className="m-auto">
        <div className="flex flex-col gap-y-2">
          Character not found
          <Button
            type="ghost"
            onClick={() => window.location.assign(window.location.origin)}
          >
            Go back to home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundCharacter;
