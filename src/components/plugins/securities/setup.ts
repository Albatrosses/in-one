import Securities from "./components/Securities";
import { pluginName, pluginRoute } from "./constants/const";

const setup = {
  name: pluginName,
  path: pluginRoute,
  exact: true,
  component: Securities,
};

export default setup;
