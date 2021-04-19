import React from "react";
import { PluginListWrapper } from "./PluginList.style";
import { pluginMap } from "../../router/config";
import { map } from "lodash";
import Nav from "./components/nav/Nav";
import { useHistory } from "react-router";

const PluginList: React.FC<any> = () => {
  const history = useHistory();
  return (
    <PluginListWrapper>
      <Nav className="nav" />
      <div className="plugin-list">
        {map(pluginMap, (plugin) => {
          return (
            <div
              key={plugin.name}
              className="plugin-card"
              onClick={() => history.push(plugin.path)}
            >
              <div className="plugin-logo">plugin-logo</div>
              <div className="plugin-content">
                <label className="plugin-label">{plugin.name}</label>
                <span className="plugin-description">{plugin.description}</span>
              </div>
            </div>
          );
        })}
      </div>
    </PluginListWrapper>
  );
};

export default PluginList;
