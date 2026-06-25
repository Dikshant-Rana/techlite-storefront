import {
  Target,
  Eye,
  Heart,
  CheckCircle2,
  ShieldCheck,
  Wrench,
  MessageSquare,
  Package,
  Globe,
  Clock,
  CheckCircle,
  Headphones

} from 'lucide-react';
import {
  FaLinkedin
} from "react-icons/fa";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageAlt: string;
  experience?: string;
  tags: string[];
}

export default function About() {
  const team: TeamMember[] = [
    {
      name: "Sushil Karki",
      role: "Head Technician",
      experience: "8+ Years",
      description: "8+ years of expertise in network setup, wiring, CCTV installation, advanced computer troubleshooting, and system diagnostics. Oversees all technical operations.",
      imageAlt: "Sushil Karki - Head Technician",
      tags: ["Router Configuration", "Network Infrastructure", "CCTV Systems", "Technical Supervision"]
    },
    {
      name: "Bibek Rai",
      role: "Senior Technician",
      experience: "5+ Years",
      description: "Skilled in network cabling, CCTV camera setups, computer troubleshooting, and providing dependable technical support for homes and businesses.",
      imageAlt: "Bibek Rai - Technician",
      tags: ["Laptop Repair", "Desktop Repair", "Hardware Upgrades", "Technical Support"]
    },
    {
      name: "Sajan Rai",
      role: "Senior Technician",
      experience: "4+ Years",
      description: "Specializes in network wiring, CCTV installations, hardware diagnostics, and regular system maintenance to keep client operations running smoothly.",
      imageAlt: "Sajan Rai - Technician",
      tags: ["Laptop Repair", "Desktop Repair", "Hardware Upgrades", "Operating Systems"]
    },
    {
      name: "Ashish Subedi",
      role: "Printer Repair Specialist",
      experience: "5+ Years",
      description: "Printer repair specialist handling diagnostics, servicing, maintenance, and complex repairs for inkjet, laser, and multifunction printers.",
      imageAlt: "Ashish Subedi - Printer Repair Technician",
      tags: ["Laser Printers", "Inkjet Servicing", "Diagnostics", "Maintenance Support"]
    },
    {
      name: "Paurakh Subedi",
      role: "Printer Repair Technician",
      experience: "3+ Years",
      description: "Dedicated to printer troubleshooting, routine maintenance, and repair solutions across various mainstream printer brands and models.",
      imageAlt: "Paurakh Subedi - Printer Repair Technician",
      tags: ["Hardware Diagnostics", "Brand Maintenance", "Troubleshooting"]
    },
    {
      name: "Rupak Rai",
      role: "Computer Service Technician",
      experience: "4+ Years",
      description: "Expert in desktop and laptop repairs, operating system installations, hardware upgrades (RAM/SSD), data recovery, and performance optimization.",
      imageAlt: "Rupak Rai - Computer Service Technician",
      tags: ["OS Installation", "Data Recovery", "RAM/SSD Upgrades", "Performance Tuning"]
    },
    {
      name: "Manik Rai",
      role: "Head Accountant",
      description: "Manages financial operations, budgeting, financial reporting, and keeps our organization’s business accounts organized and precise.",
      imageAlt: "Manik Rai - Head Accountant",
      tags: ["Financial Operations", "Budgeting", "Corporate Accounting"]
    },
    {
      name: "Kushal Gautam",
      role: "Assistant Accountant",
      description: "Supports daily financial tracking, transaction processing, reporting, and smooth administrative financial operations.",
      imageAlt: "Kushal Gautam - Assistant Accountant",
      tags: ["Transaction Tracking", "Reporting", "Financial Admin"]
    }
  ];

  return (
    <div className="font-sans text-slate-900 pb-12 space-y-24">

      {/* 1. BUSINESS OVERVIEW & TIME-LINE TRAIN LINKED */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-8">

        {/* LEFT COMPONENT COLUMN: IMAGE CAPTURED HOOD */}
        <div className="lg:col-span-5 w-full sticky top-24">
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
              alt="Techlite Service Center Lab"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply" />

            <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-lg text-left">
              <h3 className="text-base font-bold text-white mb-0.5">Our Service Center</h3>
              <p className="text-xs text-sky-200 font-medium">Kathmandu, Nepal — Open 6 days a week</p>
            </div>
          </div>
        </div>

        {/* RIGHT COMPONENT COLUMN: TIMELINE TRAIN PIPELINES */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 border border-sky-100">
            <span className="text-[10px] font-bold text-[#066291] uppercase tracking-wider">Our Story</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Our Journey
          </h1>

          <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">
            Techlite Group was founded with a simple mission: provide honest, expert technology support at a fair price.
            What started as a small repair shop has grown into a trusted partner for homes, businesses, schools, and
            organizations across Nepal — built not through aggressive marketing, but through consistent results and
            word-of-mouth trust.
          </p>

          <div className="w-full relative border-l-2 border-slate-100 pl-6 ml-2 space-y-6 pt-2">
            {[
              { year: "2018", title: "Company Founded", desc: "Started with a commitment to honest, quality tech service in Kathmandu with a core promise to put customers first." },
              { year: "2019", title: "Expanded Repair Services", desc: "Grew our laptop and desktop repair capacity with more specialized tools and technical experts." },
              { year: "2021", title: "Introduced Networking Solutions", desc: "Launched structured cabling, router configuration, and corporate network infrastructure installations." },
              { year: "2022", title: "Added CCTV Installation Services", desc: "Extended our product line to smart surveillance layouts, covering multi-floor structures safely." },
              { year: "2024", title: "Expanded Business Technology Support", desc: "Scaled to serve larger corporate client networks with personalized tech support packages and AMC plans." },
              { year: "2026", title: "Trusted Technology Partner Across Nepal", desc: "Proud to handle everything from complex smart surveillance setups to corporate office tech infrastructure seamlessly." }
            ].map((milestone, idx) => (
              <div key={idx} className="relative text-left space-y-1">
                <span className="absolute -left-[31px] top-1 bg-white border-2 border-[#066291] w-3.5 h-3.5 rounded-full z-10" />
                <div className="flex items-center gap-2">
                  <span className="bg-sky-50 text-[#066291] text-[10px] font-black px-2 py-0.5 rounded-md border border-sky-100/60">
                    {milestone.year}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900">{milestone.title}</h4>
                </div>
                <p className="text-[11px] text-slate-500 leading-normal font-normal pl-0.5">
                  {milestone.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* 3. REPLICATED MISSION, VISION, VALUES CORE GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 border border-sky-100">
            <span className="text-[10px] font-bold text-[#066291] uppercase tracking-wider">What Drives Us</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Mission, Vision & Values</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            The principles that shape every service we deliver and every relationship we build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-200 space-y-4">
            <div className="w-10 h-10 bg-sky-50 text-[#066291] rounded-xl flex items-center justify-center border border-sky-100/50 shadow-sm">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-slate-900">Mission</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              To provide reliable, affordable, and professional technology solutions that help customers achieve more through technology.
            </p>
          </div>

          <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-200 space-y-4">
            <div className="w-10 h-10 bg-slate-950 text-white rounded-xl flex items-center justify-center shadow-sm">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-slate-900">Vision</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              To become one of Nepal's most trusted and respected technology service providers, known for quality, integrity, and long-term client relationships.
            </p>
          </div>

          <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-200 space-y-4">
            <div className="w-10 h-10 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center border border-teal-100/50 shadow-sm">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-slate-900">Core Values</h3>
            <ul className="space-y-2 text-xs font-semibold text-slate-600">
              {['Integrity', 'Reliability', 'Professionalism', 'Customer Commitment', 'Continuous Improvement'].map((value) => (
                <li key={value} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#066291] shrink-0" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

       {/* 2. REPLICATED FOUNDER'S MESSAGE BLOCKS */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-12 gap-12 items-center">

        {/* TEXT CONTENT */}
        <div className="lg:col-span-8 flex flex-col items-start text-left space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-800 text-xs font-semibold rounded-full border border-amber-100">
            <MessageSquare className="w-3 h-3" /> Founder's Message
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            How We Built Techlite Group
          </h2>

          <div className="space-y-4 text-slate-500 text-sm leading-relaxed max-w-3xl">
            <p>
              "I started this business with a simple goal: to provide clear, honest
              computer repair and networking services that local communities could
              rely on. Back then, I noticed how hard it was for individuals and local
              offices to get fast support without paying confusing, inflated costs.
              We launched with a small desk and a core promise to put the customer
              first."
            </p>

            <p>
              "Managing and maintaining our standards over the years has come down to
              consistency and building the right team. We don’t cut corners on wiring
              layouts, we use genuine parts, and we hire specialized experts for
              printers, laptops, and accounts alike. Today, we're proud to handle
              everything from complex smart surveillance setups to corporate office
              tech infrastructure, while keeping that same personalized approach we
              started with."
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 w-full pt-4 border-t border-slate-100">
            <div className="flex gap-3 items-start">
              <div className="p-2.5 bg-sky-50 rounded-xl shrink-0 text-[#066291]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-slate-900">
                  Genuine Parts Only
                </h4>
                <p className="text-slate-500 text-[11px] leading-normal mt-0.5">
                  We source all devices and replacement parts directly through
                  verified, authorized distributors.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="p-2.5 bg-sky-50 rounded-xl shrink-0 text-[#066291]">
                <Wrench className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-slate-900">
                  Complete Quality Checks
                </h4>
                <p className="text-slate-500 text-[11px] leading-normal mt-0.5">
                  Every repaired system or new computer undergoes stress testing
                  before it leaves our shop.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="lg:col-span-4 max-w-sm mx-auto w-full aspect-[3/4] bg-slate-100 rounded-3xl shadow-sm border border-slate-100 overflow-hidden relative group">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80"
            alt="Managing Director of Techlite Group"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-300"
          />

          <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-slate-100 text-left">
            <p className="font-bold text-sm text-slate-900">Founder Name</p>
            <p className="text-xs text-[#066291] font-semibold mt-0.5">
              Managing Director
            </p>
          </div>
        </div>

      </section>

     
      {/* 2. REPLICATED WHY CHOOSE US SECTION FROM SCREENSHOT */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* LEFT COMPONENT COLUMN: INTERACTIVE VISUAL FRAMES & METRICS */}
        <div className="lg:col-span-5 flex flex-col gap-6 w-full">

          {/* Main Visual Image Frame Wrapper */}
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-100">
            {/* Background Image Layer */}
            <img
              src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=1000&q=80"
              alt="Professional IT Services in Nepal"
              className="w-full h-full object-cover"
            />
            {/* Dark Custom Gradient Overlay Tint */}
            <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />

            {/* Top Right Floating Trust Badge */}
            <div className="absolute top-0 right-0 bg-[#066291] text-white px-5 py-3 rounded-bl-2xl text-center shadow-md">
              <div className="text-xl font-black leading-none">8+</div>
              <div className="text-[10px] font-medium tracking-tight opacity-90 mt-0.5">Years of Trust</div>
            </div>

            {/* Bottom Inner Floating Glassmorphism Identity Card */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-lg text-left">
              <h3 className="text-lg font-bold text-white mb-1">Professional IT Services</h3>
              <p className="text-xs text-sky-200 font-medium">Trusted across homes, businesses & institutions in Nepal</p>
            </div>
          </div>

          {/* Bottom Consolidated Statistics Strip Card */}
          <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-5 grid grid-cols-4 gap-2 text-center divide-x divide-slate-100">
            <div>
              <div className="text-xl font-extrabold text-[#066291]">8+</div>
              <div className="text-[9px] text-slate-500 font-bold leading-tight mt-1">Years<br />Experience</div>
            </div>
            <div>
              <div className="text-xl font-extrabold text-slate-900">5000+</div>
              <div className="text-[9px] text-slate-500 font-bold leading-tight mt-1">Devices<br />Serviced</div>
            </div>
            <div>
              <div className="text-xl font-extrabold text-slate-900">100+</div>
              <div className="text-[9px] text-slate-500 font-bold leading-tight mt-1">CCTV<br />Installations</div>
            </div>
            <div>
              <div className="text-xl font-extrabold text-teal-600">98%</div>
              <div className="text-[9px] text-slate-500 font-bold leading-tight mt-1">Customer<br />Satisfaction</div>
            </div>
          </div>

        </div>

        {/* RIGHT COMPONENT COLUMN: VALUE PROP ENGAGEMENT BLOCKS */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">

          {/* Section Indicator Badge Pill */}
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-sky-50 border border-sky-100">
            <span className="text-[11px] font-bold text-[#066291] tracking-wide">Why Techlite Group</span>
          </div>

          {/* Primary Section Typography Header */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Why Businesses and Customers <br />Choose Us
          </h2>

          {/* Descriptive Content Linkage Paragraph */}
          <p className="text-slate-500 text-sm md:text-base font-normal leading-relaxed max-w-2xl">
            We combine technical expertise with genuine care for our customers. Every
            job we take is treated as a long-term relationship, not a one-time
            transaction.
          </p>

          {/* Feature Grid Deck Wrapper (As seen in Screenshot 2026-06-25 081653.jpg) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full pt-4">

            {/* Feature Node 1 */}
            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 flex gap-4 items-start">
              <div className="p-2.5 bg-sky-50 rounded-xl shrink-0">
                <Wrench className="w-5 h-5 text-[#066291]" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-900">Experienced Technicians</h4>
                <p className="text-[11px] text-slate-500 leading-normal font-normal">Our team brings years of hands-on expertise across all technology domains.</p>
              </div>
            </div>

            {/* Feature Node 2 */}
            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 flex gap-4 items-start">
              <div className="p-2.5 bg-sky-50 rounded-xl shrink-0">
                <Package className="w-5 h-5 text-[#066291]" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-900">Genuine Components</h4>
                <p className="text-[11px] text-slate-500 leading-normal font-normal">We use only authentic, certified parts to ensure longevity and reliability.</p>
              </div>
            </div>

            {/* Feature Node 3 */}
            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 flex gap-4 items-start">
              <div className="p-2.5 bg-sky-50 rounded-xl shrink-0">
                <Clock className="w-5 h-5 text-[#066291]" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-900">Fast Turnaround Time</h4>
                <p className="text-[11px] text-slate-500 leading-normal font-normal">Most repairs completed same-day or next-day with priority service options.</p>
              </div>
            </div>

            {/* Feature Node 4 */}
            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 flex gap-4 items-start">
              <div className="p-2.5 bg-sky-50 rounded-xl shrink-0">
                <CheckCircle className="w-5 h-5 text-[#066291]" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-900">Professional Installation</h4>
                <p className="text-[11px] text-slate-500 leading-normal font-normal">Neat, compliant installations with cable management and proper documentation.</p>
              </div>
            </div>

            {/* Feature Node 5 */}
            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 flex gap-4 items-start">
              <div className="p-2.5 bg-sky-50 rounded-xl shrink-0">
                <Headphones className="w-5 h-5 text-[#066291]" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-900">Reliable Technical Support</h4>
                <p className="text-[11px] text-slate-500 leading-normal font-normal">Responsive support via phone, email, and on-site visits across Nepal.</p>
              </div>
            </div>

            {/* Feature Node 6 */}
            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 flex gap-4 items-start">
              <div className="p-2.5 bg-sky-50 rounded-xl shrink-0">
                <Heart className="w-5 h-5 text-[#066291]" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-900">Customer Satisfaction Focus</h4>
                <p className="text-[11px] text-slate-500 leading-normal font-normal">We don't close a job until you're completely satisfied with the results.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. REPLICATED PROVEN TRACK RECORD METRICS DECK STRIP */}
      <section className="bg-slate-950 py-16 ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] w-screen text-center text-white border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-slate-900 border border-slate-800">
              <span className="text-[9px] font-black tracking-widest text-[#066291] uppercase">Proven Track Record</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight">Experience You Can Trust</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-4 max-w-5xl mx-auto items-center pt-4">
            {[
              { total: "8+", context: "Years Experience", color: "text-[#066291]" },
              { total: "5000+", context: "Devices Serviced", color: "text-white" },
              { total: "100+", context: "CCTV Installations", color: "text-white" },
              { total: "300+", context: "Networking Projects", color: "text-white" },
              { total: "98%", context: "Customer Satisfaction", color: "text-teal-400" }
            ].map((stat, sIdx) => (
              <div key={sIdx} className="space-y-1">
                <div className={`text-3xl md:text-4xl font-black ${stat.color} tracking-tight`}>
                  {stat.total}
                </div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  {stat.context}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 5. MEET OUR TEAM SECTION MATRIX */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 border border-sky-100">
            <span className="text-[10px] font-bold text-[#066291] uppercase tracking-wider">Expert Support</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Meet Our Team</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            The skilled technicians and financial experts who keep your technology reliable and your operations organized.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between text-left group">
              <div>
                <div className="relative aspect-square bg-slate-50 overflow-hidden border-b border-slate-100">
                  <img
                    src={idx % 2 === 0 ? "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"}
                    alt={member.imageAlt}
                    className="w-full h-full object-cover object-top group-hover:scale-102 transition duration-200"
                  />
                  {member.experience && (
                    <div className="absolute top-4 right-4 bg-teal-600 text-white font-mono font-bold text-[9px] px-2.5 py-1 rounded-md shadow-sm">
                      {member.experience}
                    </div>
                  )}
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-0.5 group-hover:text-[#066291] transition-colors">{member.name}</h3>
                    <p className="text-[11px] font-semibold text-[#066291] uppercase tracking-wider">{member.role}</p>
                  </div>
                  <p className="text-slate-500 text-[11px] leading-relaxed font-normal">
                    {member.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-slate-50 flex flex-col gap-3">
                <div className="flex flex-wrap gap-1">
                  {member.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[9px] bg-slate-50 text-slate-600 font-medium px-2 py-0.5 rounded border border-slate-100">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-slate-400 pt-1">
                  <a href="#" className="hover:text-[#066291] transition-colors"><Globe className="w-3.5 h-3.5" /></a>
                  <a href="#" className="hover:text-[#066291] transition-colors"><FaLinkedin className="w-3.5 h-3.5" /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}