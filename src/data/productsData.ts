import laptopImg from '../assets/image/laptop.jpg';
import desktopImg from '../assets/image/desktop.jpg';
import Printer from '../assets/image/epson.jpg';
import Ap from '../assets/image/AP.jpg';
import CC_CAM from '../assets/image/dahua_cctv.jpg';
import Peripheral from '../assets/image/computer.jpg';


export interface ProductItem {
  id: string;
  slug: string;
  category: string;
  name: string;
  imageUrl: string;
  description: string;
  brands: string[];
  specs: string[];
}

export const productsData: ProductItem[] = [
  {
    id: "p1",
    slug: "laptops",
    category: "Laptops",
    name: "Laptops",
    imageUrl: laptopImg,
    description: "Reliable laptops for students, professionals, businesses, and everyday users.",
    brands: ["Dell", "HP", "ASUS", "Acer", "Lenovo"],
    specs: ["Student Laptops", "Business Laptops", "Gaming Laptops", "Everyday Use"]
  },
  {
    id: "p6",
    slug: "desktops",
    category: "Desktops",
    name: "Desktop Computers",
    imageUrl: desktopImg,
    description: "Office Desktops, High-performance custom desktops, gaming PCs, and brand-name workstations.",
    brands: ["Dell", "HP", "ASUS", "Acer"],
    specs: ["Custom Gaming PCs", "Brand Workstations", "All-in-One PCs", "Office & School Desktops"]
  },
  {
    id: "p2",
    slug: "cctv-security-systems",
    category: "CCTV & Security Systems",
    name: "CCTV & Security Systems",
    imageUrl: CC_CAM,
    description: "Security cameras and surveillance solutions for homes, offices, shops, schools, and businesses.",
    brands: ["Dahua", "Hikvision", "EZVIZ", "TP-Link Tapo"],
    specs: ["Surveillance Cameras", "NVR & DVR Systems", "Smart Home Security", "Mobile Live View Setup"]
  },
  {
    id: "p3",
    slug: "networking-devices",
    category: "Networking Devices",
    name: "Networking Devices",
    imageUrl: Ap,
    description: "Networking equipment for fast and reliable internet connectivity.",
    brands: ["LB-LINK", "Ruijie", "D-Link", "Netis", "Alfa Network"],
    specs: ["Wi-Fi Routers", "Access Points", "Network Switches", "Network Cables"]
  },
  {
    id: "p4",
    slug: "printers",
    category: "Printers",
    name: "Printers",
    imageUrl: Printer,
    description: "Printers for home, office, education, and business use.",
    brands: ["Epson", "Canon", "Brother"],
    specs: ["InkTank Printers", "Laser Printers", "Multifunction Copiers", "All-In-One Wireless Printers"]
  },
  {
    id: "p5",
    slug: "computer-accessories",
    category: "Computer Accessories",
    name: "Computer Accessories",
    imageUrl: Peripheral,
    description: "Essential computer accessories and peripherals for work, gaming, and everyday use.",
    brands: ["Dell", "HP", "ASUS", "Canon", "Epson"], // General accessories brands supported
    specs: [
      "Mouse & Keyboard",
      "Headphones & Speakers",
      "Microphones & Webcams",
      "USB Hubs & External Storage",
      "Cables & Adapters & More"
    ]
  }
];