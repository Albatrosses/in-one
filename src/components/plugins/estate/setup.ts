import Estate from "./components/Estate";
import { pluginName, pluginRoute } from "./constants/const";

const setup = {
  name: pluginName,
  path: pluginRoute,
  exact: true,
  component: Estate,
};

export default setup;
