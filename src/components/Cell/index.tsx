import React from "react";
import Spottable from "@enact/spotlight/Spottable";

import styles from "./index.module.css";

interface Props {}

const Cell = React.memo<Props>(function ({ ...rest }) {
  return (
    <div className={styles.root} {...rest}>
      <div className={styles.inner}>
        <img src={"https://placekitten.com/1200/1200"} />
        <div>
          <div>Dummy Title</div>
        </div>
      </div>
    </div>
  );
});

export default Spottable(Cell);
