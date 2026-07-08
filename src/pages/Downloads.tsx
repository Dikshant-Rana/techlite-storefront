import { useState, Fragment, type ReactNode } from 'react';
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
  Sparkles
} from 'lucide-react';
import SEO from "../components/SEO";

import { downloadsData } from '../data/downloadsData';
import { getFileIcon } from '../components/fileIconHelper';

export default function Downloads() {
  // Track open/collapsed state of folders. Default all to collapsed.
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({});

  const toggleFolder = (folderName: string) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folderName]: !prev[folderName]
    }));
  };

  // Recursively count files in current folder and all subfolders
  const getFolderFileCount = (folder: any): number => {
    const directFiles = folder.files?.length || 0;
    const nestedFiles = folder.subfolders?.reduce((acc: number, subfolder: any) => acc + getFolderFileCount(subfolder), 0) ?? 0;
    return directFiles + nestedFiles;
  };

  const totalFiles = downloadsData.reduce((acc, folder) => acc + getFolderFileCount(folder), 0);

  // Recursive function to render rows flatly inside the existing top-level table
  const renderTreeItems = (folder: any, path: string, depth = 0): ReactNode => {
    const isOpen = !!expandedFolders[path];

    return (
      <Fragment key={path}>
        {/* Folder Row */}
        <tr
          onClick={() => toggleFolder(path)}
          className="bg-slate-50/50 hover:bg-slate-50/80 transition cursor-pointer select-none border-b border-slate-100"
        >
          <td colSpan={4} className="py-4 px-6">
            <div 
              className="flex items-center justify-between"
              style={{ paddingLeft: depth > 0 ? `${depth * 1.5}rem` : '0' }}
            >
              <div className="flex items-center gap-3">
                <span className="text-slate-400">
                  {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </span>
                <Folder className="w-5 h-5 text-[#066291] fill-sky-500/10 shrink-0" />
                <span className="font-bold text-slate-800 text-sm sm:text-base">{folder.name}</span>
              </div>
              <span className="text-xs text-slate-500 font-semibold bg-white border border-slate-100 shadow-sm px-2.5 py-1 rounded-lg">
                {getFolderFileCount(folder)} {getFolderFileCount(folder) === 1 ? 'file' : 'files'}
              </span>
            </div>
          </td>
        </tr>

        {/* Files in Folder */}
        {isOpen && folder.files?.map((file: any) => (
          <tr key={`${path}/${file.name}`} className="border-b border-slate-100 hover:bg-slate-50/30 transition group last:border-b-0">
            {/* Dynamic padding: 4rem (original pl-16) + depth indentation */}
            <td className="py-4 pr-6 sm:w-1/2" style={{ paddingLeft: `calc(4rem + ${depth * 1.5}rem)` }}>
              <div className="flex items-center gap-3">
                <div className="shrink-0 flex items-center justify-center">
                  {getFileIcon(file.name)}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm text-slate-700 font-semibold truncate max-w-[160px] sm:max-w-md">
                    {file.name}
                  </span>
                  <span className="text-[11px] text-slate-400 mt-0.5 truncate max-w-[160px] sm:max-w-md">
                    {file.description}
                  </span>
                </div>
              </div>
            </td>
            <td className="py-4 px-4 text-xs text-slate-500 font-bold hidden sm:table-cell sm:w-1/6">
              {file.version}
            </td>
            <td className="py-4 px-4 text-xs text-slate-500 font-bold hidden sm:table-cell sm:w-1/6">
              {file.size}
            </td>
            <td className="py-4 px-6 text-right sm:w-1/6">
              <a
                href={file.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#066291] hover:bg-[#044e74] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl transition-colors shadow-sm"
              >
                <Download className="w-3.5 h-3.5" /> Download
              </a>
            </td>
          </tr>
        ))}

        {/* Subfolders Mapping (Recursion) */}
        {isOpen && folder.subfolders?.map((subfolder: any) => 
          renderTreeItems(subfolder, `${path}/${subfolder.name}`, depth + 1)
        )}
      </Fragment>
    );
  };

  return (
    <>
      <SEO
        title="Download Portal | TechLite Groups"
        description="Download software, printer drivers, utilities, browsers, office applications, and more."
        url="https://techlite.com.np/downloads"
      />
      <div className="font-sans text-slate-900 bg-white overflow-x-hidden">

        {/* 1. PREMIUM HERO SECTION */}
        <section className="relative w-screen pt-30 pb-16 flex items-center ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] bg-white bg-[size:40px_40px] bg-[linear-gradient(to_right,rgba(226,232,240,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(226,232,240,0.4)_1px,transparent_1px)] border-b border-slate-100">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none animate-pulse duration-[6000ms]" />
          <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-slate-100/50 rounded-full blur-3xl pointer-events-none" />

          <div className="content-container w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Block */}
            <div className="lg:col-span-7 space-y-6 text-left">
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
        <section className="content-container py-20 space-y-8">
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
            <div className="flex flex-col items-center sm:items-end gap-1.5 w-full sm:w-auto">
              <div className="inline-flex items-center gap-2 border border-slate-200 bg-slate-50 px-4 py-2 rounded-xl text-xs text-slate-600 font-bold shadow-sm w-full sm:w-auto justify-center sm:justify-start">
                <Clock className="w-4 h-4 text-slate-400" /> Data Source: Local Database
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest sm:hidden mt-0.5 select-none animate-pulse">
                ← Swipe horizontally to scroll →
              </span>
            </div>
          </div>

          {/* File Tree Table */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-x-auto">
            <table className="w-full min-w-[500px] text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-bold">
                  <th className="py-4 px-6 sm:w-1/2">File Name</th>
                  <th className="py-4 px-4 hidden sm:table-cell sm:w-1/6">Version</th>
                  <th className="py-4 px-4 hidden sm:table-cell sm:w-1/6">Size</th>
                  <th className="py-4 px-6 text-right sm:w-1/6">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Maps over the Top-Level Folders directly recreating original layout structure */}
                {downloadsData.map((folder) => (
                  <tr key={folder.name} className="border-b border-slate-200">
                    <td colSpan={4} className="p-0">
                      <table className="w-full min-w-[500px] border-collapse">
                        <tbody>
                          {/* We use our function to recursively push all files and subfolders HERE */}
                          {renderTreeItems(folder, folder.name, 0)}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Table Footer */}
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500 font-bold">
              <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-[#066291]" /> Dynamic File Syncer Active</span>
              <span>Total files: {totalFiles}</span>
            </div>
          </div>
        </section>

        {/* 3. FINAL CALL TO ACTION */}
        <section className="content-container pb-20">
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
    </>
  );
}