import Link from 'next/link';
import { 
  Globe, 
  Mail, 
  MapPin,
  Github, 
  Linkedin, 
  Twitter, 
  Instagram
} from 'lucide-react';

const footerLinks = {
  quickLinks: [
    { name: 'Home', href: '/' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Learning Resources', href: '#' },
    { name: 'FAQs', href: '#' },
  ],
};

const socialLinks = [
  { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-white hover:bg-gray-700' },
  { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-white hover:bg-blue-600' },
  { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-white hover:bg-sky-500' },
  { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-white hover:bg-pink-500' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-secondary-300">
      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center space-x-3 group mb-5">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-primary-400">
                Web Application Development Club
              </span>
            </Link>

            {/* Address */}
            <div className="flex items-start space-x-3 text-sm text-secondary-400">
              <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
              <span>AISSMS IOIT, Kennedy Road,<br />Pune - 411001, Maharashtra</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <a 
              href="mailto:principal@aissmsioit.org" 
              className="flex items-center gap-2 text-secondary-400 hover:text-primary-400 transition-colors text-sm mb-4"
            >
              <Mail className="w-4 h-4 text-primary-400" />
              <span>principal@aissmsioit.org</span>
            </a>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-400 ${social.color} transition-all duration-200`}
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <div className="container-custom py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-secondary-500">
            <p>
              © {currentYear} Web Application Development Club. All rights reserved.
            </p>
            <p className="text-secondary-400">
              Made by <span className="text-primary-400 font-medium">Pritam Rangari</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
