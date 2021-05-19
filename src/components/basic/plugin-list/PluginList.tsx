import React from "react";
import { PluginListWrapper } from "./PluginList.style";
import { pluginMap } from "../../router/config";
import { map } from "lodash";
import Nav from "./components/nav/Nav";
import { useHistory } from "react-router";
import pluginIcon from "../../../assets/img/svg/plugin.svg";

const PluginList: React.FC<any> = () => {
  const history = useHistory();
  return (
    <PluginListWrapper>
      <Nav className="nav" />
      <div className="plugin-list">
        <div className="plugin-list-container">
          {map(pluginMap, (plugin) => {
            return (
              <div
                key={plugin.name}
                className="plugin-card"
                onClick={() => history.push(plugin.path)}
              >
                <div className="plugin-logo">
                  <img src={plugin.logo || pluginIcon} />
                </div>
                <label className="plugin-label">{plugin.name}</label>
              </div>
            );
          })}
        </div>
      </div>
    </PluginListWrapper>
  );
};

export default PluginList;
