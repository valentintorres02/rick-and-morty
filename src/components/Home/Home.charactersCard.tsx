import React from "react";
import { Badge, Card } from "antd";
import { Link } from "react-router-dom";

import { Status, getBadgeColor } from "../../lib/utils";

const { Meta } = Card;

type Props = {
  id?: string;
  name?: string;
  image?: string;
  status: Status;
};

export const CharactersCard: React.FC<Props> = ({
  id,
  name,
  image,
  status,
}) => {
  return (
    <Link to={`/character/${id}`}>
      <Badge.Ribbon text={status} color={getBadgeColor(status)}>
        <Card className="p-4" hoverable cover={<img alt={name} src={image} />}>
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
