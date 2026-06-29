import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Activity,
  Settings,
  Wrench,
  AlertCircle,
  HelpCircle as QuestionIcon
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Plain-English customer situations mapped to slugs
  const customerSituations = [
    {
      situation: "My computer, laptop, or printer won't turn on or has physical damage.",
      recommendation: "Computer, Laptop & Printer Repair",
      slug: "computer-laptop-printer-repair",
      icon: <Wrench className="w-5 h-5 text-amber-500" />
    },
    {
      situation: "My computer is extremely slow and I run out of file space.",
      recommendation: "Hardware Upgrades",
      slug: "hardware-upgrades",
      icon: <Settings className="w-5 h-5 text-sky-500" />
    },
    {
      situation: "My Wi-Fi is slow, drops out, or doesn't reach all rooms.",
      recommendation: "Router Setup & Network Wiring",
      slug: "router-setup-network-wiring",
      icon: <Activity className="w-5 h-5 text-indigo-500" />
    },
    {
      situation: "I want HD security cameras installed for my home or shop.",
      recommendation: "CCTV Installation & Servicing",
      slug: "cctv-installation-servicing",
      icon: <Wrench className="w-5 h-5 text-[#066291]" />
    },
    {
      situation: "I need a fast desktop built for office work, studying, or gaming.",
      recommendation: "Custom PC Building",
      slug: "custom-pc-building",
      icon: <Settings className="w-5 h-5 text-emerald-500" />
    },
    {
      situation: "I deleted files, or I need Windows and Microsoft Office installed.",
      recommendation: "Data Recovery & Software Installation",
      slug: "data-recovery-software-installation",
      icon: <AlertCircle className="w-5 h-5 text-rose-500" />
    }
  ];

  const generalFaqs = [
    {
      question: "How do I know which service is right for my problem?",
      answer: "If you're unsure, check our 'Find the Right Service' finder below, or contact us directly. We will diagnose your device and recommend the correct service before starting any work."
    },
    {
      question: "Can I bring my device to your shop for a free inspection?",
      answer: "Yes, you can visit our service center anytime during business hours. We offer initial basic checks and estimates at no cost."
    },
    {
      question: "Do you provide on-site services for homes and offices?",
      answer: "Yes. For network setups, CCTV cabling, and office computer maintenance, our technicians will visit your home or business location."
    },
    {
      question: "How long do typical repair and upgrade services take?",
      answer: "Standard upgrades (RAM/SSD) and cleanings are completed on the same day. Most general repairs take between 1 to 3 business days, depending on replacement parts availability."
    },
    {
      question: "Do you support businesses and schools with bulk IT setup?",
      answer: "Absolutely. We configure computer labs, install corporate network wiring, deploy multi-camera security systems, and provide annual IT support for businesses across Nepal."
    },
    {
      question: "Can I contact a technician for advice before visiting?",
      answer: "Yes, you are welcome to call us or contact us via WhatsApp to describe your issues. We can give you general guidance and estimate the service scope before you bring your device in."
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white overflow-x-hidden">

      {/* 1. PREMIUM HERO */}
      <section className="relative w-screen pt-28 pb-16 flex items-center ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] bg-white bg-[size:40px_40px] bg-[linear-gradient(to_right,rgba(226,232,240,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(226,232,240,0.4)_1px,transparent_1px)] border-b border-slate-100">
        {/* Decorative ambient radial glows */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none animate-pulse duration-[6000ms]" />
        <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-slate-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10 text-left">

          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">
            <Link to="/" className="hover:text-[#066291] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-600">Services</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 mb-6">
            <span className="text-[#066291] text-xs">★</span>
            <span className="text-xs font-semibold text-slate-700 tracking-wide uppercase">
              Technology Solutions
            </span>
          </div>


          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] max-w-2xl">
            Our Technical <br />
            <span className="relative inline-block text-[#066291]">
              Services Catalog
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mb-8">
            Explore our professional services covering computer repairs, solid-state upgrades, local mesh configurations, CCTV security, and software support in Nepal.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#service-catalog"
              className="bg-[#066291] hover:bg-[#044e74] text-white px-6 py-3.5 rounded-full font-bold text-sm inline-flex items-center gap-2 transition-all duration-200 shadow-md shadow-[#066291]/10 transform hover:-translate-y-0.5"
            >
              Browse Catalog <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#service-finder"
              className="bg-sky-50/60 hover:bg-sky-50 border border-sky-100 text-[#066291] px-6 py-3.5 rounded-full font-bold text-sm inline-flex items-center gap-2 transition-all duration-200"
            >
              Find My Service
            </a>
          </div>

        </div>
      </section>

      {/* 2. COMPLETE SERVICE CATALOG */}
      <section id="service-catalog" className="max-w-7xl mx-auto px-6 py-20 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[10px] font-bold tracking-widest text-[#066291] uppercase block">Catalog</span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Complete Services Catalog</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Professional-grade diagnostics, setups, and engineering tailored for homes, schools, offices, and businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              className="group border border-slate-200 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Frame */}
                <div className="w-full h-48 bg-slate-100 mb-6 overflow-hidden rounded-xl border border-slate-100 relative">
                  <img
                    src={svc.imageUrl}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-800 text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">
                      {svc.category}
                    </span>
                  </div>
                </div>

                {/* Category & Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#066291] transition-colors">
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {svc.desc}
                </p>

                {/* Tags List */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {svc.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] bg-slate-50 text-slate-500 font-bold uppercase tracking-wider px-2.5 py-1 rounded border border-slate-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Learn More Action */}
              <div className="pt-4 border-t border-slate-50">
                <Link
                  to={`/services/${svc.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#066291] hover:text-[#044e74] transition-colors"
                >
                  Learn More & Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FIND THE RIGHT SERVICE (SITUATION FINDER) */}
      <section id="service-finder" className="bg-slate-50/50 py-20 border-y border-slate-100 ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] w-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 border border-sky-100">
              <span className="text-[10px] font-bold text-[#066291] uppercase tracking-wider">Service Finder</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">What's Your Current Situation?</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Skip the technical jargon. Select your current issue from the options below, and we'll point you to the service you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customerSituations.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-800 leading-snug">
                    "{item.situation}"
                  </h3>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-50 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Recommended Service:</span>
                  <Link
                    to={`/services/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#066291] hover:underline"
                  >
                    {item.recommendation} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GENERAL SERVICE FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-20 space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 border border-sky-100">
            <span className="text-[10px] font-bold text-[#066291] uppercase tracking-wider">Help & FAQ</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">General Services FAQ</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Have questions about repair timelines, site visits, or diagnostic estimates? Find answers below.
          </p>
        </div>

        <div className="space-y-4">
          {generalFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-sm md:text-base text-slate-900 hover:text-[#066291] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <QuestionIcon className="w-5 h-5 text-[#066291] shrink-0" />
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
      </section>

      {/* 5. FINAL CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-[#0f172a] rounded-2xl p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">

          <div className="relative z-10 space-y-6 max-w-xl text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Still Unsure Which Service You Need?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Describe your device's symptoms or setup requirements, and our tech support coordinators will guide you to the right solution.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/contact"
                className="bg-[#066291] hover:bg-[#044e74] text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm shadow-[#066291]/15"
              >
                Talk to an Expert
              </Link>
              <a
                href="tel:+977-123456789"
                className="bg-transparent border border-slate-500 hover:border-slate-300 text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-colors"
              >
                Call Support
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