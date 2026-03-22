"use client";

import Link from "next/link";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import HomeSectionLink from "./HomeSectionLink";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-white/10 bg-black/40 backdrop-blur-xl">
            <div className="w-full max-w-[min(100%,88rem)] mx-auto px-6 md:px-12 lg:px-16 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-2 space-y-6">
                        <div>
                            <Logo />
                        </div>
                        <p className="text-base text-white/60 max-w-sm leading-relaxed">
                            Empowering the next generation of smart devices with premium embedded systems design and IoT connectivity.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <SocialLink href="tel:+918758729042" icon={<Phone className="w-5 h-5" />} label="Contact" />
                            <SocialLink href="https://www.linkedin.com/company/tatvix" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading font-bold text-white mb-6 text-lg tracking-wide">Company</h4>
                        <ul className="space-y-3 text-base text-white/60">
                            <li><FooterSectionLink href="/services">Services</FooterSectionLink></li>
                            <li><FooterSectionLink href="/process">Process</FooterSectionLink></li>
                            <li><FooterSectionLink href="/industries">Industries</FooterSectionLink></li>
                            <li><FooterSectionLink href="/#about">About Us</FooterSectionLink></li>
                            <li><FooterSectionLink href="/insights">Insights</FooterSectionLink></li>
                            <li>
                                <Link href="/careers" className="block py-0.5 hover:text-blue-400 transition-colors">
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-2 lg:pl-8">
                        <h4 className="font-heading font-bold text-white mb-6 text-lg tracking-wide">Contact</h4>
                        <ul className="space-y-4 text-base text-white/60">
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                                <a href="mailto:info@tatvixtech.com" className="hover:text-white transition-colors">
                                    info@tatvixtech.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                                <span className="leading-relaxed">
                                    Ahmedabad, Gujarat, India
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
                    <p>&copy; {currentYear} Tatvix. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all transform hover:scale-110"
            aria-label={label}
        >
            {icon}
        </a>
    );
}

function FooterSectionLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <HomeSectionLink
            href={href}
            className="block py-0.5 hover:text-blue-400 transition-colors"
        >
            {children}
        </HomeSectionLink>
    );
}
