// servicesData.ts
export interface ServiceItem {
  id: string;
  slug: string;
  category: string;
  title: string;
  imageUrl: string;
  desc: string;
  longDesc: string;
  tags: string[];
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "1",
    slug: "technology-sales",
    category: "SALES",
    title: "Computers & Technology Products",
    imageUrl: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1200&q=80",
    desc: "Shop desktops, laptops, printers, projectors, networking devices, CCTV systems, accessories, and other technology products.",
    longDesc: "We provide a comprehensive catalog of high-grade technology products for both home and enterprise environments. Our inventory is curated to ensure reliability, performance, and longevity. Every product we sell is backed by manufacturer warranties and our in-house setup support.",
    tags: ["TECH STORE", "QUALITY PRODUCTS"],
    features: [
      "Authorized reseller for major technology brands",
      "Comprehensive warranty and return policies",
      "Pre-purchase consultation to match your specific needs",
      "Optional on-site delivery and initial setup"
    ]
  },
  {
    id: "2",
    slug: "hardware-repair",
    category: "REPAIR",
    title: "Computer & Printer Repair",
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1200&q=80",
    desc: "Professional repair, servicing, upgrades, and maintenance for desktops, laptops, printers, and other devices.",
    longDesc: "Hardware failures cause critical downtime. Our certified technicians utilize advanced diagnostic tools to isolate issues down to the component level. From screen replacements and motherboard repairs to printer drum maintenance, we restore your devices to peak working condition.",
    tags: ["REPAIR", "UPGRADES"],
    features: [
      "No-obligation initial hardware diagnostics",
      "Genuine replacement parts with individual warranties",
      "Data-safe repair protocols to protect your files",
      "Express service options for critical business machines"
    ]
  },
  {
    id: "3",
    slug: "network-solutions",
    category: "NETWORKING",
    title: "Router Setup & Network Solutions",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    desc: "Wi-Fi setup, router installation, network configuration, internet troubleshooting, and office networking services.",
    longDesc: "A stable network is the backbone of any modern workflow. We design, deploy, and troubleshoot network infrastructures ranging from standard home Wi-Fi meshes to complex, multi-VLAN corporate architectures, ensuring zero dead zones and maximum throughput.",
    tags: ["WIFI SETUP", "NETWORKING"],
    features: [
      "Custom Cat6/Fiber cable runs and termination",
      "Mesh Wi-Fi deployment for total property coverage",
      "Firewall configuration and network security hardening",
      "Bandwidth management and QoS optimization"
    ]
  },
  {
    id: "4",
    slug: "cctv-security",
    category: "SECURITY",
    title: "CCTV Installation & Servicing",
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
    desc: "CCTV camera installation, maintenance, upgrades, remote viewing setup, and security system support.",
    longDesc: "Protect your physical assets with our high-definition surveillance systems. We provide end-to-end CCTV services, from strategic camera placement planning to DVR/NVR configuration, ensuring you have reliable, 24/7 eyes on your property from anywhere in the world.",
    tags: ["CCTV", "SECURITY"],
    features: [
      "1080p to 4K IP and Analog camera deployments",
      "Secure mobile app configuration for remote viewing",
      "Weatherproof and night-vision capable hardware",
      "Automated cloud or local backup storage solutions"
    ]
  },
  {
    id: "5",
    slug: "custom-builds",
    category: "CUSTOM BUILDS",
    title: "Custom PC Building",
    imageUrl: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1200&q=80",
    desc: "Custom-built desktop PCs for gaming, office work, content creation, education, and professional use.",
    longDesc: "Off-the-shelf computers often compromise on quality. Our custom build service allows you to dictate exactly where your budget goes. Whether you need a high-framerate gaming rig, a silent studio editing bay, or a reliable fleet of office terminals, we engineer it specifically for you.",
    tags: ["CUSTOM PC", "GAMING & OFFICE"],
    features: [
      "Component compatibility and bottleneck analysis",
      "Immaculate cable management and thermal optimization",
      "24-hour stress testing before deployment",
      "Future-proof paths for easy upgrades"
    ]
  },
  {
    id: "6",
    slug: "software-setup",
    category: "SOFTWARE",
    title: "Software Installation & Setup",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    desc: "Windows installation, driver setup, Microsoft Office installation, software updates, and system configuration.",
    longDesc: "Even the best hardware is useless without the right software environment. We handle clean OS installations, bloatware removal, driver updates, and enterprise software provisioning so your system is clean, secure, and ready to work the moment you turn it on.",
    tags: ["DRIVERS", "OFFICE SETUP"],
    features: [
      "Clean OS installations (Windows, Linux, macOS)",
      "Malware/Virus removal and system restoration",
      "Data migration from old devices to new ones",
      "Volume licensing setup for small businesses"
    ]
  }
];