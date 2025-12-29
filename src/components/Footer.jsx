import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { footer as footerData } from '../data/footer';
import { contact } from '../data/contact';

const Footer = () => {
    return (
        <footer className="mt-16 border-t border-border bg-foreground/[0.02]">
            <div className="container py-10">
                <div className="flex flex-col md:flex-row gap-8 md:gap-4 justify-between">

                    {/* ----- Name & Description ----- */}
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">{footerData.owner}</h3>
                        <p className="max-w-md text-sm text-muted-foreground">
                            {footerData.blurb}
                        </p>
                    </div>

                    {/* ----- Quick Links ----- */}
                    <div>
                        <h3 className="text-lg font-semibold">Links</h3>
                        <ul className="mt-3 grid grid-cols-6 gap-x-6 gap-y-2 text-sm">
                            {footerData.quickLinks.map((item) => (
                                <li key={item.sectionId}>
                                    <a className="hover:text-primary transition-colors" href={`#${item.sectionId}`}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ----- Social Links ----- */}
                    <div>
                        <h3 className="text-lg font-semibold">Connect</h3>
                        <ul className="mt-3 flex items-center gap-4">
                            <li>
                                <a
                                    className="hover:text-primary transition-colors"
                                    href={contact.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin size={20} />
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-primary transition-colors"
                                    href={contact.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                >
                                    <FaGithub size={20} />
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-primary transition-colors"
                                    href={`mailto:${contact.email}`}
                                    aria-label="Email"
                                >
                                    <FaEnvelope size={20} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ----- Bottom Line ----- */}
                <div className="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} {footerData.owner}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
