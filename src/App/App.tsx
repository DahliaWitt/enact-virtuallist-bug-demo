import kind from "@enact/core/kind";
import MoonstoneDecorator from "@enact/moonstone/MoonstoneDecorator";
import { Panel } from "@enact/moonstone/Panels";
import css from "./App.module.less";

import CollectionList from "../components/CollectionList";

const App = kind({
  name: "App",

  styles: {
    css,
    className: "app",
  },

  render: (props) => (
    <div {...props}>
      <Panel>
        <CollectionList />
      </Panel>
    </div>
  ),
});

export default MoonstoneDecorator(App);
