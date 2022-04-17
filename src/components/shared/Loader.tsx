import { Spin } from "antd";

const Loader: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <Spin />
      </div>
    </div>
  );
};

export default Loader;
