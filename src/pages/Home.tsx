import { ArrowRight, Download, ShieldCheck, Cpu, PhoneCall, MapPin, Quote, ChevronLeft, ChevronRight, Search, FileText, LinkIcon, CheckCircle2, Globe, CheckCircle, Wrench, Phone, Award, Users, Zap, Activity, Tv, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';
// 1. IMPORT YOUR DATA HERE
import { servicesData } from '../data/servicesData';
import Footer from '../components/Footer.tsx'



export default function Home() {

  // 3. TOOLS ARRAY (From Screenshot Design)
  const tools = [
    {
      icon: <Download className="w-5 h-5 text-[#066291]" />,
      title: "Firmware Updates",
      desc: "Critical security patches and feature updates for motherboards and networking gear."
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#066291]" />,
      title: "Hardware Drivers",
      desc: "Certified initial release drivers for optimal compatibility and maximum system stability."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#066291]" />,
      title: "Diagnostic Suite",
      desc: "Proprietary utilities to stress-test components and identify potential failure points early."
    }
  ];

  return (
    <div className="font-sans text-slate-900 space-y-24">

      {/* RECREATED HERO SECTION: HIGH-PRODUCTION GRID & DASHBOARD HUD */}
      <section className="relative w-screen min-h-screen bg-white overflow-hidden pt-28 pb-16 flex items-center ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] bg-[size:40px_40px] bg-[linear-gradient(to_right,rgba(226,232,240,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(226,232,240,0.4)_1px,transparent_1px)]">

        {/* Decorative Ambient Soft Radial Glow Vectors */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none animate-pulse duration-[6000ms]" />
        <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-slate-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

          {/* LEFT SUB-ROW: ENGAGING VALUE PROP ENGINE */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Context Badge Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 mb-6 transition-colors duration-200">
              <span className="text-[#066291] animate-bounce text-xs">★</span>
              <span className="text-xs font-semibold text-slate-700 tracking-wide">
                Serving Homes, Businesses, Schools & Organizations
              </span>
            </div>

            {/* Typography Header Structural Stack */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Your Trusted <br />
              <span className="relative inline-block text-[#066291]">
                Technology
                <span className="absolute left-0 bottom-1 w-full h-[3px] bg-sky-200 rounded-full" />
              </span> <br />
              Partner
            </h1>

            {/* Paragraph Block */}
            <p className="text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mb-10">
              Professional computer sales, repair services, networking solutions,
              CCTV installations, hardware upgrades, data recovery, and
              complete technical support.
            </p>

            {/* CTA Interaction Control Nodes */}
            <div className="flex flex-wrap items-center gap-4 w-full mb-16">
              <Link
                to="/services"
                className="bg-[#066291] hover:bg-[#044e74] text-white px-6 py-3.5 rounded-xl font-semibold text-sm inline-flex items-center gap-2 transition-all duration-200 shadow-md shadow-[#066291]/10 hover:shadow-lg hover:shadow-[#066291]/20 transform hover:-translate-y-0.5"
              >
                Explore Services <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-6 py-3.5 rounded-xl font-semibold text-sm inline-flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-slate-400" /> Contact Us
              </Link>
            </div>

            {/* Lower Quality Pillars Segment Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              {[
                { icon: <Award className="w-5 h-5 text-[#066291]" />, text: '8+ Years Experience' },
                { icon: <Users className="w-5 h-5 text-[#066291]" />, text: 'Skilled Technical Team' },
                { icon: <Zap className="w-5 h-5 text-[#066291]" />, text: 'Fast Service' },
                { icon: <ShieldCheck className="w-5 h-5 text-[#066291]" />, text: 'Genuine Products' }
              ].map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-100 rounded-2xl p-4 flex flex-col items-center text-center justify-center shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className="mb-3 p-2 bg-slate-50 rounded-xl">
                    {pillar.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    {pillar.text}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT SUB-ROW: FLOATING HARNESS LAYERED HUDS */}
          <div className="lg:col-span-5 relative w-full min-h-[450px] flex items-center justify-center mt-12 lg:mt-0">

            {/* Primary Console System Status Server Engine Container */}
            <div className="w-full max-w-[360px] bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl p-6 transform hover:scale-[1.02] transition-transform duration-300 relative z-20">
              <div className="flex gap-1.5 mb-6">
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full" />
                <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full" />
              </div>

              {/* Telemetry Graph Visual Layout */}
              <div className="flex items-end justify-between h-24 gap-3 px-2 mb-6 border-b border-slate-800 pb-4">
                <div className="w-full bg-sky-950 rounded-t h-[40%]" />
                <div className="w-full bg-[#066291] rounded-t h-[75%] animate-pulse" />
                <div className="w-full bg-sky-950 rounded-t h-[55%]" />
                <div className="w-full bg-[#066291] rounded-t h-[90%]" />
                <div className="w-full bg-sky-950 rounded-t h-[30%]" />
              </div>

              {/* Matrix Core Footprints */}
              <div className="grid grid-cols-3 gap-2 pt-2 text-center">
                <div>
                  <div className="text-lg font-bold text-white">5000+</div>
                  <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Devices</div>
                </div>
                <div className="border-x border-slate-800">
                  <div className="text-lg font-bold text-[#066291]">98%</div>
                  <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Satisfied</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-white">8+</div>
                  <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Years</div>
                </div>
              </div>
            </div>

            {/* WIDGET NODES 1: SECURITY FEED HARDWARE LINKAGE */}
            <div className="absolute -left-4 top-12 sm:left-4 bg-white border border-slate-100 p-3 rounded-xl shadow-lg flex flex-col w-44 z-30 [animation:float_4s_ease-in-out_infinite]">
              <div className="flex items-center gap-2 mb-2">
                <Tv className="w-3.5 h-3.5 text-[#066291]" />
                <span className="text-[11px] font-bold text-slate-800">CCTV Live</span>
              </div>
              <div className="bg-slate-950 rounded-lg aspect-video w-full flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-2 left-2 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
                  <span className="text-[8px] text-slate-400 font-mono">CAM 01 REC</span>
                </div>
                <div className="w-8 h-4 border border-sky-500/30 rounded flex items-center justify-center bg-sky-950/20">
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-pulse" />
                </div>
              </div>
            </div>

            {/* WIDGET NODES 2: ENVIRONMENT TELEMETRY FEED */}
            <div className="absolute right-4 top-0 bg-white border border-slate-100 p-3.5 rounded-xl shadow-lg flex items-center gap-3 w-48 z-30 [animation:float_4s_ease-in-out_infinite_1.5s]">
              <div className="w-7 h-7 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                <Activity className="w-4 h-4 text-green-500" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800 mb-0.5">System Online</div>
                <div className="text-[10px] text-slate-400 font-medium">All services active</div>
              </div>
            </div>

            {/* WIDGET NODES 3: BACKHAUL DEPLOYMENT METRICS LINKAGE */}
            <div className="absolute -right-4 bottom-20 sm:right-0 bg-white border border-slate-100 p-3 rounded-xl shadow-lg flex flex-col w-36 z-30 [animation:float_4s_ease-in-out_infinite_3s]">
              <div className="flex items-center gap-2 mb-2">
                <Wifi className="w-3.5 h-3.5 text-[#066291]" />
                <span className="text-[11px] font-bold text-slate-800">Network</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 items-end h-4">
                  <span className="w-1 h-2 bg-[#066291] rounded-full" />
                  <span className="w-1 h-3 bg-[#066291] rounded-full" />
                  <span className="w-1 h-4 bg-[#066291] rounded-full" />
                  <span className="w-1 h-2.5 bg-slate-200 rounded-full" />
                </div>
                <span className="text-xs font-black text-[#066291]">98%</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. WHO WE ARE SECTION */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Image Box */}
        <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-100 h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=1000&q=80"
            alt="Hardware Precision"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <span className="text-[10px] font-bold tracking-widest text-[#066291] uppercase">Who We Are</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Reliable Technology Solutions</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            At Techlite Group, we help customers with computer repairs, software installation, system upgrades, and technical support. Whether you need a home computer fixed or help setting up office systems, our experienced team is ready to assist.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-[#066291] hover:text-[#044e74] transition-colors pt-2">
            Learn More About Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        {/* Header Layout */}
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 border-b border-transparent pb-2">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#066291]">What We Offer</span>
            <h2 className="text-3xl font-bold tracking-tight mt-1">Expert Utility & Setup</h2>
          </div>
        </div>

        {/* Card Grid Layout */}
        <div className="grid md:grid-cols-3 gap-6">
          {servicesData.map((svc) => (
            <div key={svc.id} className="border border-slate-200 bg-white p-6 rounded shadow-sm hover:shadow-md transition flex flex-col">

              {/* Category & Title */}
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{svc.category}</span>
              <h3 className="text-lg font-semibold text-slate-900 mt-1 mb-4">{svc.title}</h3>

              {/* Image Frame */}
              <div className="w-full h-44 bg-slate-100 mb-4 overflow-hidden border border-slate-100">
                <img src={svc.imageUrl} alt={svc.title} className="w-full h-full object-cover" />
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                {svc.desc}
              </p>

              {/* Tags + Learn More Button */}
              <div className="mt-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {svc.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-slate-100 text-slate-500 text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

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



      {/* 5. REPLICATED TECHNOLOGY PRODUCTS GRID FROM SCREENSHOT */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 border border-sky-100">
            <span className="text-[10px] font-bold text-[#066291] uppercase tracking-wider">Shop With Us</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Technology Products</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Genuine products from leading global brands, sourced and sold with full warranty support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Laptops", desc: "HP, Dell, Lenovo, Asus, Acer", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80" },
            { title: "Desktop Computers", desc: "Custom builds & branded PCs", img: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=600&q=80" },
            { title: "Printers", desc: "Canon, Epson, HP printers", img: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=600&q=80" },
            { title: "CCTV Systems", desc: "IP cameras & NVR systems", img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80" },
            { title: "Networking Equipment", desc: "Routers, switches, cables", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" },
            { title: "Computer Accessories", desc: "Keyboards, mice, monitors", img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80" }
          ].map((prod, idx) => (
            <div key={idx} className="relative group aspect-[4/3] rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
              <img src={prod.img} alt={prod.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-left text-white">
                <h4 className="text-base font-bold tracking-tight mb-0.5">{prod.title}</h4>
                <p className="text-[11px] text-slate-300 font-normal">{prod.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link to="/products" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-[#066291] text-white font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all duration-200 shadow-md">
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* NEW SECTION A: REPLICATED HOW WE WORK PIPELINE */}
      <section className="bg-slate-50/50 py-20 border-y border-slate-100 ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] w-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 border border-sky-100">
              <span className="text-[10px] font-bold text-[#066291] uppercase tracking-wider">Simple Process</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">How We Work</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              A clear, transparent process so you know exactly what to expect — every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {[
              { num: "01", icon: <PhoneCall className="w-5 h-5" />, title: "Contact Us", desc: "Reach out by phone, email, or walk into our office. Tell us your issue and we'll schedule a visit or pickup." },
              { num: "02", icon: <Search className="w-5 h-5" />, title: "Device Inspection", desc: "Our technicians perform a thorough diagnostic to identify the root cause of the problem." },
              { num: "03", icon: <FileText className="w-5 h-5" />, title: "Solution & Quotation", desc: "We provide a clear, transparent quote before beginning any repair or installation work." },
              { num: "04", icon: <Wrench className="w-5 h-5" />, title: "Repair or Installation", desc: "Work begins using genuine parts and professional tools. You'll be updated throughout the process." },
              { num: "05", icon: <CheckCircle2 className="w-5 h-5" />, title: "Testing & Delivery", desc: "We rigorously test before handover. Your device is returned working perfectly, with a service warranty." }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-4 group relative">
                <div className="w-14 h-14 rounded-full border-2 border-sky-100 bg-white flex items-center justify-center text-[#066291] shadow-sm relative group-hover:border-[#066291] transition-colors duration-300">
                  {step.icon}
                  <span className="absolute -bottom-1.5 right-0 bg-white border border-slate-100 text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center text-slate-400 shadow-sm">
                    {step.num}
                  </span>
                </div>
                <div className="space-y-1.5 px-2">
                  <h3 className="text-xs font-bold text-slate-900">{step.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-normal">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION B: REPLICATED MEET OUR EXPERTS TEAM MATRIX */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 border border-sky-100">
            <span className="text-[10px] font-bold text-[#066291] uppercase tracking-wider">Our Experts</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Meet Our Experts</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Skilled, certified technicians dedicated to delivering exceptional service and technical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Sushil Karki",
              role: "Head Technician",
              experience: "8+ Years",
              img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
              tags: ["Router Setup", "Network Wiring", "CCTV Installation", "Computer Troubleshooting", "Technical Support"]
            },
            {
              name: "Sajan Rai",
              role: "Technician",
              experience: "5+ Years",
              img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
              tags: ["Network Wiring", "CCTV Installation", "Computer Troubleshooting", "System Maintenance", "Technical Support"]
            },
            {
              name: "Ashish Subedi",
              role: "Printer Repair Technician",
              experience: "4+ Years",
              img: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=400&q=80",
              tags: ["Printer Repair", "Printer Maintenance", "Diagnostics", "Laser Printers", "Inkjet Printers"]
            },
            {
              name: "Paurakh Subedi",
              role: "Printer Repair Technician",
              experience: "4+ Years",
              img: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=400&q=80",
              tags: ["Printer Repair", "Troubleshooting", "Maintenance", "Office Printers", "Technical Support"]
            },
            {
              name: "Rupak Rai",
              role: "Computer Service Technician",
              experience: "5+ Years",
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
              tags: ["Laptop Repair", "Desktop Repair", "Data Recovery", "RAM & SSD Upgrades", "OS Installation"]
            },
            {
              name: "Manik Rai",
              role: "Head Accountant",
              experience: "6+ Years",
              img: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=400&q=80",
              tags: ["Accounting", "Financial Management", "Budget Planning", "Reporting", "Business Operations"]
            },
            {
              name: "Kushal Gautam",
              role: "Assistant Accountant",
              experience: "3+ Years",
              img: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=400&q=80",
              tags: ["Bookkeeping", "Financial Records", "Transaction Management", "Reporting", "Administrative Support"]
            },
            {
              name: "Bibek Rai",
              role: "Technician",
              experience: "5+ Years",
              img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
              tags: ["Network Wiring", "CCTV Installation", "Computer Troubleshooting", "System Maintenance", "Technical Support"]
            }
          ].map((member, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between text-left">
              <div>
                {/* Profile Picture Frame with Experience Badge Overlay */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                  <div className="absolute top-4 right-4 bg-teal-600 text-white font-mono font-bold text-[9px] px-2.5 py-1 rounded-md shadow-sm">
                    {member.experience}
                  </div>
                </div>

                {/* Meta Matrix Descriptions */}
                <div className="p-5 space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-0.5">{member.name}</h3>
                    <p className="text-[11px] font-semibold text-[#066291] uppercase tracking-wider">{member.role}</p>
                  </div>

                  {/* Skills Grid Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {member.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] bg-slate-50 text-slate-600 font-medium px-2.5 py-1 rounded-md border border-slate-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Footnote Anchors */}
              <div className="px-5 pb-5 pt-3 border-t border-slate-50 flex items-center gap-3 text-slate-400">
                <a href="#" className="hover:text-[#066291] transition-colors"><Globe className="w-4 h-4" /></a>
                <a href="#" className="hover:text-[#066291] transition-colors"><LinkIcon className="w-4 h-4" /></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER (Kept unchanged below your new components) */}

      {/* 4. DOWNLOAD CENTER SECTION */}
      <section className="bg-[#f8fafc] py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] font-bold tracking-widest text-[#066291] uppercase">Download Center</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Optimized Tools for Your Hardware</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Access our professional-grade diagnostic software suite and latest driver packages to keep your hardware running at peak performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tools.map((tool, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center flex flex-col items-center space-y-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center mb-2">
                  {tool.icon}
                </div>
                <h3 className="font-bold text-slate-900">{tool.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/downloads" className="inline-block bg-[#066291] hover:bg-[#044e74] text-white font-semibold text-sm px-8 py-3.5 rounded shadow-sm transition-colors">
              Browse All Downloads
            </Link>
          </div>
        </div>
      </section>

      {/* NEW SECTION C: REPLICATED RECENT PROJECTS SHOWCASE MATRIX */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 border border-sky-100">
            <span className="text-[10px] font-bold text-[#066291] uppercase tracking-wider">Our Work</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Recent Projects</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            A snapshot of our recent deployments, installations, and service engagements across Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "School Computer Lab Setup", tag: "Computer Lab Deployment", loc: "Kathmandu, Nepal", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80", tagColor: "bg-indigo-500/20 text-indigo-200" },
            { title: "Office CCTV Installation", tag: "CCTV Installation", loc: "Lalitpur, Nepal", img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80", tagColor: "bg-rose-500/20 text-rose-200" },
            { title: "Corporate Network Infrastructure", tag: "Office Network Setup", loc: "Bhaktapur, Nepal", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80", tagColor: "bg-sky-500/20 text-sky-200" },
            { title: "Router Configuration — 50 Device Office", tag: "Router Configuration", loc: "Kathmandu, Nepal", img: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&w=600&q=80", tagColor: "bg-purple-500/20 text-purple-200" },
            { title: "Bulk Laptop Repair — College", tag: "Laptop Repair", loc: "Pokhara, Nepal", img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80", tagColor: "bg-amber-500/20 text-amber-200" },
            { title: "Annual IT Support — Retail Chain", tag: "Business IT Support", loc: "Kathmandu, Nepal", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80", tagColor: "bg-teal-500/20 text-teal-200" }
          ].map((project, idx) => (
            <div key={idx} className="relative group aspect-[4/3] rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
              <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* Top Left Specific Meta Tag Badge */}
              <div className="absolute top-4 left-4">
                <span className={`text-[9px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-md backdrop-blur-md ${project.tagColor}`}>
                  {project.tag}
                </span>
              </div>

              {/* Bottom Structural Data Strings */}
              <div className="absolute bottom-5 left-5 right-5 text-left text-white space-y-2">
                <h4 className="text-sm font-bold tracking-tight leading-snug">{project.title}</h4>
                <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[10px] text-slate-300 font-medium">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" /> {project.loc}
                  </span>
                  <span className="flex items-center gap-1 text-teal-400 font-bold">
                    <CheckCircle className="w-3 h-3" /> Completed
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEW SECTION D: REPLICATED TESTIMONIAL VIEWPORT CAROUSEL */}
      <section className="bg-slate-50/50 py-20 border-y border-slate-100 ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] w-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 border border-sky-100">
              <span className="text-[10px] font-bold text-[#066291] uppercase tracking-wider">Customer Stories</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">What Our Customers Say</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Real feedback from real clients who trust Techlite Group with their technology needs.
            </p>
          </div>

          {/* Testimonial Card Frame Structure */}
          <div className="max-w-3xl mx-auto flex flex-col items-center space-y-8">
            <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm relative w-full text-left">
              {/* Quote Decorative Markings */}
              <Quote className="absolute top-8 right-8 w-10 h-10 text-sky-100 rotate-180" />

              {/* Star Rating Strip */}
              <div className="flex gap-0.5 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => <span key={i} className="text-lg">★</span>)}
              </div>

              {/* Central Review Paragraph */}
              <p className="text-slate-700 text-sm md:text-base font-normal leading-relaxed mb-8">
                "Techlite Group installed our entire CCTV system across three floors. The work
                was clean, professional, and completed on schedule. Their team is
                knowledgeable and explains everything clearly."
              </p>

              {/* Author Row Profile Vector */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 border border-slate-200">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Rajesh Shrestha" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Rajesh Shrestha</h4>
                  <p className="text-[11px] font-medium text-[#066291]">Shrestha Trading Company</p>
                </div>
              </div>
            </div>

            {/* Slider Control Nodes Block */}
            <div className="flex items-center gap-4">
              <button className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#066291] hover:border-[#066291] transition-all duration-200 shadow-sm">
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Carousel Indicator Dots */}
              <div className="flex items-center gap-2">
                <span className="w-6 h-1.5 rounded-full bg-[#066291]" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              </div>

              <button className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#066291] hover:border-[#066291] transition-all duration-200 shadow-sm">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION E: REPLICATED BRANDS WE WORK WITH STRIP */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 space-y-6 text-center">
        <div>
          <h3 className="text-base font-bold text-slate-900 tracking-tight">Brands We Work With</h3>
          <p className="text-xs text-slate-400 font-medium mt-1">Authorized service and sales partner for the world's leading technology brands.</p>
        </div>

        {/* Corporate Grid Matrix Container Block */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 pt-4">
          {['Dell', 'HP', 'Lenovo', 'Asus', 'Acer', 'Canon', 'Epson', 'TP-Link'].map((brand) => (
            <div key={brand} className="bg-white border border-slate-100 rounded-xl py-4 px-6 flex items-center justify-center shadow-sm font-sans font-black text-sm text-slate-400/80 tracking-wide select-none cursor-default hover:text-[#066291] hover:border-sky-100 transition-colors duration-200">
              {brand}
            </div>
          ))}
        </div>
      </section>


      {/* 6. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-[#0f172a] rounded-2xl p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">

          <div className="relative z-10 space-y-6 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Ready to optimize your hardware stack?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Our technicians are available for emergency diagnostics and scheduled infrastructure deployments. Experience the Techlite standard of precision.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact" className="bg-[#066291] hover:bg-[#044e74] text-white font-semibold text-sm px-6 py-3 rounded transition-colors shadow-sm">
                Request Assessment
              </Link>
              <Link to="/services" className="bg-transparent border border-slate-500 hover:border-slate-300 text-white font-semibold text-sm px-6 py-3 rounded transition-colors">
                Technical Documentation
              </Link>
            </div>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none flex items-center justify-center overflow-hidden">
            <Wrench className="w-96 h-96 text-white rotate-45 transform translate-x-12" />
          </div>
        </div>
      </section>
      <Footer />




    </div>
  );
}