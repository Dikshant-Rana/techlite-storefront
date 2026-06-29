import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Phone,
  Calendar,
  AlertCircle,
  HelpCircle,
  Clock,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Settings,
  MapPin,
  Activity
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Find current service
  const service = servicesData.find(s => s.slug === slug);

  // Fallback if service not found
  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-6 px-6">
        <h1 className="text-4xl font-bold text-slate-900">Service Not Found</h1>
        <p className="text-slate-600">We couldn't find the service you're looking for.</p>
        <Link to="/" className="text-[#066291] font-medium hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Return to Home
        </Link>
      </div>
    );
  }

  // Get related services (excluding current one)
  const relatedServices = servicesData
    .filter(s => s.slug !== slug)
    .slice(0, 3);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="font-sans text-slate-900 bg-white overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative w-screen pt-28 pb-16 flex items-center ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] bg-white bg-[size:40px_40px] bg-[linear-gradient(to_right,rgba(226,232,240,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(226,232,240,0.4)_1px,transparent_1px)] border-b border-slate-100">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none animate-pulse duration-[6000ms]" />
        <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-slate-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left ">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-[#066291] transition-colors text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to home
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 mb-6">
              <span className="text-[#066291] text-xs">★</span>
              <span className="text-xs font-semibold text-slate-700 tracking-wide uppercase">
                {service.category}
              </span>
            </div>


            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] max-w-2xl">
              {service.title}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mb-8">
              {service.desc}
            </p>

            <div className="flex flex-wrap gap-2.5 w-full pb-6 border-b border-slate-100 mb-6">
              {service.tags.map((tag, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 bg-white border border-slate-200/80 px-4 py-2 rounded-full shadow-sm"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#066291] shrink-0" />
                  <span className="text-xs font-semibold text-slate-700">{tag}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#booking-cta"
                className="bg-[#066291] hover:bg-[#044e74] text-white px-6 py-3.5 rounded-full font-bold text-sm inline-flex items-center gap-2 transition-all duration-200 shadow-md shadow-[#066291]/10 transform hover:-translate-y-0.5"
              >
                Request Service <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+977-123456789"
                className="bg-sky-50/60 hover:bg-sky-50 border border-sky-100 text-[#066291] px-6 py-3.5 rounded-full font-bold text-sm inline-flex items-center gap-2 transition-all duration-200"
              >
                <Phone className="w-4 h-4" /> Call Technician
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center mt-12 lg:mt-0 order-1 lg:order-2">
            <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-100 transform hover:scale-[1.02] transition-transform duration-300">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Float overlay status widget */}
            <div className="absolute -left-4 bottom-8 bg-white border border-slate-100 p-3 rounded-xl shadow-lg flex items-center gap-3 w-48 z-20 [animation:float_4s_ease-in-out_infinite]">
              <div className="w-7 h-7 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                <Activity className="w-4 h-4 text-green-500 animate-pulse" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-800">Support Active</div>
                <div className="text-[9px] text-slate-400 font-medium">Certified Technicians</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SERVICE OVERVIEW */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-8 space-y-6">
          <span className="text-[10px] font-bold tracking-widest text-[#066291] uppercase block">Overview</span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">About the Service</h2>

          <div className="text-slate-600 text-base leading-relaxed space-y-6">
            {service.longDesc.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 sticky top-28 bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl p-6 text-white space-y-6">
          <div className="flex gap-1.5 mb-2">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full" />
            <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full" />
          </div>

          <h3 className="text-lg font-bold">Quick Technical Support</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            Need diagnostic inspection or immediate maintenance help? Reach out and we will dispatch a qualified technician.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <Clock className="w-4 h-4 text-[#066291] shrink-0" />
              <span>Available 9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-[#066291] shrink-0" />
              <span>Kathmandu, Lalitpur, Bhaktapur</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#066291] shrink-0" />
              <span>All repairs include service warranty</span>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 space-y-3">
            <a
              href="#booking-cta"
              className="w-full bg-[#066291] hover:bg-[#044e74] text-white py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <Calendar className="w-4 h-4" /> Book Appointment
            </a>
            <a
              href="tel:+977-123456789"
              className="w-full bg-transparent hover:bg-white/5 border border-slate-700 text-white py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-slate-400" /> Connect Instantly
            </a>
          </div>
        </div>
      </section>

      {/* 3. COMMON PROBLEMS WE SOLVE */}
      <section className="bg-slate-50/50 py-20 border-y border-slate-100 ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] w-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 border border-red-100">
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider">Troubleshooting</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Is Your Device Having These Issues?</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              If you are facing any of these common problems, our technical team is ready to step in and fix them.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.problems.map((problem, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-500 shrink-0">
                  <AlertCircle className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-slate-700 leading-snug pt-1">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES INCLUDED */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 border border-sky-100">
            <span className="text-[10px] font-bold text-[#066291] uppercase tracking-wider">Detailed Scope</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">What Exactly We Do</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Our comprehensive service checklist covers all aspects of inspection, config setup, and component tuning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-sm hover:border-[#066291] transition-all duration-200 flex gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-[#066291] shrink-0">
                <Settings className="w-4.5 h-4.5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-900">{item}</h3>
                <p className="text-xs text-slate-500 font-medium">Included standard support option</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY CHOOSE US & FEATURES */}
      <section className="bg-slate-50/50 py-20 border-y border-slate-100 ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] w-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] font-bold tracking-widest text-[#066291] uppercase block">Why Choose Us</span>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Benefits of Partnering With Us</h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                We combine industry-certified components, experienced technicians, and prompt local support in Nepal.
              </p>
            </div>

            <div className="space-y-4">
              {service.whyChooseUs.map((reason, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#066291]/10 flex items-center justify-center text-[#066291] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] font-bold tracking-widest text-[#066291] uppercase block">Features</span>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Key Features & Guarantees</h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Every technical setup is run under strict quality standards to ensure performance stability.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((feature, idx) => (
                <div key={idx} className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm flex flex-col justify-between h-28">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-[#066291]">
                    <ShieldCheck className="w-4.5 h-4.5" />
                  </div>
                  <p className="text-xs font-bold text-slate-700 leading-snug">{feature}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. OUR SERVICE PROCESS */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 border border-sky-100">
            <span className="text-[10px] font-bold text-[#066291] uppercase tracking-wider">How We Work</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Our Service Process</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            A clear, transparent process so you know exactly what to expect — every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6 relative">
          {service.process.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-4 group relative">
              <div className="w-14 h-14 rounded-full border-2 border-sky-100 bg-white flex items-center justify-center text-[#066291] shadow-sm relative group-hover:border-[#066291] transition-colors duration-300">
                <span className="text-sm font-black">{idx + 1}</span>
              </div>
              <div className="space-y-1.5 px-2">
                <h3 className="text-xs font-bold text-slate-900">Step {idx + 1}</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed font-normal">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="bg-slate-50/50 py-20 border-y border-slate-100 ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] w-screen">
        <div className="max-w-3xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 border border-sky-100">
              <span className="text-[10px] font-bold text-[#066291] uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Find quick answers to common questions about this service.
            </p>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => {
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

      {/* 8. RELATED SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[10px] font-bold text-[#066291] uppercase tracking-widest block">
            More Options
          </span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Other Services We Offer</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            We provide full-spectrum technology diagnostics, setups, and servicing options.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {relatedServices.map((svc) => (
            <div key={svc.id} className="border border-slate-200 bg-white p-6 rounded shadow-sm hover:shadow-md transition flex flex-col">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{svc.category}</span>
              <h3 className="text-lg font-semibold text-slate-900 mt-1 mb-4">{svc.title}</h3>

              <div className="w-full h-44 bg-slate-100 mb-4 overflow-hidden border border-slate-100">
                <img src={svc.imageUrl} alt={svc.title} className="w-full h-full object-cover" />
              </div>

              <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                {svc.desc}
              </p>

              <div className="mt-6">
                <Link
                  to={`/services/${svc.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#066291] hover:text-[#044e74] transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FINAL CALL TO ACTION */}
      <section id="booking-cta" className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-[#0f172a] rounded-2xl p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">

          <div className="relative z-10 space-y-6 max-w-xl text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Ready to Book Your Technical Assessment?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Our expert technicians are ready to service your system or install networks and CCTV setups. Experience the Techlite standard of precision.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/contact"
                className="bg-[#066291] hover:bg-[#044e74] text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm shadow-[#066291]/15"
              >
                Contact Us Now
              </Link>
              <a
                href="tel:+977-123456789"
                className="bg-transparent border border-slate-500 hover:border-slate-300 text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-colors"
              >
                Call Office
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