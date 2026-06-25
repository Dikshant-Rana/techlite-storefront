// ServiceDetail.tsx
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Phone, Calendar } from 'lucide-react';
import { servicesData } from '../data/servicesData'; // Adjust import path as needed

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the specific service based on the URL slug
  const service = servicesData.find(s => s.slug === slug);

  // Fallback if the URL doesn't match any service
  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-6 px-6">
        <h1 className="text-4xl font-bold text-slate-900">Service Not Found</h1>
        <p className="text-slate-600">We couldn't find the service you're looking for.</p>
        <Link to="/" className="text-blue-600 font-medium hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="font-sans text-slate-900 pb-24">
      
      {/* Dynamic Header / Hero */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center bg-slate-900">
        <img 
          src={service.imageUrl} 
          alt={service.title} 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-medium mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-900/50 px-3 py-1.5 rounded border border-blue-500/30">
            {service.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tight max-w-3xl">
            {service.title}
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 mt-16 grid lg:grid-cols-3 gap-16">
        
        {/* Left Column: Description & Features */}
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Service Overview</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              {service.longDesc}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-6">What's Included</h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: CTA / Booking Sidebar */}
        <div className="space-y-6">
          <div className="bg-slate-900 rounded-2xl p-8 shadow-xl text-center space-y-6 sticky top-24">
            <h3 className="text-xl font-bold text-white">Need this service?</h3>
            <p className="text-slate-300 text-sm">
              Contact our technical team today to get a quote or schedule an appointment.
            </p>
            
            <div className="space-y-3">
              <Link to="/contact" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                <Calendar className="w-4 h-4" /> Schedule Assessment
              </Link>
              <a href="tel:+1234567890" className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors backdrop-blur-sm">
                <Phone className="w-4 h-4" /> Call Support
              </a>
            </div>
            
            <p className="text-xs text-slate-400 mt-4">
              Available Monday - Friday, 9am - 6pm
            </p>
          </div>
        </div>
        
      </section>
    </div>
  )}