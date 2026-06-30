import { useState, useEffect } from 'react';
import { ArrowRight, Download, Cpu, PhoneCall, Quote, ChevronLeft, ChevronRight, Search, FileText, CheckCircle2, Wrench, Phone, Activity, Tv, Wifi, Camera, Monitor, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
// 1. IMPORT YOUR DATA HERE
import { servicesData } from '../data/servicesData';



//2. Imported service images
import techliteInterior from "../assets/image/techlite_interior.webp";
import Networking from "../assets/image/router1.jpg";
import Laptop from "../assets/image/laptop.jpg";

//3. Imported team images
import sushil from "../assets/image/sushil.jpg";
import sajaan from "../assets/image/sajaan.jpg";
import paurakhi from "../assets/image/paurakh.jpg";
import rupak from "../assets/image/rupak1.jpg";
import kushal from "../assets/image/kushal.jpg";
import manik from "../assets/image/manik.jpg";
import ashish from "../assets/image/ashish.jpg";
import bibek from "../assets/image/bibek.jpg";


// 2. IMPORT BRAND LOGOS
import DellLogo from '../assets/brands/dell.svg';
import HpLogo from '../assets/brands/hp.svg';
import TapoLogo from '../assets/brands/tapo.webp';
import BrotherLogo from '../assets/brands/brother.svg';
import AsusLogo from '../assets/brands/asus.svg';
import AcerLogo from '../assets/brands/acer.svg';
import CanonLogo from '../assets/brands/canon.svg';
import EpsonLogo from '../assets/brands/epson.svg';
import TpLinkLogo from '../assets/brands/tplink.svg';
import Dlink from '../assets/brands/d-link.svg';
import Lblink from '../assets/brands/lb-link.png';
import Alhua from '../assets/brands/alhua.svg';
import Ezviz from '../assets/brands/ezviz.png';


interface BrandLogo {
  name: string;
  glowClass: string;
  logo: string;
  heightClass: string;
}


export default function Home() {

  // 3. DOWNLOAD CATEGORIES (Refactored Teaser Data)
  const downloadCategories = [
    {
      icon: <Camera className="w-5 h-5 text-[#066291] group-hover:text-[#066291] transition-colors duration-300" />,
      title: "CCTV Software",
      desc: "Software for viewing and managing your CCTV cameras."
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#066291] group-hover:text-[#066291] transition-colors duration-300" />,
      title: "Device Drivers",
      desc: "Drivers that help your computer recognize printers, scanners, cameras, and other devices."
    },
    {
      icon: <Wrench className="w-5 h-5 text-[#066291] group-hover:text-[#066291] transition-colors duration-300" />,
      title: "Windows Utilities",
      desc: "Useful tools to maintain, troubleshoot, and improve your Windows computer."
    },
    {
      icon: <Monitor className="w-5 h-5 text-[#066291] group-hover:text-[#066291] transition-colors duration-300" />,
      title: "Popular Software",
      desc: "Download commonly used applications such as AnyDesk, Adobe Photoshop, Google Chrome, VLC Media Player, TeamViewer, WinRAR, and more."
    },
    {
      icon: <Briefcase className="w-5 h-5 text-[#066291] group-hover:text-[#066291] transition-colors duration-300" />,
      title: "Microsoft Office Packages",
      desc: "Microsoft Office applications for work, school, and everyday productivity."
    }
  ];
  const brands: BrandLogo[] = [
    {
      name: 'Dell',
      glowClass: 'group-hover:drop-shadow-[0_0_15px_rgba(0,103,184,0.4)]',
      logo: DellLogo,
      heightClass: 'h-15'
    },
    {
      name: 'HP',
      glowClass: 'group-hover:drop-shadow-[0_0_15px_rgba(0,150,214,0.4)]',
      logo: HpLogo,
      heightClass: 'h-20'
    },
    {
      name: 'Tapo',
      glowClass: 'group-hover:drop-shadow-[0_0_15px_rgba(225,0,15,0.3)]',
      logo: TapoLogo,
      heightClass: 'h-14'
    },
    {
      name: 'Brother',
      glowClass: 'group-hover:drop-shadow-[0_0_15px_rgba(0,103,184,0.4)]',
      logo: BrotherLogo,
      heightClass: 'h-8'
    },
    {
      name: 'ASUS',
      glowClass: 'group-hover:drop-shadow-[0_0_15px_rgba(0,103,184,0.4)]',
      logo: AsusLogo,
      heightClass: 'h-6'
    },
    {
      name: 'Acer',
      glowClass: 'group-hover:drop-shadow-[0_0_15px_rgba(131,184,26,0.4)]',
      logo: AcerLogo,
      heightClass: 'h-6'
    },
    {
      name: 'Canon',
      glowClass: 'group-hover:drop-shadow-[0_0_15px_rgba(204,0,0,0.4)]',
      logo: CanonLogo,
      heightClass: 'h-6'
    },
    {
      name: 'Epson',
      glowClass: 'group-hover:drop-shadow-[0_0_15px_rgba(0,51,153,0.4)]',
      logo: EpsonLogo,
      heightClass: 'h-6'
    },
    {
      name: 'TP-Link',
      glowClass: 'group-hover:drop-shadow-[0_0_15px_rgba(32,181,190,0.4)]',
      logo: TpLinkLogo,
      heightClass: 'h-20'
    },
    {
      name: 'Dlink',
      glowClass: 'group-hover:drop-shadow-[0_0_15px_rgba(0,113,197,0.4)]',
      logo: Dlink,
      heightClass: 'h-8'
    },
    {
      name: 'Lblink',
      glowClass: 'group-hover:drop-shadow-[0_0_15px_rgba(237,28,36,0.4)]',
      logo: Lblink,
      heightClass: 'h-40'
    },
    {
      name: 'Alhua',
      glowClass: 'group-hover:drop-shadow-[0_0_15px_rgba(255,5,5,0.4)]',
      logo: Alhua,
      heightClass: 'h-8'
    },
    {
      name: 'Ezviz',
      glowClass: 'group-hover:drop-shadow-[0_0_15px_rgba(0,176,240,0.4)]',
      logo: Ezviz,
      heightClass: 'h-35'
    }
  ];
  const serviceTags = [
    "Laptop/Cpu Repair & servicing",
    "Hardware Upgrades (SSD,HDD,Ram)",
    "Router setup & wiring",
    "Printer Repair & Maintenance",
    "Data Recovery & Software Services",
    "CCTV installation & servicing",
    "Custom PC Building",
    "Product Sales"
  ];


  const testimonials = [
    {
      quote: "Techlite Group installed our entire CCTV system across three floors. The work was clean, professional, and completed on schedule. Their team is knowledgeable and explains everything clearly.",
      author: "Rajesh Shrestha",
      company: "Shrestha Trading Company",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "We hired Techlite to set up our new corporate network. They handled the structured cabling, router configuration, and firewalls perfectly. Our internet speed and stability have never been better.",
      author: "Sunita Karki",
      company: "Himalayan Tech Solutions",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Their laptop repair service is highly recommended. My computer was running extremely slow, and their technician diagnosed the issue, upgraded the SSD, and cleared malware within a few hours.",
      author: "Anil Shrestha",
      company: "Freelance Designer",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Techlite has been managing our office printer maintenance for over a year. Their response time is exceptional, and they always use genuine parts. Highly professional customer service. The Staff are friedly too.",
      author: "Pooja Gurung",
      company: "Apex Business Hub",
      img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=150&q=80"
    }
  ];

  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonialIdx((prevIdx) => (prevIdx + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevTestimonial = () => {
    setActiveTestimonialIdx((prevIdx) => (prevIdx - 1 + testimonials.length) % testimonials.length);
  };

  const handleNextTestimonial = () => {
    setActiveTestimonialIdx((prevIdx) => (prevIdx + 1) % testimonials.length);
  };

  // Duplicate brands for a seamless marquee effect
  const extendedBrands = [...brands, ...brands, ...brands, ...brands, ...brands];

  return (
    <div className="font-sans text-slate-900">

      <section className="relative w-screen min-h-screen bg-white overflow-hidden pt-28 pb-16 flex items-center ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] bg-[size:40px_40px] bg-[linear-gradient(to_right,rgba(226,232,240,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(226,232,240,0.4)_1px,transparent_1px)] border-b border-slate-200/80">

        {/* Decorative Ambient Soft Radial Glow Vectors */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none animate-pulse duration-[6000ms]" />
        <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-slate-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

          {/* LEFT SUB-ROW: ENGAGING VALUE PROP ENGINE */}
          <div className="lg:col-span-7 flex flex-col items-start text-left ">

            {/* Context Badge Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 mb-6 transition-colors duration-200">
              <span className="text-[#066291] text-xs">★</span>
              <span className="text-xs font-semibold text-slate-700 tracking-wide">
                Serving Homes, Businesses, Schools & Organizations
              </span>
            </div>

            {/* Typography Header Structural Stack */}
            <h1 className="text-3xl sm:text-4.5xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Your Trusted <br />
              <span className="relative inline-block text-[#066291]">
                Technology

              </span> <br />
              Partner
            </h1>

            {/* Paragraph Block */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mb-8">
              Professional computer sales, repair services, networking solutions,
              CCTV installations, hardware upgrades, data recovery, and
              complete technical support.
            </p>

            {/* 1. EXACT THREE-BUTTON CTA CONFIGURATION MATRIX (From Screenshot 2026-06-26 114649.png) */}
            <div className="flex flex-wrap items-center gap-4 w-full mb-10">
              <Link
                to="/services"
                className="bg-[#066291] hover:bg-[#044e74] text-white px-6 py-3.5 rounded-full font-bold text-sm inline-flex items-center gap-2 transition-all duration-200 shadow-md shadow-[#066291]/10 hover:shadow-lg hover:shadow-[#066291]/20 transform hover:-translate-y-0.5"
              >
                Explore Services <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/downloads"
                className="bg-sky-50/60 hover:bg-sky-50 border border-sky-100 text-[#066291] px-6 py-3.5 rounded-full font-bold text-sm inline-flex items-center gap-2 transition-all duration-200 shadow-sm transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-[#066291]" /> Download Portal
              </Link>

              <Link
                to="/contact"
                className="hover:bg-slate-50 text-slate-800 px-5 py-3.5 rounded-full font-bold text-sm inline-flex items-center gap-2 transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-slate-700" /> Contact Us
              </Link>
            </div>

            {/* 2. CORE SERVICES FLEX TAG CLOUD (From Screenshot 2026-06-26 114649.png) */}
            <div className="flex flex-wrap gap-2.5 w-full pb-8 border-b border-slate-100 mb-8">
              {serviceTags.map((tag, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 bg-white border border-slate-200/80 px-4 py-2 rounded-full shadow-sm shadow-slate-100/40 hover:border-slate-300 transition-colors duration-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#066291] shrink-0" />
                  <span className="text-xs font-semibold text-slate-700">{tag}</span>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT SUB-ROW: FLOATING HARNESS LAYERED HUDS */}
          <div className="lg:col-span-5 relative w-full min-h-[450px] flex items-center justify-center mt-12 lg:mt-0 order-1 lg:order-2">

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
                  <div className="text-lg font-bold text-white">15+</div>
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
      <section className="py-16 w-screen ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] overflow-hidden border-b border-slate-200/80 select-none">

        {/* Structural Headers */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center space-y-3 mb-12">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
            Trusted Technology Brands
          </span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Brands We Work With
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mx-auto font-normal">
            We proudly sell, install and support products from industry-leading technology manufacturers.
          </p>
        </div>

        {/* Infinite scrolling slider frame structure */}
        <div className="relative w-full overflow-hidden flex items-center mask-faded-edges">

          {/* Continuous animation loop wrapper */}
          <div className="flex gap-20 items-center whitespace-nowrap animate-marquee-continuous w-max py-4">
            {extendedBrands.map((brand, idx) => (
              <div
                key={idx}
                className="group flex items-center justify-center min-w-[130px] transition-all duration-300 transform hover:scale-105"
              >
                {/* Grayscale filter toggles smoothly to full color upon mouse entry */}
                <div className={`relative z-10 opacity-50 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-300 ${brand.glowClass}`}>
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className={`${brand.heightClass} w-auto object-contain`}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* 2. WHO WE ARE SECTION */}
      <section className="w-screen ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] border-b border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Image Box */}
          <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-100 h-[400px]">
            <img
              src={techliteInterior}
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
              Learn About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="w-screen ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] border-b border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
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
        </div>
      </section>


      {/* 4. DOWNLOAD CENTER SECTION */}
      <section className="bg-slate-50/40 py-20 border-b border-slate-200/80 w-screen ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)]">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] font-bold tracking-widest text-[#066291] uppercase">Download Center</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Software & Resource Library</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We provide essential drivers, utilities, and applications to keep your computer, printer, and CCTV systems running at peak performance.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {downloadCategories.map((cat, idx) => (
              <div
                key={idx}
                className="group relative bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-[#066291]/5 hover:-translate-y-1 hover:border-[#066291]/30 transition-all duration-300 flex flex-col justify-between overflow-hidden w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] min-h-[220px]"
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-transparent group-hover:bg-[#066291] transition-colors duration-300" />

                <div className="space-y-4">
                  <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center group-hover:bg-slate-950 transition-all duration-300">
                    {cat.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg group-hover:text-[#066291] transition-colors duration-300">{cat.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-normal">
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link to="/downloads" className="inline-flex items-center gap-2 bg-[#066291] hover:bg-[#044e74] text-white font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-200 shadow-md shadow-[#066291]/10 hover:shadow-lg hover:shadow-[#066291]/20 transform hover:-translate-y-0.5">
              Browse Download Center <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. REPLICATED TECHNOLOGY PRODUCTS GRID FROM SCREENSHOT */}
      <section className="w-screen ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] border-b border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 border border-sky-100">
            <span className="text-[10px] font-bold text-[#066291] uppercase tracking-wider">Shop With Us</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Technology Products</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Genuine products from leading global brands, sourced and sold with full warranty support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Laptops", desc: "HP, Dell, Lenovo, Asus, Acer", img: Laptop },
            { title: "Desktop Computers", desc: "Custom builds & branded PCs", img: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=600&q=80" },
            { title: "Printers", desc: "Canon, Epson, Brother printers", img: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=600&q=80" },
            { title: "CCTV Systems", desc: "Dahua, Ezviz, Tapo, Hikvision", img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80" },
            { title: "Networking Equipment", desc: "Routers, switches, cables", img: Networking },
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
        </div>
      </section>

      {/* NEW SECTION A: REPLICATED HOW WE WORK PIPELINE */}
      <section className="bg-slate-50/50 py-20 border-b border-slate-200/80 w-screen ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 border border-sky-100">
              <span className="text-[10px] font-bold text-[#066291] uppercase tracking-wider">Simple Process</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">How We Work</h2>
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
      <section className="w-screen ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] border-b border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 border border-sky-100">
            <span className="text-[10px] font-bold text-[#066291] uppercase tracking-wider">Our Experts</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Meet Our Experts</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Skilled, certified technicians dedicated to delivering exceptional service and technical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Sushil Gautam",
              role: "Head Technician",
              experience: "10+ Years",
              img: sushil,
              tags: ["Router Setup", "Network Wiring", "CCTV Installation", "Wi-Fi Optimization", "Network Troubleshooting", "Internet Setup", "Access Point Installation", "Network Switch Configuration", "IP Camera Configuration", "Server Rack Installation", "Data Cabling", "On-Site Technical Support"],
              socials: {
                fb: "https://www.facebook.com/sushil.gautam.731",
                insta: "https://www.instagram.com/sushil3899/",
                whatsapp: "https://wa.me/9779845290944"
              }
            },
            {
              name: "Saajan Rai",
              role: "Technician",
              experience: "9+ Years",
              img: sajaan,
              tags: ["Router Setup", "Network Wiring", "CCTV Installation", "Wi-Fi Optimization", "Network Troubleshooting", "Internet Setup", "Access Point Installation", "Network Switch Configuration", "IP Camera Configuration", "Data Cabling", "Printer Repair", "Printer Maintenance", "System Maintenance", "On-Site Technical Support"],
              socials: {
                fb: "https://www.facebook.com/saajan.rai.7798",
                insta: "#",
                whatsapp: "https://wa.me/9779821280031"
              }
            },
            {
              name: "Bibek Rai",
              role: "Technician",
              experience: "8+ Years",
              img: bibek,
              tags: ["Router Setup", "Network wiring", "Internet Configuration", "Access Point Installation", "Network Switch Configuration", "IP Camera Configuration", "CCTV Maintenance", "On-Site Technical Support"],
              socials: {
                fb: "https://www.facebook.com/raee.tmg",
                insta: "https://www.instagram.com/b_bibek_raii10/",
                whatsapp: "https://wa.me/9779801944840"
              }
            },
            {
              name: "Ashish Gautam",
              role: "Printer Repair Technician",
              experience: "4+ Years",
              img: ashish,
              tags: ["Printer Repair", "Printer Installation & Setup", "Maintenance & Servicing", "Ink & Toner Services", "Networking & Connectivity", "On-Site Support", "Sales & Spare Parts"],
              socials: {
                fb: "https://www.facebook.com/asisa.gautama.942751",
                insta: "https://www.instagram.com/aashish_gautam_7/",
                whatsapp: "https://wa.me/9779802499727"
              }
            },
            {
              name: "Paurakh Subedi",
              role: "Printer Repair Technician",
              experience: "3+ Years",
              img: paurakhi,
              tags: ["Printer Repair", "Installation & Setup", "Maintenance & Cleaning", "Ink & Toner Services", "Network Configuration", "On-Site Support", "Printer Parts & Supplies"],
              socials: {
                fb: "https://www.facebook.com/paurakh.subedi.3",
                insta: "https://www.instagram.com/paurakh.subedi/",
                whatsapp: "https://wa.me/9779706238009"
              }
            },
            {
              name: "Rupak Rai",
              role: "Computer Service Technician",
              experience: "3+ Years",
              img: rupak,
              tags: ["Laptop & Desktop Repair/Servicing",  "Computer Hardware Upgrades(RAM/SSD/HDD & more)", "Office Package Installation", "OS & Drivers Installation", "Data Recovery"],
              socials: {
                fb: "https://www.facebook.com/rupaka.ra.i.926983",
                insta: "https://www.instagram.com/putet_98/",
                whatsapp: "https://wa.me/9779801982808"
              }
            },
            {
              name: "Manik Neupane",
              role: "Head Accountant",
              experience: "8+ Years",
              img: manik,
              tags: ["Accounting", "Financial Management", "Budget Planning", "Reporting", "Business Operations"],
              socials: {
                fb: "https://www.facebook.com/Manikneupane7",
                insta: "https://www.instagram.com/zero_manik_07/",
                whatsapp: "https://wa.me/9779801944803"
              }
            },
            {
              name: "Kushal Gautam",
              role: "Assistant Accountant",
              experience: "2+ Years",
              img: kushal,
              tags: ["Bookkeeping", "Financial Records", "Transaction Management", "Reporting", "Administrative Support"],
              socials: {
                fb: "https://www.facebook.com/gautam.kushal.16",
                insta: "https://www.instagram.com/gautam.kushal.16/",
                whatsapp: "https://wa.me/9779742559021"
              }
            }
          ].map((member, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between text-left">
              <div>
                {/* Profile Picture Frame with Experience Badge Overlay */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                  <div className="absolute top-4 right-4 bg-[#066291] text-white font-mono font-bold text-[9px] px-2.5 py-1 rounded-md shadow-sm">
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
                <a href={member.socials.fb} target="_blank" rel="noopener noreferrer" className="hover:text-[#066291] transition-colors"><FaFacebook className="w-4 h-4" /></a>
                <a href={member.socials.insta} target="_blank" rel="noopener noreferrer" className="hover:text-[#066291] transition-colors"><FaInstagram className="w-4 h-4" /></a>
                <a href={member.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-[#066291] transition-colors"><FaWhatsapp className="w-4 h-4" /></a>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>




      {/* NEW SECTION D: REPLICATED TESTIMONIAL VIEWPORT CAROUSEL */}
      <section className="bg-slate-50/50 py-16 border-b border-slate-200/80 w-screen ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 border border-sky-100">
              <span className="text-[10px] font-bold text-[#066291] uppercase tracking-wider">Customer Stories</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">What Our Customers Say</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Real feedback from real clients who trust Techlite Group with their technology needs.
            </p>
          </div>

          {/* Testimonial Card Frame Structure */}
          <div className="max-w-3xl mx-auto flex flex-col items-center space-y-8">
            <div key={activeTestimonialIdx} className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm relative w-full text-left animate-in fade-in duration-500">
              {/* Quote Decorative Markings */}
              <Quote className="absolute top-8 right-8 w-10 h-10 text-sky-100 rotate-180" />

              {/* Star Rating Strip */}
              <div className="flex gap-0.5 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => <span key={i} className="text-lg">★</span>)}
              </div>

              {/* Central Review Paragraph */}
              <p className="text-slate-700 text-sm md:text-base font-normal leading-relaxed mb-8">
                "{testimonials[activeTestimonialIdx].quote}"
              </p>

              {/* Author Row Profile Vector */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 border border-slate-200">
                  <img src={testimonials[activeTestimonialIdx].img} alt={testimonials[activeTestimonialIdx].author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{testimonials[activeTestimonialIdx].author}</h4>
                  <p className="text-[11px] font-medium text-[#066291]">{testimonials[activeTestimonialIdx].company}</p>
                </div>
              </div>
            </div>

            {/* Slider Control Nodes Block */}
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrevTestimonial}
                aria-label="Previous testimonial"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#066291] hover:border-[#066291] transition-all duration-200 shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Carousel Indicator Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonialIdx(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeTestimonialIdx === idx ? 'w-6 bg-[#066291]' : 'w-1.5 bg-slate-200 hover:bg-slate-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNextTestimonial}
                aria-label="Next testimonial"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#066291] hover:border-[#066291] transition-all duration-200 shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>




      {/* 6. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-[#0f172a] rounded-2xl p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">

          <div className="relative z-10 space-y-6 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Need Professional Technical Support?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Our technicians are available for emergency diagnostics and scheduled infrastructure deployments. Experience the Techlite standard of precision.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact" className="bg-[#066291] hover:bg-[#044e74] text-white font-semibold text-sm px-6 py-3 rounded transition-colors shadow-sm">
                Contact Us
              </Link>
              <Link to="/services" className="bg-transparent border border-slate-500 hover:border-slate-300 text-white font-semibold text-sm px-6 py-3 rounded transition-colors">
                Our Services
              </Link>
            </div>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none flex items-center justify-center overflow-hidden">
            <Wrench className="w-96 h-96 text-white rotate-45 transform translate-x-12" />
          </div>
        </div>
      </section>





    </div>
  );
}