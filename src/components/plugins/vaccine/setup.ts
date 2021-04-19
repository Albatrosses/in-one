import Vaccine from "./components/Vaccine";
import { pluginName, pluginRoute } from "./constants/const";

const setup = {
  name: pluginName,
  path: pluginRoute,
  exact: true,
  component: Vaccine,
};

export default setup;
