import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const footerLinks = [
    { label: "Qui sommes-nous ?", href: "#" },
    { label: "Mentions légales", href: "#" },
    { label: "Plan du site", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "X" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const partners = [
    "Ministère de la Santé",
    "Dunod",
    "CAF",
    "PMI",
  ];

  return (

    <footer className="bg-[#222222] text-white mt-12">
      <div className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Partners */}
          <div className="mb-8 pb-8 border-b border-gray-700">
            <h3 className="text-xl font-['Poppins'] mb-6">Nos partenaires</h3>
            <div className="flex flex-wrap gap-6 items-center">
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="bg-white text-[#222222] px-6 py-3 rounded font-['Poppins']"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Links */}
            <div>
              <ul className="flex flex-wrap gap-6">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-[#5CC370] transition font-['Open_Sans']"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="flex justify-start md:justify-end items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#5CC370] transition"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm font-['Open_Sans']">
            © {new Date().getFullYear()} La grande classe : la petite enfance. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}
