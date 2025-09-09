export default function Documentation() {
  const generalKeybindings = [
    { key: "Super + Enter", action: "Launch Terminal" },
    { key: "Super + C", action: "Kill Window" },
    { key: "Super + D", action: "App Launcher" },
    { key: "Super + E", action: "File Manager" },
    { key: "Super + V", action: "Toggle Floating" },
    { key: "Super + Space", action: "Toggle Fullscreen" },
    { key: "Super + B", action: "Wallpaper Switcher" },
    { key: "Alt + L", action: "Lock Screen" },
  ];

  const workspaceControls = [
    { key: "Super + [1-9]", action: "Switch Workspace" },
    { key: "Super + Shift + [1-9]", action: "Move to Workspace" },
    { key: "Super + Arrow Keys", action: "Move Focus" },
    { key: "Super + Mouse Wheel", action: "Cycle Workspaces" },
    { key: "Super + Left Click", action: "Move Window" },
    { key: "Super + Right Click", action: "Resize Window" },
  ];

  const mediaControls = [
    { key: "XF86AudioRaiseVolume", action: "Volume +5%" },
    { key: "XF86AudioLowerVolume", action: "Volume -5%" },
    { key: "XF86AudioMute", action: "Toggle Mute" },
    { key: "XF86MonBrightnessUp", action: "Brightness +5%" },
    { key: "XF86MonBrightnessDown", action: "Brightness -5%" },
    { key: "XF86AudioPlay", action: "Play/Pause" },
  ];

  const configFiles = [
    { name: "Hyprland Config", path: "~/.config/hyprland/hyprland.conf" },
    { name: "Waybar Themes", path: "~/.config/waybar/" },
    { name: "Eww Widgets", path: "~/.config/eww/" },
    { name: "Rofi Launchers", path: "~/.config/rofi/" },
    { name: "Wallpapers", path: "~/.config/hyprzepyx/wallpapers/" },
  ];

  return (
    <section className="py-20 px-4" data-testid="documentation-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Documentation</h2>
        <p className="text-xl text-muted-foreground text-center mb-12">Complete guide to HyprZepyx keybindings and configuration</p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* General Keybindings */}
          <div className="glass-effect rounded-xl p-8" data-testid="general-keybindings">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <i className="fas fa-keyboard mr-3 text-primary"></i>General Keybindings
            </h3>
            <div className="space-y-4">
              {generalKeybindings.map((binding, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border">
                  <span className="font-mono text-sm bg-muted px-3 py-1 rounded">{binding.key}</span>
                  <span className="text-muted-foreground">{binding.action}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Workspace Controls */}
          <div className="glass-effect rounded-xl p-8" data-testid="workspace-controls">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <i className="fas fa-layer-group mr-3 text-accent"></i>Workspace Controls
            </h3>
            <div className="space-y-4">
              {workspaceControls.map((binding, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border">
                  <span className="font-mono text-sm bg-muted px-3 py-1 rounded">{binding.key}</span>
                  <span className="text-muted-foreground">{binding.action}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Media Controls */}
          <div className="glass-effect rounded-xl p-8" data-testid="media-controls">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <i className="fas fa-volume-up mr-3 text-primary"></i>Media & System
            </h3>
            <div className="space-y-4">
              {mediaControls.map((binding, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border">
                  <span className="font-mono text-sm bg-muted px-3 py-1 rounded">{binding.key}</span>
                  <span className="text-muted-foreground">{binding.action}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Configuration */}
          <div className="glass-effect rounded-xl p-8" data-testid="configuration-files">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <i className="fas fa-cog mr-3 text-accent"></i>Configuration Files
            </h3>
            <div className="space-y-4">
              {configFiles.map((config, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">{config.name}</h4>
                  <code className="text-sm text-muted-foreground">{config.path}</code>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="glass-effect rounded-xl p-8 mt-8" data-testid="troubleshooting">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <i className="fas fa-tools mr-3 text-primary"></i>Troubleshooting
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-accent">Common Issues</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Waybar icons missing: Install FontAwesome or Material Icons</li>
                <li>• Eww widgets missing: Run <code className="bg-muted px-1 rounded">eww daemon</code> before Hyprland</li>
                <li>• Rofi launcher errors: Check config.rasi paths</li>
                <li>• Hyprland crashes: Check <code className="bg-muted px-1 rounded">~/.local/share/hyprland.log</code></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-accent">Quick Fixes</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Restart Waybar: <code className="bg-muted px-1 rounded">killall waybar && waybar &</code></li>
                <li>• Reload Hyprland: <code className="bg-muted px-1 rounded">hyprctl reload</code></li>
                <li>• Reset wallpaper: <code className="bg-muted px-1 rounded">swww img /path/to/wallpaper</code></li>
                <li>• Check logs: <code className="bg-muted px-1 rounded">journalctl -u hyprland</code></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
