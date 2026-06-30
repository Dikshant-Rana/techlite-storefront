import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Clock,
  Copy,
  Check,
  Mail,
  Phone,
  Globe2,
  Car,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Settings
} from 'lucide-react';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

export default function Contact() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const contactFaqs = [
    {
      question: "Do I need to book an appointment before visiting?",
      answer: "No appointment is needed. You are welcome to walk into our shop during our business hours (Sunday to Friday, 9:00 AM to 7:00 PM) for general inspection and dropping off devices."
    },
    {
      question: "How fast do you reply to contact messages?",
      answer: "We aim to respond to all online inquiries within 2 to 4 hours during our business hours. If you need urgent assistance, please give us a direct phone call."
    },
    {
      question: "Do you offer emergency technical services outside hours?",
      answer: "For critical business network outages or major office system issues, please call our primary mobile number and leave a message. We will respond as quickly as possible."
    },
    {
      question: "What is your response time for WhatsApp messages?",
      answer: "Our technicians monitor WhatsApp throughout the day. We usually reply within a few minutes during business hours."
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white overflow-x-hidden">

      {/* 1. CLEAN ELEGANT HEADER */}
      <section className="relative w-screen pt-28 pb-10 flex items-center ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] bg-white bg-[size:40px_40px] bg-[linear-gradient(to_right,rgba(226,232,240,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(226,232,240,0.4)_1px,transparent_1px)] border-b border-slate-100">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none animate-pulse duration-[6000ms]" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10 text-left space-y-6">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <Link to="/" className="hover:text-[#066291] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-600">Contact Us</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100">
            <span className="text-[#066291] text-xs">★</span>
            <span className="text-xs font-semibold text-slate-700 tracking-wide uppercase">
              Get in Touch
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] max-w-2xl">
            Contact Our <br />
            <span className="relative inline-block text-[#066291]">
              Support Team
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl">
            Have a question, need a repair, or looking for a price quote? Get in touch with us using any of the methods below. We are here to help you.
          </p>
        </div>
      </section>

      {/* 2. CONTACT INFORMATION CARDS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card A: Phone */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-[#066291] transition-all duration-300 flex flex-col justify-between items-start text-left space-y-4">
            <div className="space-y-3 w-full">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-[#066291]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Phone Numbers</h3>
                <p className="text-[11px] text-slate-400 font-medium">Direct support desk lines</p>
              </div>
              <div className="space-y-2.5 pt-2 border-t border-slate-100 w-full font-semibold text-xs text-slate-700">
                <div className="flex items-center justify-between">
                  <span>+977 9801944800</span>
                  <button onClick={() => handleCopy("+9779801944800", "phone1")} className="p-1 hover:text-[#066291] hover:bg-slate-50 rounded">
                    {copiedText === "phone1" ? <Check className="w-3.5 h-3.5 text-[#066291]" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span>+977 9801944803</span>
                  <button onClick={() => handleCopy("+9779801944803", "phone2")} className="p-1 hover:text-[#066291] hover:bg-slate-50 rounded">
                    {copiedText === "phone2" ? <Check className="w-3.5 h-3.5 text-[#066291]" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card B: Email */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-[#066291] transition-all duration-300 flex flex-col justify-between items-start text-left space-y-4">
            <div className="space-y-3 w-full">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-[#066291]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Email Address</h3>
                <p className="text-[11px] text-slate-400 font-medium">Send us your request</p>
              </div>
              <div className="space-y-2.5 pt-2 border-t border-slate-100 w-full font-semibold text-xs text-slate-700">
                <div className="flex items-center justify-between">
                  <span className="truncate mr-1">techlitegroups@.com</span>
                  <button onClick={() => handleCopy("techlitegroups@.com", "email")} className="p-1 hover:text-[#066291] hover:bg-slate-50 rounded">
                    {copiedText === "email" ? <Check className="w-3.5 h-3.5 text-[#066291]" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card C: Store Address */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-[#066291] transition-all duration-300 flex flex-col justify-between items-start text-left space-y-4">
            <div className="space-y-3 w-full">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-[#066291]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Store Address</h3>
                <p className="text-[11px] text-slate-400 font-medium">Drop off your hardware</p>
              </div>
              <div className="space-y-2.5 pt-2 border-t border-slate-100 w-full font-semibold text-xs text-slate-700">
                <div className="flex items-start justify-between gap-1">
                  <span className="font-normal leading-normal">Hetauda-4, School Road</span>
                  <button onClick={() => handleCopy("Hetauda-4, School Road", "address")} className="p-1 hover:text-[#066291] hover:bg-slate-50 rounded shrink-0">
                    {copiedText === "address" ? <Check className="w-3.5 h-3.5 text-[#066291]" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card D: Business Hours */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-[#066291] transition-all duration-300 flex flex-col justify-between items-start text-left space-y-4">
            <div className="space-y-3 w-full">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-[#066291]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Opening Hours</h3>
                <p className="text-[11px] text-slate-400 font-medium">When to visit our shop</p>
              </div>
              <div className="space-y-2.5 pt-2 border-t border-slate-100 w-full text-xs text-slate-700 font-semibold">
                <div className="flex justify-between">
                  <span>Sun - Fri</span>
                  <span>9:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between text-[#066291]">
                  <span>Saturday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    
      {/* 4. ADDRESS AND MAP */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-12">
        <div className="text-left space-y-3">
          <span className="text-[10px] font-bold tracking-widest text-[#066291] uppercase block">Location</span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Visit Our Store</h2>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xl">
            We are centrally located in Hetauda on School Road. Drop by to discuss setups, bring devices in for servicing, or look at accessories.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Details Card */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-6">
            <h3 className="text-lg font-bold text-slate-900">Techlite Group Shop Details</h3>

            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-[#066291] border border-sky-100/30 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Address</div>
                  <p className="text-xs font-semibold text-slate-700">Hetauda-4, School Road, Nepal</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-[#066291] border border-sky-100/30 shrink-0">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Areas Served</div>
                  <p className="text-xs font-semibold text-slate-700">Hetauda and neighboring regions</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-[#066291] border border-sky-100/30 shrink-0">
                  <Car className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Parking</div>
                  <p className="text-xs font-semibold text-slate-700">Front store parking space available</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Follow Us</div>
              <div className="flex items-center gap-3">
                {[
                  { icon: <FaFacebook className="w-4 h-4" />, href: "#", name: "Facebook" },
                  { icon: <FaInstagram className="w-4 h-4" />, href: "#", name: "Instagram" },
                  { icon: <FaTwitter className="w-4 h-4" />, href: "#", name: "Twitter" },
                  { icon: <FaLinkedin className="w-4 h-4" />, href: "#", name: "LinkedIn" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={`Follow us on ${social.name}`}
                    className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#066291] hover:border-[#066291] transition-all duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map Frame */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-200 shadow-sm min-h-[380px] bg-slate-50 flex relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.304853462558!2d85.03270587549977!3d27.42860847634337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb499049049a31%3A0x7767527d65907e58!2sTechlite%20Groups!5e0!3m2!1sen!2snp!4v1782461986551!5m2!1sen!2snp"
              className="w-full h-full min-h-[380px] border-0 absolute inset-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Techlite Group Location Map"
            />
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="bg-slate-50/50 py-20 border-y border-slate-100 ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] w-screen">
        <div className="max-w-3xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 border border-sky-100">
              <span className="text-[10px] font-bold text-[#066291] uppercase tracking-wider">Contact FAQ</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Contact Frequently Asked Questions</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Find quick answers to common questions about getting in touch with us.
            </p>
          </div>

          <div className="space-y-4">
            {contactFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-sm md:text-base text-slate-900 hover:text-[#066291] transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#066291] shrink-0" />
                      {faq.question}
                    </span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-xs md:text-sm text-slate-600 border-t border-slate-50 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. FINAL CONTACT CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-[#0f172a] rounded-2xl p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">

          <div className="relative z-10 space-y-6 max-w-xl text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Looking for Immediate Support?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Skip the forms entirely. Click below to start a conversation on WhatsApp or call our main hotline directly to connect with our hardware desk coordinators.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://wa.me/9801944800"
                target="_blank"
                rel="noreferrer"
                className="bg-[#066291] hover:bg-[#044e74] text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm shadow-[#066291]/15"
              >
                Chat on WhatsApp
              </a>
              <a
                href="tel:+977-9855072916"
                className="bg-transparent border border-slate-500 hover:border-slate-300 text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-colors"
              >
                Direct Call
              </a>
            </div>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none flex items-center justify-center overflow-hidden">
            <Settings className="w-96 h-96 text-white rotate-45 transform translate-x-12" />
          </div>
        </div>
      </section>

    </div>
  );
}