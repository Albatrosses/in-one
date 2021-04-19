import { map } from "lodash";
import PluginList from "../basic/plugin-list/PluginList";

const plugins = import.meta.globEager("../plugins/**/setup.ts");

const pluginList = {
  name: "pluginList",
  path: "/",
  exact: true,
  component: PluginList,
};

export const pluginMap = map(plugins, (plugin) => plugin.default);

export default [pluginList].concat(pluginMap);
