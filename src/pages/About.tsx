import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Target,
  Eye,

  ShieldCheck,
  Wrench,
  MessageSquare,
  Package,
  Clock,
  CheckCircle,
  Headphones,
  ChevronRight,

  BookOpen,

  UserCheck,
  Smile
} from 'lucide-react';
import techliteabout from "../assets/image/techlite_about.jpg";
import Anup from "../assets/image/anup.jpg";

import sushil from "../assets/image/sushil.jpg";
import sajaan from "../assets/image/sajaan.jpg";
import paurakhi from "../assets/image/paurakh.jpg";
import rupak from "../assets/image/rupak.jpg";
import kushal from "../assets/image/kushal.jpg";
import bibek from "../assets/image/bibek.jpg";
import manik from "../assets/image/manik.jpg";
import ashish from "../assets/image/ashish.jpg";

import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

// Import brand logos to match homepage styling
import DellLogo from '../assets/brands/dell.svg';
import HpLogo from '../assets/brands/hp.svg';
import TapoLogo from '../assets/brands/tapo.webp';
import AsusLogo from '../assets/brands/asus.svg';
import AcerLogo from '../assets/brands/acer.svg';
import CanonLogo from '../assets/brands/canon.svg';
import EpsonLogo from '../assets/brands/epson.svg';
import TpLinkLogo from '../assets/brands/tplink.svg';
import BrotherLogo from '../assets/brands/brother.svg';
import DlinkLogo from '../assets/brands/d-link.svg';
import LblinkLogo from '../assets/brands/lb-link.png';
import AlhuaLogo from '../assets/brands/alhua.svg';
import EzvizLogo from '../assets/brands/ezviz.png';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageAlt: string;
  img: string;
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
      img: sushil,
      tags: ["Router Configuration", "Network Infrastructure", "CCTV Systems", "Technical Supervision"]
    },
    {
      name: "Bibek Rai",
      role: "Senior Technician",
      experience: "5+ Years",
      description: "Skilled in network cabling, CCTV camera setups, computer troubleshooting, and providing dependable technical support for homes and businesses.",
      imageAlt: "Bibek Rai - Technician",
      img: bibek,
      tags: ["Laptop Repair", "Desktop Repair", "Hardware Upgrades", "Technical Support"]
    },
    {
      name: "Saajan Rai",
      role: "Senior Technician",
      experience: "4+ Years",
      description: "Specializes in network wiring, CCTV installations, hardware diagnostics, and regular system maintenance to keep client operations running smoothly.",
      imageAlt: "Saajan Rai - Technician",
      img: sajaan,
      tags: ["Laptop Repair", "Desktop Repair", "Hardware Upgrades", "Operating Systems"]
    },
    {
      name: "Ashish Gautam",
      role: "Printer Repair Specialist",
      experience: "5+ Years",
      description: "Printer repair specialist handling diagnostics, servicing, maintenance, and complex repairs for inkjet, laser, and multifunction printers.",
      imageAlt: "Ashish Gautam - Printer Repair Technician",
      img: ashish,
      tags: ["Laser Printers", "Inkjet Servicing", "Diagnostics", "Maintenance Support"]
    },
    {
      name: "Paurakh Subedi",
      role: "Printer Repair Technician",
      experience: "3+ Years",
      description: "Dedicated to printer troubleshooting, routine maintenance, and repair solutions across various mainstream printer brands and models.",
      imageAlt: "Paurakh Subedi - Printer Repair Technician",
      img: paurakhi,
      tags: ["Hardware Diagnostics", "Brand Maintenance", "Troubleshooting"]
    },
    {
      name: "Rupak Rai",
      role: "Computer Service Technician",
      experience: "4+ Years",
      description: "Expert in desktop and laptop repairs, operating system installations, hardware upgrades (RAM/SSD), data recovery, and performance optimization.",
      imageAlt: "Rupak Rai - Computer Service Technician",
      img: rupak,
      tags: ["OS Installation", "Data Recovery", "RAM/SSD Upgrades", "Performance Tuning"]
    },
    {
      name: "Manik Neupane",
      role: "Head Accountant",
      description: "Manages financial operations, budgeting, financial reporting, and keeps our organization’s business accounts organized and precise.",
      imageAlt: "Manik Neupane - Head Accountant",
      img: manik,
      tags: ["Financial Operations", "Budgeting", "Corporate Accounting"]
    },
    {
      name: "Kushal Gautam",
      role: "Assistant Accountant",
      description: "Supports daily financial tracking, transaction processing, reporting, and smooth administrative financial operations.",
      imageAlt: "Kushal Gautam - Assistant Accountant",
      img: kushal,
      tags: ["Transaction Tracking", "Reporting", "Financial Admin"]
    }
  ];

  const getBrandLogo = (brandName: string) => {
    switch (brandName.toLowerCase()) {
      case 'dell': return DellLogo;
      case 'hp': return HpLogo;
      case 'asus': return AsusLogo;
      case 'acer': return AcerLogo;
      case 'dahua': return AlhuaLogo;
      case 'ezviz': return EzvizLogo;
      case 'tp-link tapo':
      case 'tapo': return TapoLogo;
      case 'lb-link': return LblinkLogo;
      case 'd-link': return DlinkLogo;
      case 'epson': return EpsonLogo;
      case 'canon': return CanonLogo;
      case 'brother': return BrotherLogo;
      case 'tp-link': return TpLinkLogo;
      default: return null;
    }
  };

  const brandCategories = [
    {
      title: "Laptops",
      brands: ["Dell", "HP", "ASUS", "Acer"]
    },
    {
      title: "CCTV & Security",
      brands: ["Dahua", "Hikvision", "EZVIZ", "TP-Link Tapo"]
    },
    {
      title: "Networking",
      brands: ["Ruijie", "D-Link", "LB-LINK", "Netis", "Alfa Network"]
    },
    {
      title: "Printers",
      brands: ["Epson", "Canon", "Brother"]
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white overflow-x-hidden">

      {/* 1. PREMIUM COMPACT HEADER */}
      <section className="w-screen ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] border-b border-slate-200/80 pt-28 pb-14 bg-white bg-[size:40px_40px] bg-[linear-gradient(to_right,rgba(226,232,240,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(226,232,240,0.4)_1px,transparent_1px)] overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-left space-y-4">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <Link to="/" className="hover:text-[#066291] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-600">About Us</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100">
            <span className="text-[#066291] text-[10px] font-bold tracking-wide uppercase">Company Overview</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">About Techlite</h1>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
            Learn more about Techlite, our experienced team, and our commitment to providing reliable technology solutions for homes and businesses.
          </p>
        </div>
      </section>

      {/* 2. COMPANY STORY (PREMIUM SPLIT LAYOUT) */}
      <section className="w-screen ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] border-b border-slate-200/80 py-20 bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Side: Story Image */}
          <div className="lg:col-span-5 w-full">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50">
              <img
                src={techliteabout}
                alt="Techlite Service Desk Lab"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/10" />
            </div>
          </div>

          {/* Right Side: Narrative */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 border border-sky-100">
              <span className="text-[10px] font-bold text-[#066291] uppercase tracking-wider">Our Narrative</span>
            </div>

            <h2 className="text-2xl md:text-3.5xl font-bold text-slate-900 tracking-tight leading-tight">
              Honest Support Built on Local Trust
            </h2>

            <div className="space-y-4 text-slate-500 text-sm leading-relaxed font-normal">
              <p>
                Techlite Group was established in Nepal with a clear target: to make technology support direct, honest, and accessible to everyone. We noticed that customers frequently encountered confusing technical jargon, inflated prices, and unreliable component repairs. We decided to build a service based on clear descriptions, transparent diagnostic findings, and genuine products.
              </p>
              <p>
                What started as a small, specialized repair counter has grown step-by-step into a comprehensive technology partner. Today, we handle residential computer repairs, high-speed structured business networking, smart CCTV installations, and hardware supplies for clients across the country.
              </p>
              <p>
                We have expanded our operations not through aggressive sales ads, but through consistent workmanship and word-of-mouth recommendations. Every device we configure, cable we route, and security camera we align is managed with a commitment to quality and longevity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION (TWO PREMIUM CARDS) */}
      <section className="w-screen ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] border-b border-slate-200/80 py-20 bg-slate-50/40 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Core Principles</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Our Mission & Vision</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Mission Card */}
            <div className="bg-white border border-slate-200/80 p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between relative overflow-hidden group">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-sky-50 text-[#066291] rounded-2xl flex items-center justify-center border border-sky-100 shadow-sm group-hover:bg-[#066291] group-hover:text-white transition-colors duration-300">
                  <Target className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-normal">
                    To supply genuine technology products and provide dependable technical support that helps everyday users, schools, and offices stay connected, productive, and secure without complex technical barriers.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white border border-slate-200/80 p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between relative overflow-hidden group">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-slate-950 text-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-[#066291] transition-colors duration-300">
                  <Eye className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-normal">
                    To be recognized as one of Nepal's most reliable and trusted technology service providers, known for our technical capability, customer-first service approach, and durable infrastructure setups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOUNDER'S MESSAGE */}
      <section className="w-screen ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] border-b border-slate-200/80 py-20 bg-slate-50/40 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Portrait Grid */}
          <div className="lg:col-span-4 max-w-sm mx-auto w-full">
            <div className="aspect-[3/4] bg-slate-100 rounded-3xl shadow-md border border-slate-100 overflow-hidden relative group">
              <img
                src={Anup}
                alt="Managing Director of Techlite Group"
                className="w-full h-full object-cover object-top group-hover:scale-102 transition duration-300"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-slate-100 text-left">
                <p className="font-bold text-sm text-slate-900">Anup Karki</p>
                <p className="text-xs text-[#066291] font-semibold mt-0.5">Managing Director</p>
              </div>
            </div>
          </div>

          {/* Letter Description Column */}
          <div className="lg:col-span-8 flex flex-col items-start text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-800 text-xs font-semibold rounded-full border border-amber-100">
              <MessageSquare className="w-3 h-3" /> Founder's Message
            </div>

            <h2 className="text-2xl md:text-3.5xl font-bold text-slate-900 tracking-tight">
              Our Commitment to Customer Trust
            </h2>

            <div className="space-y-4 text-slate-500 text-sm leading-relaxed font-normal max-w-2xl">
              <p>
                "I started Techlite Group with a single goal: to provide computer repairs, camera setups, and network wiring that customers could depend on, backed by transparent pricing."
              </p>
              <p>
                "We don't cut corners. We perform a detailed check before starting any installation, source certified components, and stand behind our work with warranty maintenance. Whether we are setting up a router in a home or wiring cameras across a multi-story school building, our priority is always to work cleanly and honestly."
              </p>
              <p>
                "Thank you for choosing Techlite Group as your technology partner. We will continue working hard to keep your systems operating smoothly."
              </p>
            </div>

            {/* Signature Area */}
            <div className="pt-6 border-t border-slate-200/80 w-full max-w-xs text-left">
              <div className="font-pacifico text-xl text-[#066291] tracking-wide mb-1 select-none">
                Anup Karki
              </div>
              <p className="text-xs font-bold text-slate-900">Anup Karki</p>
              <p className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider">Managing Director, Techlite Group</p>
            </div>
          </div>

        </div>
      </section>


      {/* 4. WHY CUSTOMERS TRUST TECHLITE (UNIQUE LAYOUT) */}
      <section className="w-screen ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] border-b border-slate-200/80 py-20 bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Our Strengths</span>
            <h2 className="text-2xl md:text-3.5xl font-bold text-slate-900 tracking-tight">Why Customers Trust Techlite</h2>
            <p className="text-slate-500 text-sm leading-relaxed font-normal">
              We base our business on straightforward recommendations, certified technical skills, and reliable after-sales support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              {
                icon: <Wrench className="w-5 h-5 text-[#066291]" />,
                title: "Experienced Technicians",
                desc: "Our technicians hold deep expertise in troubleshooting computer hardware, printers, smart surveillance wiring, and network routing."
              },
              {
                icon: <Package className="w-5 h-5 text-[#066291]" />,
                title: "Genuine Products Only",
                desc: "We supply only original equipment and replacement components sourced directly through certified distributor channels."
              },
              {
                icon: <CheckCircle className="w-5 h-5 text-indigo-600" />,
                title: "Honest Recommendations",
                desc: "We diagnose first and only suggest repairs or upgrades that are truly necessary. No confusing sales upsells or hidden fees."
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-sky-600" />,
                title: "Professional Installation",
                desc: "Every network line, access point, and security camera is installed with neat cable management and tidy labeling."
              },
              {
                icon: <Clock className="w-5 h-5 text-rose-600" />,
                title: "Fast Response & Support",
                desc: "We respect your time. Most hardware diagnostics and software configurations are processed same-day or next-day."
              },
              {
                icon: <Smile className="w-5 h-5 text-amber-600" />,
                title: "Friendly Customer Service",
                desc: "We explain technical issues in simple English, keeping you informed from diagnostics to the final system handover."
              },
              {
                icon: <UserCheck className="w-5 h-5 text-emerald-600" />,
                title: "Reliable After-Sales Support",
                desc: "Our relationship doesn't end after setup. We support our hardware installations with active local warranty maintenance."
              }
            ].map((strength, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-[210px] group"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                    {strength.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">{strength.title}</h3>
                  <p className="text-slate-500 text-[11px] leading-relaxed font-normal">{strength.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 7. MEET OUR TEAM */}
      <section className="w-screen ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] border-b border-slate-200/80 py-20 bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Expert Technicians</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Meet Our Team</h2>
            <p className="text-slate-500 text-sm leading-relaxed font-normal">
              The dedicated staff, technicians, and financial experts who coordinate to deliver reliable services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between text-left group"
              >
                <div>
                  {/* Photo container */}
                  <div className="relative aspect-square bg-slate-50 overflow-hidden border-b border-slate-100">
                    <img
                      src={member.img}
                      alt={member.imageAlt}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {member.experience && (
                      <div className="absolute top-4 right-4 bg-[#066291] text-white font-mono font-bold text-[9px] px-2.5 py-1 rounded-md shadow-sm">
                        {member.experience}
                      </div>
                    )}
                  </div>

                  {/* Info details */}
                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-0.5 group-hover:text-[#066291] transition-colors">{member.name}</h3>
                      <p className="text-[10px] font-semibold text-[#066291] uppercase tracking-wider">{member.role}</p>
                    </div>
                    <p className="text-slate-500 text-[11px] leading-relaxed font-normal">
                      {member.description}
                    </p>
                  </div>
                </div>

                {/* Footer tags */}
                <div className="px-5 pb-5 pt-3 border-t border-slate-50 flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1">
                    {member.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[9px] bg-slate-50 text-slate-600 font-medium px-2 py-0.5 rounded border border-slate-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 pt-1">
                    <a href="#" className="hover:text-[#066291] transition-colors"><FaFacebook className="w-3.5 h-3.5" /></a>
                    <a href="#" className="hover:text-[#066291] transition-colors"><FaInstagram className="w-3.5 h-3.5" /></a>
                    <a href="#" className="hover:text-[#066291] transition-colors"><FaWhatsapp className="w-3.5 h-3.5" /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 5. COMPANY STATISTICS */}
      <section className="bg-slate-950 py-16 ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] w-screen text-center text-white border-b border-slate-900 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-12">
          <div className="space-y-3">
            <span className="text-[9px] font-black tracking-widest text-[#066291] uppercase">Proven Performance</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Our Achievements</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-y-8 gap-x-4 max-w-5xl mx-auto items-center pt-4">
            {[
              { total: "8+", context: "Years Experience", color: "text-[#066291]" },
              { total: "5000+", context: "Happy Customers", color: "text-white" },
              { total: "5000+", context: "Devices Repaired", color: "text-white" },
              { total: "100+", context: "CCTV Setups", color: "text-white" },
              { total: "300+", context: "Network Deployments", color: "text-white" },
              { total: "50+", context: "Corporate Clients", color: "text-[#066291]" }
            ].map((stat, sIdx) => (
              <div key={sIdx} className="space-y-1 group transform hover:scale-105 transition-transform duration-200">
                <div className={`text-3xl md:text-4xl font-black ${stat.color} tracking-tight`}>
                  {stat.total}
                </div>
                <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider leading-tight">
                  {stat.context}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COMPANY VALUES */}
      <section className="w-screen ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] border-b border-slate-200/80 py-20 bg-slate-50/40 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">How We Work</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Our Core Values</h2>
            <p className="text-slate-500 text-sm leading-relaxed font-normal">
              The ethical and professional standards we carry into every installation and diagnostic repair task.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { title: "Honest Service", desc: "We provide upfront, clear diagnostics and transparent estimates. No hidden charges or forced components.", icon: <ShieldCheck className="w-5 h-5" /> },
              { title: "Quality Workmanship", desc: "We follow industry neatness guidelines for cable management and hardware mounting to ensure systems last.", icon: <Wrench className="w-5 h-5" /> },
              { title: "Customer Satisfaction", desc: "We do not consider a task finished until the user validates that the device or connection works perfectly.", icon: <Smile className="w-5 h-5" /> },
              { title: "Genuine Products", desc: "We source accessories, network devices, and laptops exclusively through authorized, warrantied distributors.", icon: <Package className="w-5 h-5" /> },
              { title: "Continuous Learning", desc: "We constantly study new tech updates, firmware versions, and router configurations to resolve issues efficiently.", icon: <BookOpen className="w-5 h-5" /> },
              { title: "Reliable Support", desc: "We stand behind our installations, answering queries and managing issues quickly during or after the service window.", icon: <Headphones className="w-5 h-5" /> }
            ].map((val, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-4"
              >
                <div className="p-3 bg-sky-50 text-[#066291] rounded-xl shrink-0 border border-sky-100/50">
                  {val.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">{val.title}</h3>
                  <p className="text-slate-500 text-[11px] leading-relaxed font-normal">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 9. BRANDS WE WORK WITH */}
      <section id="brand-support" className="w-screen ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] border-b border-slate-200/80 py-20 bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Supported Ecosystem</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Brands We Sell & Support</h2>
            <p className="text-slate-500 text-sm leading-relaxed font-normal">
              We supply, install, and service hardware components from leading global manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {brandCategories.map((category, cIdx) => (
              <div key={cIdx} className="bg-slate-50/50 border border-slate-200/80 p-6 rounded-2xl flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="font-bold text-slate-900 text-sm border-b border-slate-200/80 pb-2">{category.title}</h3>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.brands.map((brandName) => {
                      const logo = getBrandLogo(brandName);
                      return logo ? (
                        <div
                          key={brandName}
                          className="h-7 bg-white border border-slate-200/80 rounded px-2.5 py-0.5 flex items-center justify-center hover:bg-slate-50 hover:scale-[1.02] transition-all duration-200"
                          title={brandName}
                        >
                          <img src={logo} alt={brandName} className="h-4.5 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
                        </div>
                      ) : (
                        <span
                          key={brandName}
                          className="text-[9px] font-bold text-slate-600 bg-white border border-slate-200/80 px-2 py-1 rounded hover:bg-slate-50 transition-colors"
                        >
                          {brandName}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-[#0f172a] rounded-2xl p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
          <div className="relative z-10 space-y-6 max-w-xl text-left">
            <h2 className="text-3.5xl font-bold text-white tracking-tight leading-tight">
              Looking for a Trusted Technology Partner?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed font-normal">
              Whether you need desktop upgrades, structured cabling layout designs for your office, or custom smart CCTV configurations, our team is ready to help.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/contact"
                className="bg-[#066291] hover:bg-[#044e74] text-white font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm shadow-[#066291]/15"
              >
                Contact Us
              </Link>
              <Link
                to="/services"
                className="bg-transparent border border-slate-500 hover:border-slate-300 text-white font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none flex items-center justify-center overflow-hidden">
            <ShieldCheck className="w-96 h-96 text-white rotate-45 transform translate-x-12" />
          </div>
        </div>
      </section>

    </div>
  );
}