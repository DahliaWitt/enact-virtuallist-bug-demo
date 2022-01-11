import React, { FC } from "react";
import Scroller from "@enact/moonstone/Scroller";

import Carousel from "../Carousel";

interface Props {}

const data = [{}, {}, {}, {}];

const CollectionList: FC<Props> = () => (
  <Scroller
    direction="vertical"
    verticalScrollbar="hidden"
    focusableScrollbar={false}
  >
    {data.map((_, index) => (
      <Carousel key={index} {...{ index }} />
    ))}
  </Scroller>
);

export default CollectionList;
