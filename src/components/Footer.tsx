import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logoImg from '../assets/image/techlite-logo.png';
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTiktok
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm font-sans pt-16 pb-8 border-t border-slate-900 w-screen ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-4">

        {/* TOP BLOCK: BRAND AND LINK CATEGORIES */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-4">

          {/* Column 1: Brand Info Engine (Spans 2 cols on mobile/tablet, 3 columns on large devices) */}
          <div className="col-span-2 lg:col-span-3 space-y-5 text-left">
            <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
              <img
                src={logoImg}
                alt="Techlite Group Logo"
                className="w-12 h-12 object-contain"
              />
              <span>Techlite Groups<span className="text-[#066291]">.</span></span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed font-normal max-w-xs">
              Trusted technology partner for homes, businesses, schools and organizations across Nepal.
            </p>
            {/* Rounded Social Link Nodes */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: <FaFacebook className="w-4 h-4" />, href: "https://www.facebook.com/techlitegroups" },
                { icon: <FaInstagram className="w-4 h-4" />, href: "https://www.instagram.com/techlitegroups/" },
                { icon: <FaTiktok className="w-4 h-4" />, href: "https://www.tiktok.com/@techlitegroups" },
                { icon: <FaWhatsapp className="w-4 h-4" />, href: "https://wa.me/9779855082916" }
              ].map((social, sIdx) => (
                <a
                  key={sIdx}
                  href={social.href}
                  className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Navigation List (Spans 1 col on mobile/tablet, 2 columns on large devices) */}
          <div className="col-span-1 lg:col-span-2 text-left space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/downloads" className="hover:text-white transition-colors">Downloads</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Individual Services Links List (Spans 1 col on mobile/tablet, 4 columns on large devices) */}
          <div className="col-span-1 lg:col-span-4 text-left space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><Link to="/services/laptop-repair-servicing" className="hover:text-white transition-colors">Laptop & Computer Repair</Link></li>
              <li><Link to="/services/hardware-upgrades" className="hover:text-white transition-colors">SSD & RAM Upgrades</Link></li>
              <li><Link to="/services/router-setup-wiring" className="hover:text-white transition-colors">Wi-Fi Router & Office Wiring</Link></li>
              <li><Link to="/services/printer-repair-maintenance" className="hover:text-white transition-colors">Printer Repair & Servicing</Link></li>
              <li><Link to="/services/data-recovery-software" className="hover:text-white transition-colors">Data Recovery & OS Setup</Link></li>
              <li><Link to="/services/cctv-installation-servicing" className="hover:text-white transition-colors">CCTV Camera Installation</Link></li>
              <li><Link to="/services/custom-pc-building" className="hover:text-white transition-colors">Custom PC Building</Link></li>
            </ul>
          </div>

          {/* Column 4: Product Categories List (Spans 2 cols on mobile/tablet, 3 columns on large devices) */}
          <div className="col-span-2 lg:col-span-3 text-left space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Product Categories</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><Link to="/products" className="hover:text-white transition-colors">Laptops</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">CCTV & Security Systems</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Networking Devices</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Printers</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Computer Accessories</Link></li>
            </ul>
          </div>

        </div>

        {/* MIDDLE BLOCK: HORIZONTAL RUNNING CONTACT CONNECTOR BAR */}
        <div className="border-t border-slate-900 pt-8 text-left space-y-4">
          <h4 className="text-white text-xs font-bold uppercase tracking-wider">Contact</h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs font-semibold text-white">
            <a href="tel:+977 9855072916" className="flex items-center gap-3 hover:text-[#066291] transition-colors duration-200">
              <Phone className="w-4 h-4 text-[#066291] shrink-0" />
              <span>+977 98550-72916</span>
            </a>

            <a href="mailto:techlitegroups@gmail.com" className="flex items-center gap-3 hover:text-[#066291] transition-colors duration-200">
              <Mail className="w-4 h-4 text-[#066291] shrink-0" />
              <span>techlitegroups@gmail.com</span>
            </a>

            <div className="flex items-center gap-3 text-white">
              <MapPin className="w-4 h-4 text-[#066291] shrink-0" />
              <span>Hetauda-4, School Road, Makwanpur, Nepal</span>
            </div>
          </div>
        </div>

        {/* BOTTOM BLOCK: COPYRIGHT INFRASTRUCTURE & LEGAL METRICS */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-medium text-slate-500">
          <p>© {new Date().getFullYear()} Techlite Groups. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}