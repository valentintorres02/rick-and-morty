import React, { useState } from "react";
import { Badge, Card } from "antd";
import { Link } from "react-router-dom";
import { PictureOutlined } from "@ant-design/icons";

import { Status, getBadgeColor } from "../../lib/utils";

const { Meta } = Card;

type Props = {
  id?: string;
  name?: string;
  image?: string;
  status?: Status;
};

const ImageCard: React.FC<Props> = ({ name, image }) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  return (
    <>
      <div className={imageLoaded ? "hidden" : ""}>
        <span
          className={
            "mx-auto block h-64 w-full animate-pulse rounded bg-gray-300"
          }
        >
          <div className="h-full w-full flex items-center justify-center">
            <PictureOutlined className="text-6xl text-gray-600" />
          </div>
        </span>
      </div>
      <img
        className={imageLoaded ? "" : "hidden"}
        alt={name}
        src={image}
        onLoad={() => setImageLoaded(true)}
      />
    </>
  );
};

export const CharactersCard: React.FC<Props> = ({
  id,
  name,
  image,
  status,
}) => {
  return (
    <Link to={`/character/${id}`}>
      <Badge.Ribbon text={status} color={getBadgeColor(status || "Alive")}>
        <Card
          className="p-4"
          hoverable
          cover={<ImageCard name={name} image={image} />}
        >
          <Meta title={name} description={name} />
        </Card>
      </Badge.Ribbon>
    </Link>
  );
};

export const SkeletonCharactersCard: React.FC = () => {
  return (
    <Card className="mx-2 my-2 !bg-gray-300 aspect-square animate-pulse h-96">
      <span className="ml-4 mt-[80%] flex h-[20px] w-[45%] animate-pulse rounded bg-gray-400 bottom-0" />
      <span className="ml-4 mt-3 flex h-[20px] w-[35%] animate-pulse rounded bg-gray-400 bottom-0" />
    </Card>
  );
};
