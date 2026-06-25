import { Link } from 'react-router-dom';
import { Cpu, Phone, Mail, MapPin } from 'lucide-react';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm font-sans pt-16 pb-8 border-t border-slate-900 w-screen ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-4">
        
        {/* TOP BLOCK: BRAND AND LINK CATEGORIES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-4">
          
          {/* Column 1: Brand Info Engine (Spans 4 columns on large devices) */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <div className="flex items-center gap-2 text-white font-extrabold text-xl tracking-tight">
              <Cpu className="w-5 h-5 text-[#066291]" />
              <span>Techlite<span className="text-[#066291]">.</span></span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed font-normal max-w-xs">
              Trusted technology partner for homes, businesses, schools and organizations across Nepal.
            </p>
            {/* Rounded Social Link Nodes */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: <FaFacebook className="w-4 h-4" />, href: "#" },
                { icon: <FaInstagram className="w-4 h-4" />, href: "#" },
                { icon: <FaTwitter className="w-4 h-4" />, href: "#" },
                { icon: <FaLinkedin className="w-4 h-4" />, href: "#" },
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

          {/* Column 2: Company Navigation List */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Projects</Link></li>
            </ul>
          </div>

          {/* Column 3: Services Links List */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><Link to="/services" className="hover:text-white transition-colors">Computer Repair</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">CCTV Installation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Networking</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Maintenance Support</Link></li>
            </ul>
          </div>

          {/* Column 4: Product Categories List */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Products</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><Link to="/products" className="hover:text-white transition-colors">Laptops</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Printers</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Accessories</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Networking Equipment</Link></li>
            </ul>
          </div>

        </div>

        {/* MIDDLE BLOCK: HORIZONTAL RUNNING CONTACT CONNECTOR BAR */}
        <div className="border-t border-slate-900 pt-8 text-left space-y-4">
          <h4 className="text-white text-xs font-bold uppercase tracking-wider">Contact</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs font-semibold text-white">
            <a href="tel:+9779800000000" className="flex items-center gap-3 hover:text-[#066291] transition-colors duration-200">
              <Phone className="w-4 h-4 text-[#066291] shrink-0" />
              <span>+977 980-0000000</span>
            </a>
            
            <a href="mailto:hello@techlite.com.np" className="flex items-center gap-3 hover:text-[#066291] transition-colors duration-200">
              <Mail className="w-4 h-4 text-[#066291] shrink-0" />
              <span>hello@techlite.com.np</span>
            </a>
            
            <div className="flex items-center gap-3 text-white">
              <MapPin className="w-4 h-4 text-[#066291] shrink-0" />
              <span>Kathmandu, Nepal</span>
            </div>
          </div>
        </div>

        {/* BOTTOM BLOCK: COPYRIGHT INFRASTRUCTURE & LEGAL METRICS */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-medium text-slate-500">
          <p>© {new Date().getFullYear()} Techlite Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}