import cx from "classnames";
import React from "react";
import VirtualList from "@enact/moonstone/VirtualList/VirtualList";

import { getDefaultSpacing } from "../../utils";
import styles from "./index.module.css";

type Props = {
  className?: string;
  count: number;
  id: string;
  index?: number;
  itemRenderer: any;
  size: number | { minWidth: number; minHeight: number };
};

const HorizontalList = ({
  className,
  count,
  id,
  index,
  itemRenderer,
  size,
}: Props) => {
  const listProps = {
    "data-index": index,
    id,
    spotlightId: id,
  };

  return (
    <div className={cx(className, styles.root)}>
      <VirtualList
        dataSize={count}
        direction="horizontal"
        horizontalScrollbar="hidden"
        itemRenderer={itemRenderer}
        itemSize={size}
        noScrollByWheel={true}
        spacing={getDefaultSpacing()}
        {...listProps}
      />
    </div>
  );
};

export default HorizontalList;
