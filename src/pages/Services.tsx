import { Cpu, HardDrive, ShieldAlert, Network, Layers, RefreshCw } from 'lucide-react';

interface ServiceDetail {
  icon: React.ReactNode;
  title: string;
  description: string;
  turnaround: string;
  features: string[];
}

export default function Services() {
  const serviceCatalog: ServiceDetail[] = [
    {
      icon: <Cpu className="w-6 h-6 text-blue-600" />,
      title: "Custom PC Engineering",
      description: "Complete assembly, hardware optimization, and stressful thermal benchmarking for custom rigs.",
      turnaround: "1-2 Business Days",
      features: ["Gaming & Streaming Rigs", "Deep Learning Workstations", "Cable Management"]
    },
    {
      icon: <HardDrive className="w-6 h-6 text-blue-600" />,
      title: "Hardware Component Upgrades",
      description: "Safe extraction and scaling of system memory, storage drives, and premium processing layers.",
      turnaround: "Same-Day Service",
      features: ["NVMe SSD Cloning", "RAM Expansion Arrays", "GPU Upgrades"]
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-blue-600" />,
      title: "System Diagnostic & Recovery",
      description: "Deep diagnostic scanning to isolate faulty motherboard circuits or physical component errors.",
      turnaround: "24-48 Hours",
      features: ["Thermal Paste Replacement", "Power Supply Testing", "Component Stress Diagnostics"]
    },
    {
      icon: <Network className="w-6 h-6 text-blue-600" />,
      title: "Local Network Infrastructure",
      description: "Physical routing of network cabling, switch installations, and secure hardware configuration for small offices.",
      turnaround: "Scheduled Appointment",
      features: ["Router & Switch Deployment", "Ethernet Port Crimping", "NAS Storage Clusters"]
    },
    {
      icon: <Layers className="w-6 h-6 text-blue-600" />,
      title: "OS & Bare-Metal Installations",
      description: "Clean configuration of core operating systems along with your necessary deployment packages.",
      turnaround: "2-4 Hours",
      features: ["Windows/Linux Clean Install", "Partition Optimization", "Driver Optimization"]
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-blue-600" />,
      title: "Preventative Maintenance",
      description: "Comprehensive physical cleaning, static decontamination, and mechanical component servicing.",
      turnaround: "Same-Day Service",
      features: ["High-Pressure Dust Extraction", "Fan Lubrication & Balancing", "Airflow Path Redirection"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Technical Service Engineering</h1>
        <p className="text-slate-600 mt-3 text-sm leading-relaxed">
          Techlite Group delivers physical component deployment and structural workstation configurations matching precise industry specifications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceCatalog.map((service, idx) => (
          <div key={idx} className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg w-fit mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed mb-4">{service.description}</p>
              
              <ul className="space-y-1.5 border-t border-slate-100 pt-4 mb-6">
                {service.features.map((feat, fIdx) => (
                  <li key={fIdx} className="text-xs text-slate-500 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 px-3 py-2 rounded-lg flex justify-between items-center text-xs">
              <span className="text-slate-400 font-medium">Est. Turnaround</span>
              <span className="font-semibold text-slate-700">{service.turnaround}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}