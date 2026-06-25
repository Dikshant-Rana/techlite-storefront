import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, CheckCircle2, XCircle } from 'lucide-react';
import { productsData } from '../data/productsData';

export default function Products() {
  // States for our search and filter functionality
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Extract unique categories directly from your data array
  const categories = ["All", ...Array.from(new Set(productsData.map(item => item.category)))];

  // Filter the products based on the search bar AND the selected category button
  const filteredProducts = productsData.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="font-sans text-slate-900 pb-24">
      
      {/* Page Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-10 md:p-16 mb-8 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Hardware Catalog</h1>
          <p className="text-slate-300 text-lg">
            Browse our curated selection of laptops, monitors, enterprise networking gear, and security systems.
          </p>
        </div>
        <div className="absolute -right-20 -top-40 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>
      </div>

      {/* Toolbar: Search and Category Filters */}
      <div className="space-y-6 mb-10">
        
        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search laptops, monitors, routers..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-sm"
          />
        </div>

        {/* Dynamic Category Buttons */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === category 
                  ? "bg-blue-600 text-white shadow-sm" 
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-2">No products found</h3>
          <p className="text-slate-500">Try adjusting your search or selecting a different category.</p>
          <button 
            onClick={() => {setSearchQuery(""); setActiveCategory("All");}}
            className="mt-4 text-blue-600 font-medium hover:underline"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group flex flex-col">
              
              {/* Product Image */}
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2 gap-4">
                  <h3 className="font-bold text-lg leading-tight">{product.name}</h3>
                  <span className="font-bold text-blue-600 whitespace-nowrap">${product.price}</span>
                </div>
                
                <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                  {product.description}
                </p>

                {/* Specs Preview */}
                <div className="space-y-2 mb-6 flex-grow">
                  {product.specs.slice(0, 3).map((spec, idx) => (
                    <div key={idx} className="text-xs text-slate-600 bg-slate-50 px-3 py-2 rounded-md border border-slate-100">
                      {spec}
                    </div>
                  ))}
                </div>

                {/* Action Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  {product.inStock ? (
                    <span className="flex items-center gap-1 text-xs font-semibold text-green-600">
                      <CheckCircle2 className="w-4 h-4" /> In Stock
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs font-semibold text-red-500">
                      <XCircle className="w-4 h-4" /> Out of Stock
                    </span>
                  )}
                  
                  <Link 
                    to="/contact" 
                    className="bg-slate-900 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 shadow-sm text-sm font-medium"
                  >
                    <ShoppingCart className="w-4 h-4" /> Inquire
                  </Link>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
}