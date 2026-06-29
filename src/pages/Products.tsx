import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  ArrowRight,
  ChevronRight,
  Filter,
  Sparkles,
  ShieldCheck,
  Mail
} from 'lucide-react';
import { productsData } from '../data/productsData';

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
import Dlink from '../assets/brands/d-link.svg';
import Lblink from '../assets/brands/lb-link.png';
import Alhua from '../assets/brands/alhua.svg';
import Ezviz from '../assets/brands/ezviz.png';

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(productsData.map(item => item.category)))];

  const filteredProducts = productsData.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const getBrandLogo = (brandName: string) => {
    switch (brandName.toLowerCase()) {
      case 'dell': return DellLogo;
      case 'hp': return HpLogo;
      case 'asus': return AsusLogo;
      case 'acer': return AcerLogo;
      case 'dahua': return Alhua;
      case 'ezviz': return Ezviz;
      case 'tp-link tapo':
      case 'tapo': return TapoLogo;
      case 'lb-link': return Lblink;
      case 'd-link': return Dlink;
      case 'epson': return EpsonLogo;
      case 'canon': return CanonLogo;
      case 'brother': return BrotherLogo;
      case 'tp-link': return TpLinkLogo;
      default: return null;
    }
  };


  return (
    <div className="font-sans text-slate-900 bg-white overflow-x-hidden">

      {/* 1. PREMIUM HERO SECTION */}
      <section className="relative w-screen pt-28 pb-16 flex items-center ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] bg-white bg-[size:40px_40px] bg-[linear-gradient(to_right,rgba(226,232,240,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(226,232,240,0.4)_1px,transparent_1px)] border-b border-slate-200/80">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none animate-pulse duration-[6000ms]" />
        <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-slate-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10 text-left">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">
            <Link to="/" className="hover:text-[#066291] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-600">Products</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 mb-6">
            <span className="text-[#066291] text-xs">★</span>
            <span className="text-xs font-semibold text-slate-700 tracking-wide uppercase">
              Hardware Showcase
            </span>
          </div>


          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] max-w-2xl">
            Genuine Technology <br />
            <span className="relative inline-block text-[#066291]">
              Products & Gear
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mb-8">
            Explore the technology categories we supply and support. We partner with leading global brands to bring genuine hardware with official warranty support to Nepal.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#product-catalog"
              className="bg-[#066291] hover:bg-[#044e74] text-white px-6 py-3.5 rounded-full font-bold text-sm inline-flex items-center gap-2 transition-all duration-200 shadow-md shadow-[#066291]/10 transform hover:-translate-y-0.5"
            >
              Browse Catalog <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#brand-support"
              className="bg-sky-50/60 hover:bg-sky-50 border border-sky-100 text-[#066291] px-6 py-3.5 rounded-full font-bold text-sm inline-flex items-center gap-2 transition-all duration-200"
            >
              Supported Brands
            </a>
          </div>
        </div>
      </section>

      {/* 2. TOOLBAR & FILTERS */}
      <section id="product-catalog" className="max-w-7xl mx-auto px-6 pt-20 pb-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          {/* Search Input */}
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search laptops, cameras, routers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#066291] focus:border-transparent shadow-sm text-sm"
            />
          </div>

          {/* Dynamic Category Buttons */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mr-2">
              <Filter className="w-3.5 h-3.5" /> Filter by:
            </span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${activeCategory === category
                  ? "bg-[#066291] text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DYNAMIC PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-slate-50/50 rounded-2xl border border-slate-200/80 max-w-xl mx-auto">
            <h3 className="text-lg font-bold text-slate-900 mb-1">No products match your criteria</h3>
            <p className="text-slate-500 text-sm">Try adjusting your spelling or selecting a different category filter.</p>
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
              className="mt-4 bg-white border border-slate-200 hover:bg-slate-50 px-4 py-2 rounded-lg text-xs font-bold text-[#066291] transition-colors shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Product Image */}
                  <div className="relative h-56 bg-slate-50 overflow-hidden border-b border-slate-100">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-slate-900/80 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="mb-3">
                      <h3 className="font-bold text-slate-900 text-lg leading-tight group-hover:text-[#066291] transition-colors">
                        {product.name}
                      </h3>
                    </div>

                    <p className="text-slate-500 text-xs leading-relaxed mb-6 font-medium">
                      {product.description}
                    </p>

                    {/* Products Included / Specifications List */}
                    <div className="space-y-2 mb-6">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Products & Services
                      </span>
                      {product.specs.map((spec, idx) => (
                        <div
                          key={idx}
                          className="text-[11px] text-slate-600 bg-slate-50/50 px-3 py-2 rounded-lg border border-slate-100 flex items-center gap-2"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-[#066291] shrink-0" />
                          <span className="font-semibold">{spec}</span>
                        </div>
                      ))}
                    </div>

                    {/* Available Brands */}
                    {product.brands.length > 0 && product.category !== "Computer Accessories" && (
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                          Available Brands
                        </span>
                        <div className="flex flex-wrap gap-2 items-center">
                          {product.brands.map((brandName) => {
                            const logo = getBrandLogo(brandName);
                            const isSmallLogo = ['dell', 'hp', 'ezviz', 'lb-link', 'lb link'].includes(brandName.toLowerCase());
                            return logo ? (
                              <div
                                key={brandName}
                                className="h-8 bg-slate-50 border border-slate-200/80 rounded px-2.5 py-1 flex items-center justify-center hover:bg-slate-100 hover:border-slate-300 transition-colors"
                                title={brandName}
                              >
                                <img
                                  src={logo}
                                  alt={brandName}
                                  className={`${isSmallLogo ? 'h-8' : 'h-4.5'} w-auto object-contain opacity-70 hover:opacity-100 transition-opacity`}
                                />
                              </div>
                            ) : (
                              <span
                                key={brandName}
                                className="text-[10px] font-bold text-slate-600 bg-slate-50 border border-slate-200/80 px-2 py-1 rounded hover:bg-slate-100 hover:border-slate-300 transition-colors"
                              >
                                {brandName}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 mt-auto">
                  <Link
                    to="/contact"
                    className="w-full bg-[#066291] hover:bg-[#044e74] text-white px-5 py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-sm text-xs font-bold text-center"
                  >
                    <Mail className="w-3.5 h-3.5" /> Contact Us for Inquiry
                  </Link>
                </div>

              </div>
            ))}
          </div>
        )}
      </section>

      {/* 5. FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-[#0f172a] rounded-2xl p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">

          <div className="relative z-10 space-y-6 max-w-xl text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Need a Custom Product Configuration?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              If you need custom PC components, office routers, switch setups, or large CCTV storage configurations, let our technicians help you source the perfect gear.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/contact"
                className="bg-[#066291] hover:bg-[#044e74] text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm shadow-[#066291]/15"
              >
                Submit Inquiry
              </Link>
              <a
                href="tel:+9779855082916"
                className="bg-transparent border border-slate-500 hover:border-slate-300 text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-colors"
              >
                Call Hardware Desk
              </a>
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