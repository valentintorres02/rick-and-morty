import { Col, Row } from "antd";

import { DEFAULT_CHARACTERS_CARD } from "../../lib/utils";
import { SkeletonCharactersCard } from "./Home.charactersCard";

const HomeSkeleton: React.FC = () => {
  return (
    <Row gutter={[24, 24]}>
      {Array.from({ length: DEFAULT_CHARACTERS_CARD }, (_k, v) => (
        <Col sm={8} lg={6} xxl={4} xs={12} key={`skeleton-${v}`}>
          <SkeletonCharactersCard />
        </Col>
      ))}
    </Row>
  );
};

export default HomeSkeleton;
