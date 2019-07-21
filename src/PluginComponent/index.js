import React, {Component} from 'react';

class PluginComponent extends Component {

  _plugins = [];

  registerPlugin(plugin) {
    this._plugins.push(plugin);
  }

  triggerPlugin(key, options = {}) {
    return this._plugins.reduce((total, plugin) => {
      const functions = Object.keys(plugin);
      if (functions.some(f => f === key)) {
        const func = plugin[key];
        const result = func(this, {
          state: this.state,
          props: this.props,
          ...options,
        });

        return {
          ...total,
          ...result,
        };
      }
    });
  }
}

export default PluginComponent;