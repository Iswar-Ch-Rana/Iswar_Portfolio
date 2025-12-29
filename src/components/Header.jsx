import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ModeToggle } from './theme/mode-toggle';
import { cn } from '../lib/utils';
import { site } from '../data/site';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className={cn('sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60')}>
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          <button
            className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
            onClick={() => scrollToSection('about')}
          >
            {site.name}
          </button>
          <ul className="hidden md:flex items-center gap-6 text-sm">
            {site.navItems.map((item) => (
              <li key={item.sectionId}>
                <a
                  className="hover:text-primary transition-colors"
                  href={`#${item.sectionId}`}
                  onClick={() => scrollToSection(item.sectionId)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.resumeUrl}
                download="Resume.pdf"
                className="inline-flex h-9 items-center rounded-md border border-border px-3 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {site.resumeLabel}
              </a>
            </li>
            <li><ModeToggle /></li>
          </ul>
          <div className="md:hidden flex items-center gap-2">
            <ModeToggle />
            <button className="text-xl" onClick={toggleMenu} aria-label="Toggle menu">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4">
            <ul className="flex flex-col gap-3 text-sm">
              {site.navItems.map((item) => (
                <li key={item.sectionId}>
                  <a
                    className="block hover:text-primary"
                    href={`#${item.sectionId}`}
                    onClick={() => scrollToSection(item.sectionId)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href={site.resumeUrl}
                  download="Resume.pdf" 
                  className="inline-flex h-9 items-center rounded-md border border-border px-3 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
