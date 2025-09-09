import { Button } from "@/components/ui/button";

export default function InstallationGuide() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      // Could add a toast notification here
    });
  };

  const steps = [
    {
      number: 1,
      title: "Clone the Repository",
      description: "Download HyprZepyx to your local machine:",
      code: "git clone https://github.com/xZepyx/HyprZepyx.git ~/.config/hyprzepyx\ncd ~/.config/hyprzepyx"
    },
    {
      number: 2,
      title: "Install Dependencies",
      description: "Run the prerequisites script to install all required packages:",
      code: "bash prerequisites.sh"
    },
    {
      number: 3,
      title: "Copy Configuration Files",
      description: "Copy the Hyprland configuration to your config directory:",
      code: "cp -r config/* ~/.config/"
    },
    {
      number: 4,
      title: "Launch Hyprland",
      description: "Start your new HyprZepyx desktop:",
      code: "hyprland"
    }
  ];

  return (
    <section className="py-20 px-4" data-testid="installation-section">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Installation Guide</h2>
        <p className="text-xl text-muted-foreground text-center mb-12">Get HyprZepyx up and running in minutes</p>

        {/* Prerequisites */}
        <div className="glass-effect rounded-xl p-8 mb-8" data-testid="prerequisites">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <i className="fas fa-list-check mr-3 text-primary"></i>Prerequisites
          </h3>
          <p className="text-muted-foreground mb-4">Ensure you have the following dependencies installed:</p>
          <div className="code-block">
            <Button
              size="sm"
              className="copy-btn"
              onClick={() => copyToClipboard("sudo pacman -S kitty waybar swww swaync eww rofi hyprland")}
              data-testid="copy-prerequisites"
            >
              Copy
            </Button>
            <code>sudo pacman -S kitty waybar swww swaync eww rofi hyprland</code>
          </div>
          <p className="text-sm text-muted-foreground mt-4">Or use the automated installer:</p>
          <div className="code-block">
            <Button
              size="sm"
              className="copy-btn"
              onClick={() => copyToClipboard("bash deps-installer.sh")}
              data-testid="copy-installer"
            >
              Copy
            </Button>
            <code>bash deps-installer.sh</code>
          </div>
        </div>

        {/* Step-by-step Installation */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="glass-effect rounded-xl p-8" data-testid={`step-${step.number}`}>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold mr-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{step.description}</p>
              <div className="code-block">
                <Button
                  size="sm"
                  className="copy-btn"
                  onClick={() => copyToClipboard(step.code)}
                  data-testid={`copy-step-${step.number}`}
                >
                  Copy
                </Button>
                <code>{step.code}</code>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tips */}
        <div className="glass-effect rounded-xl p-8 mt-8" data-testid="pro-tips">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <i className="fas fa-lightbulb mr-3 text-accent"></i>Pro Tips
          </h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <i className="fas fa-check text-primary mr-3 mt-0.5"></i>
              <span>Adjust paths in scripts if you have a custom setup directory</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check text-primary mr-3 mt-0.5"></i>
              <span>Install recommended GTK themes and fonts for the best visual experience</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check text-primary mr-3 mt-0.5"></i>
              <span>Use <code className="bg-muted px-2 py-1 rounded text-foreground">Super + D</code> to open the app launcher after installation</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check text-primary mr-3 mt-0.5"></i>
              <span>Check the troubleshooting section if you encounter any issues</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
