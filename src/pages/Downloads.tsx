import { useState } from 'react';
import { ChevronRight, ChevronDown, Download, Folder, File as FileIcon, Clock, ShieldCheck, Server, HelpCircle, Loader2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useFileTree, type WebNode } from '../useFileTree'; // Adjust the import path as needed

// 1. Recursive Table Row Component updated for WebNode structure
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

  // Calculate dynamic indentation safely via inline styles to ensure Tailwind compilation works perfectly
  const indentationStyle = { paddingLeft: `${(depth * 24) + 16}px` };

  if (node.isFolder) {
    const childCount = node.children?.length || 0;

    return (
      <>
        <tr
          onClick={() => setIsOpen(!isOpen)}
          className="border-b border-slate-100 hover:bg-slate-50 transition cursor-pointer group"
        >
          <td style={indentationStyle} className="py-3 flex items-center gap-3">
            <span className="text-slate-400 group-hover:text-blue-600 transition-colors">
              {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </span>
            <Folder className="w-5 h-5 text-blue-600 fill-blue-600/20" />
            <span className="font-semibold text-slate-800 text-sm">{node.name}</span>
          </td>
          <td className="py-3 px-4 text-xs text-slate-500 font-medium hidden sm:table-cell">
            {childCount > 0 ? `${childCount} items` : '0 items'}
          </td>
          <td className="py-3 px-4 text-right text-xs">
            {/* Folders don't have direct download triggers */}
          </td>
        </tr>

        {/* RECURSION: Render children if the folder is expanded */}
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
    <tr className="border-b border-slate-50 hover:bg-slate-50 transition group">
      <td style={indentationStyle} className="py-3 flex items-center gap-3">
        {/* Adds visual alignment offset to balance against the folder chevron width */}
        <FileIcon className="w-4 h-4 text-slate-400 ml-4" />
        <span className="text-sm text-slate-600 font-medium truncate max-w-[200px] sm:max-w-md">
          {node.name}
        </span>
      </td>
      <td className="py-3 px-4 text-xs text-slate-500 font-medium hidden sm:table-cell">
        -- {/* Sizes can be supplemented if your backend schema expands later */}
      </td>
      <td className="py-3 px-4 text-right">
        <a
          href={getDownloadUrl(node.id)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded transition shadow-sm"
        >
          <Download className="w-3 h-3" /> Download
        </a>
      </td>
    </tr>
  );
}

// 2. The Main Page Assembly
export default function Downloads() {
  // Consume your custom file tree hook here
  const { treeData, isLoading, error, getDownloadUrl } = useFileTree('http://localhost:5000');

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">

      {/* Top Hero Section */}
      <section className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600">Security First Architecture</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Secure Cloud Cluster Delivery
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed max-w-lg">
            Access our surgical-grade hardware diagnostics and OS deployment payloads. All mirrors are synced across globally distributed secure cloud clusters with end-to-end encryption.
          </p>
          <div className="flex gap-3 pt-2">
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">
              <ShieldCheck className="w-4 h-4" /> SHA-256 Verified
            </span>
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">
              <Server className="w-4 h-4" /> 99.9% Uptime
            </span>
          </div>
        </div>

        <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg border border-slate-200">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80"
            alt="Secure Cloud Servers"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* The File Explorer Table Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Repository Explorer</h2>
            <div className="text-xs text-slate-500 font-mono mt-1 flex items-center gap-2">
              <span className="text-slate-400">root</span>
              <ChevronRight className="w-3 h-3 text-slate-300" />
              <span className="text-slate-700 font-semibold">archives</span>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 border border-slate-200 bg-slate-50 px-3 py-1.5 rounded text-xs text-slate-600 font-medium shadow-sm">
            <Clock className="w-3.5 h-3.5 text-slate-400" /> Remote Storage Status: Connected
          </div>
        </div>

        {/* Dynamic Data Table Engine */}
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-semibold">
                <th className="py-3 px-4 w-1/2 sm:w-auto">Name</th>
                <th className="py-3 px-4 hidden sm:table-cell">Size</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Handling Async Loading State */}
              {isLoading && (
                <tr>
                  <td colSpan={3} className="py-12 text-center text-sm text-slate-500">
                    <div className="flex items-center justify-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
                      <span>Fetching remote repository tree...</span>
                    </div>
                  </td>
                </tr>
              )}

              {/* Handling Fetch Error State */}
              {error && (
                <tr>
                  <td colSpan={3} className="py-12 text-center text-sm text-red-500">
                    <div className="flex items-center justify-center gap-2 bg-red-50 border border-red-100 rounded-md p-4 mx-4">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  </td>
                </tr>
              )}

              {/* Render Nodes when Data is Ready */}
              {!isLoading && !error && treeData.length === 0 && (
                <tr>
                  <td colSpan={3} className="py-12 text-center text-sm text-slate-400 italic">
                    Repository is currently empty.
                  </td>
                </tr>
              )}

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
          <div className="bg-slate-50 px-4 py-3 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500 font-medium">
            <span>Dynamic Sync Enabled</span>
            <span>Root Nodes: {treeData.length}</span>
          </div>
        </div>
      </section>

      {/* Bottom Information Panels */}
      <section className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-50 border border-slate-200 p-8 rounded-xl space-y-4">
          <h3 className="text-lg font-bold text-slate-900">Integrity Check</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Every download includes a signed hash. Ensure your environment matches our verified checksums before execution to guarantee zero data corruption during transfer.
          </p>
          <div className="bg-white border border-slate-200 p-4 rounded font-mono text-xs text-slate-600 shadow-inner overflow-x-auto">
            <p className="text-slate-400">$ openssl sha256 techlite_setup.iso</p>
            <p className="text-slate-700 font-semibold mt-1">&gt; 3a7bd3e236083d4e1c1c463ee8d54...9183</p>
          </div>
        </div>

        <div className="bg-blue-700 text-white p-8 rounded-xl text-center space-y-6 flex flex-col justify-center shadow-md">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <HelpCircle className="w-6 h-6 text-blue-100" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Need Assistance?</h3>
            <p className="text-sm text-blue-100 leading-relaxed max-w-[250px] mx-auto">
              Our deployment engineering team is available for custom cluster requests.
            </p>
          </div>
          <Link to="/contact" className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-bold text-sm px-6 py-2.5 rounded shadow transition w-fit mx-auto">
            Contact Ops
          </Link>
        </div>
      </section>

    </div>
  );
}