import Holiday from "./components/Holiday";
import { pluginName, pluginRoute } from "./constants/const";

const setup = {
  name: pluginName,
  path: pluginRoute,
  exact: true,
  component: Holiday,
};

export default setup;
