export interface ProductItem {
  id: string;
  slug: string;
  category: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  specs: string[];
  inStock: boolean;
}

export const productsData: ProductItem[] = [
  {
    id: "p1",
    slug: "enterprise-pro-laptop-15",
    category: "Laptops",
    name: "Enterprise ProBook 15\"",
    price: 1299.99,
    imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    description: "High-performance business laptop designed for heavy multitasking and professional workloads.",
    specs: ["Intel Core i7 13th Gen", "32GB DDR5 RAM", "1TB NVMe SSD", "15.6\" FHD IPS"],
    inStock: true
  },
  {
    id: "p2",
    slug: "ultrasharp-27-4k-monitor",
    category: "Monitors",
    name: "UltraSharp 27\" 4K Display",
    price: 449.99,
    imageUrl: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    description: "Color-accurate 4K monitor perfect for creative professionals and multi-display office setups.",
    specs: ["3840 x 2160 Resolution", "99% sRGB Color", "USB-C Power Delivery", "Ergonomic Stand"],
    inStock: true
  },
  {
    id: "p3",
    slug: "ax6000-wifi6-router",
    category: "Networking",
    name: "AX6000 Dual-Band Wi-Fi 6 Router",
    price: 199.99,
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    description: "Next-gen Wi-Fi 6 routing capable of handling 50+ devices simultaneously with ultra-low latency.",
    specs: ["Wi-Fi 6 (802.11ax)", "2.5 Gbps WAN Port", "WPA3 Security", "Quad-Core CPU"],
    inStock: true
  },
  {
    id: "p4",
    slug: "4k-vandal-dome-camera",
    category: "Security (CCTV)",
    name: "4K Vandal-Proof Dome CC Camera",
    price: 189.99,
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
    description: "Weatherproof IP security camera with color night vision, designed for 24/7 commercial surveillance.",
    specs: ["8MP 4K Ultra HD", "IP67 Weatherproof", "Power over Ethernet (PoE)", "100ft IR Night Vision"],
    inStock: true
  },
  {
    id: "p5",
    slug: "mech-wireless-keyboard",
    category: "Peripherals",
    name: "Tactile Wireless Mechanical Keyboard",
    price: 119.99,
    imageUrl: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
    description: "Premium ergonomic keyboard featuring hot-swappable switches and a 2.4GHz zero-latency wireless connection.",
    specs: ["Brown Tactile Switches", "Bluetooth & 2.4GHz", "Hot-Swappable", "Aluminum Frame"],
    inStock: true
  },
  {
    id: "p6",
    slug: "mesh-network-system-3pack",
    category: "Networking",
    name: "Enterprise Mesh Network System (3-Pack)",
    price: 349.99,
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    description: "Eliminate dead zones entirely. This 3-node system covers up to 6,000 sq ft with seamless roaming.",
    specs: ["Tri-Band Connection", "Covers 6,000 sq ft", "Seamless Roaming", "Built-in Antivirus"],
    inStock: false
  }
];