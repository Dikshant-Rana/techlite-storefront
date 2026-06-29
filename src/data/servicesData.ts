
import Upgrade from '../assets/image/upgrade.jpg';
import Repair from '../assets/image/comp-repair.jpg';
import Router from '../assets/image/tplink.jpg';

export interface ServiceItem {
  id: string;
  slug: string;
  category: string;
  title: string;
  imageUrl: string;

  desc: string;
  longDesc: string;

  tags: string[];

  problems: string[];
  services: string[];
  features: string[];
  whyChooseUs: string[];
  process: string[];

  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "1",
    slug: "computer-laptop-printer-repair",
    category: "REPAIR & SERVICING",
    title: "Computer, Laptop & Printer Repair",
    imageUrl: Repair,
    desc: "Professional repair, servicing, troubleshooting, and maintenance for desktop computers, laptops, and printers from all major brands.",
    longDesc: "Technology problems can interrupt your work, studies, or business. Whether your computer won't turn on, your laptop has a broken screen, or your printer refuses to print, our experienced technicians are here to help. We provide reliable repair and servicing for desktop computers, laptops, and printers using quality parts and proven repair techniques.\n\nOur team begins every repair with a thorough diagnosis to identify the root cause of the problem. We then explain the issue in simple language, provide a clear quotation, and carry out the repair only after your approval. From routine servicing to complex hardware repairs, we aim to restore your device quickly and efficiently.\n\nBefore returning your device, we perform comprehensive testing to ensure everything works properly. Whether you are a student, home user, office, school, or business, we are committed to keeping your technology running smoothly.",
    tags: [
      "Computer Repair",
      "Laptop Repair",
      "Printer Repair",
      "Servicing"
    ],
    problems: [
      "Computer or laptop won't turn on",
      "Laptop screen is cracked or damaged",
      "Computer running very slowly",
      "Frequent system crashes or freezing",
      "Laptop overheating or noisy fan",
      "Keyboard or touchpad not working",
      "Battery or charging problems",
      "Printer not printing documents",
      "Paper jams or poor print quality",
      "Printer not connecting to the computer or Wi-Fi"
    ],
    services: [
      "Desktop computer repair",
      "Laptop repair and servicing",
      "Printer repair and maintenance",
      "Hardware diagnostics and troubleshooting",
      "Screen replacement",
      "Keyboard and battery replacement",
      "Cooling fan cleaning and thermal paste replacement",
      "Operating system installation and driver setup",
      "Printer setup and configuration",
      "Routine preventive maintenance and internal cleaning"
    ],
    features: [
      "Repairs for desktops, laptops, and printers in one place",
      "Experienced technicians using professional diagnostic tools",
      "Quality replacement parts whenever required",
      "Complete cleaning and preventive maintenance",
      "Thorough testing before delivery",
      "Transparent pricing with no hidden costs",
      "Reliable after-service support"
    ],
    whyChooseUs: [
      "Experienced technicians with years of repair expertise",
      "Honest diagnosis and clear explanations",
      "Affordable and transparent pricing",
      "Support for all major brands",
      "Fast turnaround to minimize downtime",
      "Quality workmanship backed by careful testing",
      "Friendly customer service before and after repair"
    ],
    process: [
      "Bring your device to our store or contact us for assistance.",
      "Our technicians perform a complete inspection and diagnosis.",
      "We explain the issue and provide a clear repair quotation.",
      "After approval, we repair and service your device.",
      "Every repaired device is thoroughly tested for performance and reliability.",
      "Your device is cleaned, verified, and returned ready to use."
    ],
    faqs: [
      {
        question: "Which brands do you repair?",
        answer: "We repair most major brands of desktop computers, laptops, and printers, including HP, Dell, Lenovo, Acer, Asus, Canon, Epson, Brother, Samsung, and many others."
      },
      {
        question: "Can you repair both hardware and software issues?",
        answer: "Yes. We repair hardware problems such as damaged screens, faulty components, and printer issues, as well as software problems including Windows installation, driver issues, and system troubleshooting."
      },
      {
        question: "How long does a repair usually take?",
        answer: "Most repairs are completed within 1 to 3 working days, depending on the complexity of the issue and the availability of replacement parts."
      },
      {
        question: "Do you provide a quotation before starting the repair?",
        answer: "Yes. After diagnosing the problem, we explain the issue and provide a quotation before carrying out any repair work."
      },
      {
        question: "Will my files be safe during the repair?",
        answer: "We always handle customer data carefully. If a repair involves any risk to your files, we will inform you beforehand and recommend a backup whenever possible."
      },
      {
        question: "Do you also provide regular servicing?",
        answer: "Yes. We offer preventive servicing, internal cleaning, cooling system maintenance, and printer servicing to help improve performance and extend the lifespan of your devices."
      }
    ]
  },
  {
    id: "2",
    slug: "hardware-upgrades",
    category: "UPGRADES",
    title: "Hardware Upgrades",
    imageUrl: Upgrade,
    desc: "Speed up your slow computer with fast solid-state drives, extra memory, and better storage options.",
    longDesc: "If your computer takes several minutes to start up or freezes when you open a few internet tabs, you do not need to buy a brand new computer. Often, a simple and affordable upgrade to your internal components can make your existing machine run up to ten times faster. We specialize in upgrading older laptops and desktops to meet today's software demands.\n\nWe install high-speed Solid-State Drives (SSDs) to replace slow, traditional hard drives. This upgrade dramatically reduces start times and makes applications open instantly. We also upgrade Random Access Memory (RAM), which allows your computer to handle multiple tasks at the same time without slowing down.\n\nOur team ensures that your files, photos, and settings are safely moved over to your new drive during the upgrade. We only use reliable hardware from top-tier brands, ensuring your upgraded computer stays fast and stable for years to come.",
    tags: ["Speed Boost", "Need More Storage", "Extra Memory", "Computer Speedup"],
    problems: [
      "Computer takes too long to turn on and load",
      "Running out of space for photos, videos, and files",
      "System freezes or stutters when opening multiple apps",
      "Web pages and browser tabs load very slowly",
      "Error messages saying storage space is full",
      "Applications take a long time to respond",
      "Older computer cannot run newer software versions",
      "Computer slows down when copy-pasting files",
      "Gaming or editing software is extremely laggy",
      "Loud clicking noises coming from the hard drive"
    ],
    services: [
      "Fast SSD installation and setup",
      "RAM memory expansion",
      "Traditional hard drive replacement",
      "Full data cloning from old drive to new drive",
      "Additional storage drive installation",
      "Old hard drive conversion into external USB drive",
      "System speed checks and recommendations",
      "Internal component cleaning during upgrades",
      "Thermal paste replacement for better cooling",
      "Graphics card installation for desktop computers"
    ],
    features: [
      "Tested hardware compatibility checks",
      "Only high-quality SSDs and RAM from trusted brands used",
      "Complete transfer of your Windows operating system and files",
      "Zero data loss guarantee during drive cloning",
      "Professional anti-static handling of electronic parts",
      "Complimentary internal dust removal during installation",
      "Detailed post-upgrade speed verification"
    ],
    whyChooseUs: [
      "Upgrades are much cheaper than buying a new computer",
      "Certified upgrade parts with official replacement warranties",
      "Fast same-day service for standard SSD and RAM installs",
      "Step-by-step guidance on what parts are best for your budget",
      "No data loss—your files stay exactly where they were",
      "Clear advice on whether an upgrade is worth your money",
      "Local support in Nepal with physical warranty coverage"
    ],
    process: [
      "Bring your slow computer to our store for a free speed evaluation.",
      "We check your system specs and recommend the best upgrade option.",
      "We provide a clear price for the parts and labor.",
      "We copy your entire operating system and files to the new drive.",
      "We physically install the upgrades and clean the internal fans.",
      "We test the computer's speed and verify all data is intact.",
      "You test your upgraded, fast computer and take it home."
    ],
    faqs: [
      {
        question: "Will upgrading my drive delete my personal files?",
        answer: "No, we use professional cloning software that copies everything—including Windows, settings, files, and photos—to your new drive. Your computer will look exactly the same, just much faster."
      },
      {
        question: "How much faster will my computer be after an SSD upgrade?",
        answer: "Most customers see a massive difference. Startup times typically drop from a few minutes to under 20 seconds, and programs open almost instantly."
      },
      {
        question: "Can my specific laptop model be upgraded?",
        answer: "Almost all laptops and desktop computers can be upgraded. We check your device's model details to confirm the maximum supported RAM and correct SSD type."
      },
      {
        question: "What is the difference between RAM and storage?",
        answer: "RAM is temporary memory that helps your computer run multiple programs at once. Storage (SSD or HDD) is where your files, photos, and Windows are permanently saved."
      },
      {
        question: "Do you return my old hard drive?",
        answer: "Yes, we always return your old parts. We can also place your old hard drive into an external casing so you can use it as a portable USB backup drive."
      },
      {
        question: "How long does a hard drive upgrade take?",
        answer: "If you bring your device in the morning, we can usually finish the drive upgrade, data transfer, and cleaning by the afternoon of the same day."
      }
    ]
  },
  {
    id: "3",
    slug: "router-setup-network-wiring",
    category: "NETWORKING",
    title: "Router Setup & Network Wiring",
    imageUrl: Router,
    desc: "Professional internet and Wi-Fi setup, physical cable wiring, network configuration, and signal extension for homes and offices.",
    longDesc: "A weak internet connection or spotty Wi-Fi can ruin your work-from-home day, online classes, or business operations. We provide complete home and office network setup services to ensure you have fast, reliable internet in every corner of your property. Our team helps you configure your routers, set up network extenders, and lay high-quality physical network cables.\n\nWe design network layouts that prevent wireless dead zones. If you have a large home, a multi-story building, or a busy office, we can set up modern smart Wi-Fi systems that automatically keep you connected to the strongest signal as you walk around.\n\nWe also handle physical network wiring. Our technicians run cables neatly along walls or inside ceilings to connect computers, smart TVs, and printers directly, ensuring the fastest possible speed without messy wires cluttering your space.",
    tags: ["Wi-Fi Setup", "Network Wiring", "Internet Setup", "Signal Booster"],
    problems: [
      "Wi-Fi not reaching all rooms or floors",
      "Internet drops out frequently or runs very slowly",
      "Too many connected devices causing network slowdowns",
      "Messy internet cables lying around the office or house",
      "Smart TV buffering constantly when streaming video",
      "Difficulty setting up a new internet router",
      "Forgot Wi-Fi password or need to block unwanted users",
      "Network printer not connecting to computers",
      "Poor connection in concrete or multi-story buildings",
      "Interference from neighboring Wi-Fi networks"
    ],
    services: [
      "New router installation and setup",
      "Wi-Fi range extender configuration",
      "Physical network cabling and wall jack installation",
      "Whole-home smart Wi-Fi setup",
      "Office network design and wiring",
      "Wi-Fi password and network security setup",
      "Internet connection troubleshooting",
      "Network printer and file sharing setup",
      "Guest Wi-Fi network configuration",
      "Old network cable cleanup and organization"
    ],
    features: [
      "Neat and professional cable runs with casing",
      "Custom network plans for multi-story buildings",
      "High-speed cabling used for maximum speed transmission",
      "Setup of parental controls to block bad websites",
      "Network security settings to keep hackers out",
      "Clear marking and testing of all connection ports",
      "Configuration of easy guest access pages"
    ],
    whyChooseUs: [
      "Experienced technicians who understand local house builds in Nepal",
      "Neat wiring layouts with minimal visual impact",
      "Use of high-quality, durable cables and connectors",
      "Post-setup testing to guarantee fast speeds in every room",
      "Clear explanation on how to manage your own network",
      "Affordable pricing on routers, switches, and wiring components",
      "Quick response for home or office internet emergencies"
    ],
    process: [
      "Contact us to describe your space or request a site visit.",
      "We check your layout and recommend the best router and cable points.",
      "We provide a clear layout plan and cost estimate.",
      "Our team runs the cables neatly and installs the network hardware.",
      "We configure the router settings and secure your Wi-Fi network.",
      "We walk through the property with you to test wireless speeds.",
      "We show you how to restart the router and manage your password."
    ],
    faqs: [
      {
        question: "How do I fix Wi-Fi dead zones in my multi-story house?",
        answer: "We recommend setting up a smart system or running physical network cables to router points on each floor. This ensures a full strength signal throughout the house."
      },
      {
        question: "Is a wired cable connection better than Wi-Fi?",
        answer: "Yes, a wired cable connection is always faster, more stable, and not affected by walls or other wireless devices. It is best for smart TVs, gaming consoles, and office computers."
      },
      {
        question: "Can you help me change my Wi-Fi name and password?",
        answer: "Yes, we configure your settings and teach you how to easily log in and change your password yourself in the future using a mobile app or browser."
      },
      {
        question: "Do you supply the network cables and routers?",
        answer: "Yes, we supply high-quality routers, network switches, extenders, and outdoor-grade network cables at competitive prices, or we can use hardware you already bought."
      },
      {
        question: "Can I limit the internet speed for certain devices or users?",
        answer: "Yes, we can set up your router settings to allocate bandwidth fairly, ensuring one person downloading files does not slow down the internet for everyone else."
      },
      {
        question: "Will you hide the cables when wiring my office?",
        answer: "Absolutely. We use professional plastic channels, clips, and wall boxes to hide cables neatly along baseboards or ceilings, keeping your space clean and safe."
      }
    ]
  },
  {
    id: "4",
    slug: "cctv-installation-servicing",
    category: "SECURITY",
    title: "CCTV Installation & Servicing",
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
    desc: "Complete security camera setup, mobile viewing configuration, repair services, and routine maintenance for homes and businesses.",
    longDesc: "Keeping your family, home, and business safe is a top priority. We install high-definition security camera systems that let you monitor your property 24 hours a day, 7 days a week. Our services include placing cameras in the best viewing spots, running secure wiring, and setting up recording boxes so you can review footage whenever you need to.\n\nWe connect your camera system to the internet, allowing you to watch live video feeds directly on your mobile phone, tablet, or laptop from anywhere in the world. Whether you are at work or traveling outside Nepal, you can check in on your property with a single tap.\n\nIf you have an existing system that has stopped working, has blurry video, or is not recording, our maintenance team can diagnose and repair it. We clean camera lenses, check power supplies, replace damaged cables, and fix recording hard drives to keep your security system running without interruption.",
    tags: ["Set Up CCTV Cameras", "Security Cameras", "Mobile Viewing Setup", "CCTV Servicing"],
    problems: [
      "Need to secure home or business against theft",
      "Existing camera showing black screen or no signal",
      "Camera video is very blurry, dark, or out of focus",
      "CCTV system stopped recording past footage",
      "Cannot view cameras on mobile phone anymore",
      "Cameras not showing clear images at night",
      "CCTV system beep sound or error warnings",
      "Damaged camera wires due to rain or pests",
      "Recording storage fills up too quickly",
      "Need to move cameras to different locations"
    ],
    services: [
      "Complete home security camera installation",
      "Office and shop surveillance systems setup",
      "Mobile phone remote viewing configuration",
      "CCTV recorder replacement and configuration",
      "Blurry camera lens cleaning and adjustment",
      "Damaged security cable replacement",
      "Security system power supply repairs",
      "Storage hard drive installation for longer recording",
      "Night vision camera upgrades",
      "Regular system health checks and servicing"
    ],
    features: [
      "High-definition cameras with crisp video clarity",
      "Clear night-vision capability for dark hours",
      "Weatherproof cameras built to withstand rain and dust",
      "Easy-to-use mobile apps for remote live viewing",
      "Motion detection alerts sent to your smartphone",
      "Backup battery configuration for power cuts",
      "Clean, hidden wiring to protect system cables"
    ],
    whyChooseUs: [
      "Expert placement to avoid blind spots around your building",
      "High-quality, reliable camera brands with local warranties",
      "Neat wiring that does not ruin the look of your house",
      "Simple training on how to playback and save video clips",
      "Honest advice on how many cameras you actually need",
      "Affordable pricing packages for homes and small shops",
      "Reliable repair service when your cameras stop working"
    ],
    process: [
      "We discuss your security needs and inspect your building layout.",
      "We recommend camera types, storage size, and optimal locations.",
      "We provide a detailed estimate for the cameras, wiring, and installation.",
      "Our technicians mount the cameras and run the cables neatly.",
      "We set up the recording box and connect the system to your router.",
      "We install the viewing app on your phone and configure settings.",
      "We show you how to view live feeds, playback recordings, and save clips."
    ],
    faqs: [
      {
        question: "Can I view my security cameras on my phone when I am away?",
        answer: "Yes, as long as your home internet is working, we connect the recording system to your router so you can see live views and recordings on your phone from anywhere."
      },
      {
        question: "Do the cameras record when there is a power cut?",
        answer: "Standard cameras turn off during power cuts. However, we can install backup power supplies (Inverters or specialized DC UPS) to keep your cameras recording during load-shedding."
      },
      {
        question: "How many days of video can the system save?",
        answer: "This depends on the hard drive size and the number of cameras. Typically, we configure systems to store between 15 to 30 days of continuous recording before automatically overwriting older files."
      },
      {
        question: "Do you install outdoor cameras that can handle rain?",
        answer: "Yes, we use certified weatherproof outdoor cameras that are designed to withstand heavy rain, direct sunlight, and local dust conditions in Nepal."
      },
      {
        question: "What happens when the recording storage is full?",
        answer: "The system is set up to automatically delete the oldest day of footage to make room for the new recording, so you never have to clear it manually."
      },
      {
        question: "Can I hear audio through the cameras?",
        answer: "Yes, we install cameras with built-in microphones that allow you to hear clear audio along with the video on your mobile app or monitor."
      }
    ]
  },
  {
    id: "5",
    slug: "custom-pc-building",
    category: "CUSTOM BUILDS",
    title: "Custom PC Building",
    imageUrl: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1200&q=80",
    desc: "Build a computer for gaming, office work, video editing, or studying, tailored exactly to your budget and needs.",
    longDesc: "Standard ready-made computers often come with cheap internal parts or features you do not need. When you choose a custom-built computer, you get to decide exactly where your money goes. We help you design and build a desktop computer that fits your exact needs, whether you are looking for a reliable office workstation, a student desktop, or a high-end gaming system.\n\nOur custom computer service makes the process easy. You do not need to know any technical details; simply tell us what you want to use the computer for and what your budget is. We select compatible, high-quality components and compile them into a balanced system design.\n\nWe assemble your new computer with extreme care, ensuring neat wiring for clean airflow and cooler temperatures. Before we hand over the PC, we install the operating system, update all essential drivers, and run stress tests to ensure everything is stable and ready to go.",
    tags: ["Custom PC", "Build a Computer", "Gaming PC", "Office Workstation"],
    problems: [
      "Ready-made store computers are overpriced or weak",
      "Do not know which computer parts work together",
      "Need a desktop computer for high-end video editing",
      "Want to build a gaming PC but don't know where to start",
      "Office computers slowing down work productivity",
      "Need a reliable computer for student online classes",
      "Standard computers overheating when running heavy programs",
      "Want to choose a specific computer case and color theme",
      "Need a computer that can be easily upgraded in the future",
      "Unsure about component warranties on pre-built systems"
    ],
    services: [
      "Custom computer design and component matching",
      "Professional PC assembly and wiring",
      "Gaming desktop PC builds",
      "Office and business computer setups",
      "Student and home desktop building",
      "Video editing and design workstation builds",
      "Computer case and cooling fan installation",
      "Operating system and basic software setup",
      "System stress testing and performance tuning",
      "Future upgrade path advice and planning"
    ],
    features: [
      "Perfect part matching to ensure system stability",
      "Clean cable routing for optimal cooling airflow",
      "Rigorous quality testing before you pick it up",
      "Individual brand warranties on every single component",
      "Custom cooling options to prevent overheating",
      "Personalized software configuration based on your needs",
      "Clean look and styling tailored to your tastes"
    ],
    whyChooseUs: [
      "We explain parts using simple, everyday language",
      "No inflated pre-built markup—you pay for the parts you get",
      "Genuine, brand-new components sourced from authorized importers",
      "Full setup, including Windows and drivers, ready to run",
      "Support and repair help if you run into issues later",
      "Flexible component options to fit your exact budget",
      "Free technical advice and component checks"
    ],
    process: [
      "Tell us what you want to use the PC for and your budget.",
      "We send you a list of recommended parts with clear pricing.",
      "Once you approve, we gather the components from our stock.",
      "Our technicians assemble the PC carefully with neat wiring.",
      "We install the operating system, drivers, and run stability tests.",
      "We invite you to test the computer and check its performance.",
      "You receive your custom computer along with all original component boxes."
    ],
    faqs: [
      {
        question: "Do I need to buy all the parts myself?",
        answer: "No, we source all the components for you from reliable suppliers at competitive prices, or you can bring parts you already have and we will assemble them."
      },
      {
        question: "Can I upgrade a custom PC in the future?",
        answer: "Yes! This is one of the best reasons to build a custom computer. We build systems using standard layouts, making it very easy to add more RAM, storage, or better graphics cards later."
      },
      {
        question: "Is a custom PC better than a pre-built computer?",
        answer: "Yes, custom PCs are built using better quality parts, have better cooling, do not contain useless factory software, and are usually cheaper for the same performance level."
      },
      {
        question: "What software comes installed on the new computer?",
        answer: "We install a clean version of Windows (or your preferred OS), essential hardware drivers, and basic utilities so it is ready to use immediately."
      },
      {
        question: "How long does it take to build and test my PC?",
        answer: "Once we agree on the parts list, it typically takes 1 to 2 working days to collect the components, assemble the system, and complete our security and speed tests."
      },
      {
        question: "What kind of warranty do I get with a custom PC?",
        answer: "Instead of a single short system warranty, you get the individual manufacturer warranties for each part (often 2 to 5 years on RAM, power supplies, and storage)."
      }
    ]
  },
  {
    id: "6",
    slug: "data-recovery-software-installation",
    category: "SOFTWARE",
    title: "Data Recovery & Software Installation",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    desc: "Recover lost files from damaged drives, install Windows, remove viruses, and set up daily office applications securely.",
    longDesc: "Software errors, computer viruses, or accidentally deleted files can cause massive stress. If you have lost important family photos, project documents, or office database files, our data recovery team uses professional tools to restore your files from corrupt hard drives, external disks, and USB drives.\n\nWe also handle complete operating system installations and software setups. If your computer is running slow, showing error messages, or infected with malware, a fresh installation of Windows can make it feel like new. We configure your computer safely, install essential drivers, and set up daily programs like Microsoft Office, web browsers, and antivirus utilities.\n\nOur team is committed to keeping your private information safe. We handle all data recovery and software configurations with strict confidentiality, ensuring your files are never exposed, copied, or lost during the service process.",
    tags: ["Recover Lost Files", "Install Windows", "Virus Removal", "Software Setup"],
    problems: [
      "Accidentally deleted important files or folders",
      "Hard drive corrupted and asking to be formatted",
      "Computer infected with viruses, malware, or adware",
      "Windows operating system failing to load",
      "Need to install Microsoft Office or PDF readers",
      "Lost photos or files on a USB flash drive",
      "Constant pop-up ads and security warnings",
      "Slow system startup due to background programs",
      "Forgot computer login password or locked out",
      "Drivers missing, causing no sound or no internet"
    ],
    services: [
      "Lost file and photo data recovery",
      "Fresh Windows operating system installation",
      "Complete virus and spyware removal",
      "Microsoft Office installation and setup",
      "Corrupt hard drive data retrieval",
      "USB flash drive file recovery",
      "System driver installation and updates",
      "Computer cleanup and bloatware removal",
      "Data backup plan configuration",
      "Standard PDF and utility software setup"
    ],
    features: [
      "Strict data privacy and confidentiality guarantees",
      "Deep scanning for deleted or formatted files",
      "Clean OS installs with all security patches",
      "Complete driver matching for sound, Wi-Fi, and display",
      "Safe storage of retrieved files on secure backup drives",
      "Installation of reliable, lightweight antivirus tools",
      "Removal of hidden startup programs to speed up boot"
    ],
    whyChooseUs: [
      "No recovery, no fee policy for files we cannot restore",
      "Safe and confidential handling of your personal data",
      "Use of licensed diagnostic tools for file recovery",
      "Genuine software configurations that don't crash",
      "Friendly assistance to help you configure backup habits",
      "Clear upfront quotes based on data volume and drive condition",
      "Convenient local service with high success rates"
    ],
    process: [
      "Bring your drive or laptop to us; stop using it to avoid overwriting files.",
      "We run scans to see if your lost files are recoverable.",
      "We tell you what files can be saved and provide a price quote.",
      "We recover your files and save them to a secure temporary drive.",
      "If requested, we clean your computer and install fresh Windows/software.",
      "We show you the list of recovered files to verify.",
      "We copy the recovered files to your computer or external drive."
    ],
    faqs: [
      {
        question: "Can you recover files from a hard drive that won't turn on?",
        answer: "Yes, we can extract storage chips or use hardware repair methods to access data from dead drives. In most cases, we can retrieve your important documents."
      },
      {
        question: "What should I do if I accidentally deleted my files?",
        answer: "Stop using the computer or drive immediately. Writing new files, browsing the web, or installing programs can overwrite the deleted files, making them impossible to recover."
      },
      {
        question: "Do you install pirated or cracked software?",
        answer: "No, we only install genuine operating systems and assist you in setting up free, open-source utilities or activating software using keys you purchased."
      },
      {
        question: "How long does data recovery take?",
        answer: "Basic file recovery takes 1 to 2 days. Severely damaged drives requiring deep mechanical scans can take 3 to 7 days."
      },
      {
        question: "Will virus removal delete my photos and files?",
        answer: "No, our virus removal process targets malicious files while preserving your personal documents, photos, and settings."
      },
      {
        question: "Can you recover files from a formatted USB drive?",
        answer: "Yes, in most cases we can recover files from quick-formatted USB drives and SD cards as long as new files have not been saved on top of them."
      }
    ]
  }
];