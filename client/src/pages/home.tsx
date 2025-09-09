import { useState, useEffect } from "react";
import Navigation from "../components/navigation";
import HeroSection from "../components/hero-section";
import FeaturesGrid from "../components/features-grid";
import ScreenshotsGallery from "../components/screenshots-gallery";
import InstallationGuide from "../components/installation-guide";
import Documentation from "../components/documentation";
import AboutSection from "../components/about-section";

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');

  // Smooth scroll to top when switching tabs
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  // Add Font Awesome CDN
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <HeroSection onTabChange={setActiveTab} />
            <FeaturesGrid />
          </>
        );
      case 'screenshots':
        return <ScreenshotsGallery />;
      case 'installation':
        return <InstallationGuide />;
      case 'docs':
        return <Documentation />;
      case 'about':
        return <AboutSection />;
      default:
        return (
          <>
            <HeroSection onTabChange={setActiveTab} />
            <FeaturesGrid />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="home-page">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Main Content */}
      <main className="pt-24 min-h-screen">
        <div className={`tab-content ${activeTab ? 'active' : ''}`}>
          {renderTabContent()}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border" data-testid="footer">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center font-bold text-sm">
              HZ
            </div>
            <span className="text-xl font-bold">HyprZepyx</span>
          </div>
          <p className="text-muted-foreground mb-6">Fatal Exception : Elegance</p>
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="https://github.com/xZepyx/HyprZepyx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="footer-github"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a 
              href="mailto:zepyxunderscore@gmail.com" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="footer-email"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 Aditya Yadav. Licensed under GNU GPLv3. Built with passion for the Linux community.
          </p>
        </div>
      </footer>
    </div>
  );
}
