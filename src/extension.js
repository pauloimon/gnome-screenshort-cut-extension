import St from 'gi://St';

import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import * as PanelMenu from 'resource:///org/gnome/shell/ui/panelMenu.js';

export default class extends Extension {
  enable() {
    this._panelMenuButton = new PanelMenu.Button(0, this.metadata.name, false);

    this._panelMenuButton.add_child(
      new St.Icon({
        icon_name: 'camera-photo-symbolic',
        style_class: 'system-status-icon',
      })
    );

    Main.panel.addToStatusArea(this.uuid, this._panelMenuButton);

    this._panelMenuButton.connect('button-press-event', function () {
      Main.screenshotUI.open();
    });
  }

  disable() {
    this._panelMenuButton?.destroy();
    this._panelMenuButton = null;
  }
}
