import { useState } from 'react';
import { Link } from 'react-router-dom';
import DownloadImg from "../assets/image/install.jpg";
import {
  ChevronRight,
  ChevronDown,
  Download,
  Folder,
  Clock,
  ShieldCheck,
  Server,
  Loader2,
  AlertCircle,
  Sparkles
} from 'lucide-react';

import { useFileTree, type WebNode } from '../useFileTree';
import { getFileIcon } from '../components/fileIconHelper';

// Recursive Table Row Component for WebNode structure
function FileTableRow({
  node,
  depth = 0,
  getDownloadUrl
}: {
  node: WebNode;
  depth?: number;
  getDownloadUrl: (id: string) => string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Dynamic padding calculation for indentations
  const indentationStyle = { paddingLeft: `${(depth * 24) + 16}px` };

  if (node.isFolder) {
    const childCount = node.children?.length || 0;

    return (
      <>
        <tr
          onClick={() => setIsOpen(!isOpen)}
          className="border-b border-slate-100 hover:bg-slate-50 transition cursor-pointer group"
        >
          <td style={indentationStyle} className="py-4 flex items-center gap-3">
            <span className="text-slate-400 group-hover:text-[#066291] transition-colors">
              {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </span>
            <Folder className="w-5 h-5 text-[#066291] fill-sky-500/10" />
            <span className="font-bold text-slate-800 text-sm">{node.name}</span>
          </td>
          <td className="py-4 px-4 text-xs text-slate-500 font-bold hidden sm:table-cell">
            {childCount > 0 ? `${childCount} files` : 'Empty Folder'}
          </td>
          <td className="py-4 px-4 text-right text-xs">
            {/* Folders don't have direct downloads */}
          </td>
        </tr>

        {isOpen && node.children && (
          node.children.map((child) => (
            <FileTableRow
              key={child.id}
              node={child}
              depth={depth + 1}
              getDownloadUrl={getDownloadUrl}
            />
          ))
        )}
      </>
    );
  }

  // File Row Rendering
  return (
    <tr className="border-b border-slate-50 hover:bg-slate-50/70 transition group">
      <td style={indentationStyle} className="py-4 flex items-center gap-3">
        <div className="ml-4 shrink-0 flex items-center justify-center">
          {getFileIcon(node.name)}
        </div>
        <span className="text-sm text-slate-600 font-semibold truncate max-w-[200px] sm:max-w-md">
          {node.name}
        </span>
      </td>
      <td className="py-4 px-4 text-xs text-slate-500 font-bold hidden sm:table-cell">
        Standard Utility Tool
      </td>
      <td className="py-4 px-4 text-right">
        <a
          href={getDownloadUrl(node.id)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 bg-[#066291] hover:bg-[#044e74] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl transition-colors shadow-sm"
        >
          <Download className="w-3.5 h-3.5" /> Download
        </a>
      </td>
    </tr>
  );
}

export default function Downloads() {
  const { treeData, isLoading, error, getDownloadUrl } = useFileTree('http://localhost:5000');

  return (
    <div className="font-sans text-slate-900 bg-white overflow-x-hidden">

      {/* 1. PREMIUM HERO SECTION */}
      <section className="relative w-screen pt-28 pb-16 flex items-center ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] bg-white bg-[size:40px_40px] bg-[linear-gradient(to_right,rgba(226,232,240,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(226,232,240,0.4)_1px,transparent_1px)] border-b border-slate-100">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none animate-pulse duration-[6000ms]" />
        <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-slate-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Block */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              <Link to="/" className="hover:text-[#066291] transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-slate-600">Downloads</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100">
              <span className="text-[#066291] text-xs">★</span>
              <span className="text-xs font-semibold text-slate-700 tracking-wide uppercase">
                Utility & Drivers Portal
              </span>
            </div>


            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] max-w-2xl">
              Download Center & <br />
              <span className="relative inline-block text-[#066291]">
                Utility Tools
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-lg">
              Get the latest software, printer setup helpers, and driver updates to keep your computer, laptop, and networking systems running smoothly.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 bg-sky-50 border border-sky-100 text-[#066291] text-xs font-bold px-4 py-2 rounded-full">
                <ShieldCheck className="w-4 h-4 text-[#066291]" /> Safe & Virus-Free Files
              </span>
              <span className="inline-flex items-center gap-1.5 bg-sky-50 border border-sky-100 text-[#066291] text-xs font-bold px-4 py-2 rounded-full">
                <Server className="w-4 h-4 text-sky-600" /> Fast Download Speeds
              </span>
            </div>
          </div>

          {/* Right Image Frame */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center order-1 lg:order-2">
            <div className="w-full max-w-[400px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 transform hover:scale-[1.02] transition-transform duration-300">
              <img
                src={DownloadImg}
                alt="Secure Servers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. REPOSITORY EXPLORER SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pb-4 border-b border-slate-100">
          <div>
            <span className="text-[10px] font-bold text-[#066291] uppercase tracking-widest block mb-1">Explorer</span>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Available Software Archives</h2>
            <div className="text-xs text-slate-500 font-semibold mt-2 flex items-center gap-2">
              <span className="text-slate-400">root</span>
              <ChevronRight className="w-3 h-3 text-slate-300" />
              <span className="text-slate-700">archives</span>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 border border-slate-200 bg-slate-50 px-4 py-2 rounded-xl text-xs text-slate-600 font-bold shadow-sm">
            <Clock className="w-4 h-4 text-slate-400" /> Connection: Active & Synced
          </div>
        </div>

        {/* File Tree Table */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-bold">
                <th className="py-4 px-6 w-1/2 sm:w-auto">File / Folder Name</th>
                <th className="py-4 px-4 hidden sm:table-cell">Type</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Async Loading State */}
              {isLoading && (
                <tr>
                  <td colSpan={3} className="py-16 text-center text-sm text-slate-500">
                    <div className="flex items-center justify-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin text-[#066291]" />
                      <span className="font-bold">Scanning files repository...</span>
                    </div>
                  </td>
                </tr>
              )}

              {/* Fetch Error State */}
              {error && (
                <tr>
                  <td colSpan={3} className="py-16 px-6">
                    <div className="flex items-center justify-center gap-2 bg-red-50 border border-red-100 rounded-2xl p-4 max-w-xl mx-auto text-red-600 text-sm">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span className="font-semibold">{error}</span>
                    </div>
                  </td>
                </tr>
              )}

              {/* Empty State */}
              {!isLoading && !error && treeData.length === 0 && (
                <tr>
                  <td colSpan={3} className="py-16 text-center text-sm text-slate-400 italic">
                    The software archive is currently empty.
                  </td>
                </tr>
              )}

              {/* Render File Tree */}
              {!isLoading && !error && treeData.map((node) => (
                <FileTableRow
                  key={node.id}
                  node={node}
                  getDownloadUrl={getDownloadUrl}
                />
              ))}
            </tbody>
          </table>

          {/* Table Footer */}
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500 font-bold">
            <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-[#066291]" /> Dynamic File Syncer Active</span>
            <span>Files listed: {treeData.length}</span>
          </div>
        </div>
      </section>

      {/* 3. FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-[#0f172a] rounded-2xl p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">

          <div className="relative z-10 space-y-6 max-w-xl text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Can't Find the Right Driver or Software?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              If you need a specific motherboard firmware, printer driver setup, or diagnostic tool not listed above, contact our technical team and we will find it for you.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/contact"
                className="bg-[#066291] hover:bg-[#044e74] text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm shadow-[#066291]/15"
              >
                Request Software File
              </Link>
              <a
                href="tel:+977-123456789"
                className="bg-transparent border border-slate-500 hover:border-slate-300 text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-colors"
              >
                Call Tech Support
              </a>
            </div>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none flex items-center justify-center overflow-hidden">
            <Folder className="w-96 h-96 text-white rotate-45 transform translate-x-12" />
          </div>
        </div>
      </section>

    </div>
  );
}