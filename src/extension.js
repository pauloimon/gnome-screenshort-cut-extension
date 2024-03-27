const St = imports.gi.St;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;

function init() {
  return new class {
    enable() {
      this._panelMenuButton = new PanelMenu.Button(0, Me.metadata.name, false);

      this._panelMenuButton.add_child(
        new St.Icon({
          icon_name: 'camera-photo-symbolic',
          style_class: 'system-status-icon',
        })
      );

      Main.panel.addToStatusArea(Me.metadata.uuid, this._panelMenuButton);

      this._panelMenuButton.connect('button-press-event', function () {
        Main.screenshotUI.open();
      });
    }

    disable() {
      this._panelMenuButton?.destroy();
      this._panelMenuButton = null;
    }
  };
}
