import Opinion from "./components/Opinion";
import { pluginName, pluginRoute } from "./constants/const";

const setup = {
  name: pluginName,
  path: pluginRoute,
  exact: true,
  component: Opinion,
};

export default setup;
