import React, { FC } from "react";

import HorizontalList from "../HorizontalList";
import { getPosterCellSize } from "../../utils";
import Cell from "../Cell";
import styles from "./index.module.css";

interface Props {
  index: number;
}

const Carousel: FC<Props> = ({ index }) => {
  const data = [{}, {}, {}];
  const itemRenderer = ({ idx }: any) => {
    return <Cell key={idx} />;
  };

  return (
    <div>
      <div>Header</div>
      <HorizontalList
        className={styles.content}
        count={data.length}
        id={`Carousel${index}`}
        index={index}
        itemRenderer={itemRenderer}
        size={getPosterCellSize()}
      />
    </div>
  );
};

export default Carousel;
