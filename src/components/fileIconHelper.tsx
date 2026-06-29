import React from 'react';
import { 
  Folder, 
  File as FileIcon, 
  FileText, 

  FileImage, 
  FileVideo, 
  FileAudio, 
  FileSpreadsheet, 
  Presentation,
  Archive,
  Disc,
  AppWindow
} from 'lucide-react';

// Import local assets
import winrarLogo from '../assets/image/winrar_logo.png';
import anydeskLogo from '../assets/image/anydesk-logo.png';
import officeLogo from '../assets/image/microsoft-office-2013-logo-svgrepo-com.svg';
import vlcLogo from '../assets/image/VLC_Icon.png';
import photoshopLogo from '../assets/image/adobe-photoshop-2.svg';
import chromeLogo from '../assets/image/chrome.svg';
import firefoxLogo from '../assets/image/firefox.svg';
import Alhua from '../assets/brands/alhua.svg';

// Custom inline SVGs for other software logos to ensure high fidelity and self-containment


const TeamViewerIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#1F94F3" />
    <path d="M6 10L10 6V9H14V6L18 10L14 14V11H10V14L6 10Z" fill="white" />
  </svg>
);

const WordIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#2B579A" />
    <text x="12" y="16" fill="white" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">W</text>
  </svg>
);

const ExcelIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#217346" />
    <text x="12" y="16" fill="white" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">E</text>
  </svg>
);

const PowerPointIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#D24726" />
    <text x="12" y="16" fill="white" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">P</text>
  </svg>
);

const ZoomIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="12" fill="#2D8CFF" />
    <path d="M6 9H13C14.1 9 15 9.9 15 11V15C15 16.1 14.1 17 13 17H6C4.9 17 4 16.1 4 15V11C4 9.9 4.9 9 6 9Z" fill="white" />
    <path d="M16 11.5L20 9V17L16 14.5V11.5Z" fill="white" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="12" fill="#25D366" />
    <path d="M12 4.5C7.86 4.5 4.5 7.86 4.5 12C4.5 13.56 4.98 15.01 5.8 16.22L4.78 19.22L7.9 18.2C9.07 18.96 10.49 19.5 12 19.5C16.14 19.5 19.5 16.14 19.5 12C19.5 7.86 16.14 4.5 12 4.5ZM9.32 8.76C9.5 8.76 9.68 8.76 9.8 9.04C9.92 9.32 10.22 10.05 10.26 10.13C10.3 10.21 10.3 10.31 10.24 10.43C10.18 10.55 10.12 10.63 10.02 10.74C9.92 10.85 9.84 10.93 9.74 11.05C9.64 11.17 9.52 11.3 9.66 11.54C9.8 11.78 10.28 12.57 10.98 13.19C11.88 13.99 12.62 14.25 12.88 14.37C13.14 14.49 13.3 14.47 13.44 14.31C13.58 14.15 14.04 13.61 14.2 13.37C14.36 13.13 14.52 13.17 14.76 13.27C15 13.37 16.26 13.99 16.52 14.12C16.78 14.25 16.96 14.31 17.02 14.41C17.08 14.51 17.08 15.01 16.88 15.58C16.68 16.15 15.7 16.69 15.22 16.73C14.74 16.77 14.12 16.95 11.96 16.07C9.36 15.01 7.7 12.35 7.56 12.17C7.42 11.99 6.42 10.66 6.42 9.29C6.42 7.92 7.12 7.26 7.4 6.98C7.68 6.7 8.04 6.64 8.32 6.64C8.42 6.64 8.52 6.64 8.62 6.64C8.92 6.64 9.14 6.62 9.32 8.76Z" fill="white" />
  </svg>
);

const VSCodeIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.385 5.86L15.358.106a1.144 1.144 0 0 1 1.547.78L22.615 12l-5.71 11.114a1.144 1.144 0 0 1-1.547.78L1.385 18.14a1.144 1.144 0 0 1-.685-1.045V6.905c0-.46.275-.875.685-1.045z" fill="#007ACC"/>
  </svg>
);

const NodejsIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 6.5v9L12 20l8-4.5v-9L12 2z" fill="#339933" />
    <text x="12" y="13.5" fill="white" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">JS</text>
  </svg>
);

const PythonIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 6H13V12H17V14H11V6Z" fill="#3776AB"/>
  </svg>
);

const AdobeIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 3H22v18H14.5zM9.5 3H2v18h7.5zM12 9.5l4.5 9h-9z" fill="#FF0000" />
  </svg>
);

const IllustratorIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#330000" />
    <rect width="20" height="20" x="2" y="2" rx="2" stroke="#FF9A00" strokeWidth="1" fill="none" />
    <text x="12" y="15" fill="#FF9A00" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Ai</text>
  </svg>
);

const AutoCADIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#E62117" />
    <text x="12" y="16" fill="white" fontSize="11" fontWeight="black" textAnchor="middle" fontFamily="sans-serif">A</text>
  </svg>
);

const PotPlayerIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="12" fill="#E5B20D" />
    <polygon points="10,8 16,12 10,16" fill="white" />
  </svg>
);

const RevoIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#005AA7" />
    <path d="M7 7h10v2H7zM7 11h10v2H7zM7 15h10v2H7z" fill="white" />
  </svg>
);

const IDMIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#008000" />
    <path d="M12 6v8m-4-4l4 4 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FormatFactoryIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#0F80FF" />
    <text x="12" y="16" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">FF</text>
  </svg>
);

const CiscoIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#00BCEB" />
    <path d="M8 8v8m2-6v4m2-8v10m2-8v6m2-4v2" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const TripleDPNetIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#5F259F" />
    <text x="12" y="16" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">3DP</text>
  </svg>
);

// Map keyword patterns to logos
const softwareMappings = [
  { keywords: ['alhua', 'dahua'], icon: <img src={Alhua} className="w-5 h-5 shrink-0 object-contain" alt="Alhua Logo" /> },
  { keywords: ['photoshop'], icon: <img src={photoshopLogo} className="w-5 h-5 shrink-0 object-contain" alt="Photoshop Logo" /> },
  { keywords: ['illustrator'], icon: <IllustratorIcon /> },
  { keywords: ['adobe', 'premiere', 'acrobat'], icon: <AdobeIcon /> },
  { keywords: ['winrar', 'rar'], icon: <img src={winrarLogo} className="w-5 h-5 shrink-0 object-contain" alt="WinRAR Logo" /> },
  { keywords: ['anydesk'], icon: <img src={anydeskLogo} className="w-5 h-5 shrink-0 object-contain" alt="AnyDesk Logo" /> },
  { keywords: ['teamviewer'], icon: <TeamViewerIcon /> },
  { keywords: ['chrome', 'google chrome'], icon: <img src={chromeLogo} className="w-5 h-5 shrink-0 object-contain" alt="Chrome Logo" /> },
  { keywords: ['firefox', 'mozilla'], icon: <img src={firefoxLogo} className="w-5 h-5 shrink-0 object-contain" alt="Firefox Logo" /> },
  { keywords: ['microsoft office', 'office20', 'office 20', 'office365', 'office 365'], icon: <img src={officeLogo} className="w-5 h-5 shrink-0 object-contain" alt="Office Logo" /> },
  { keywords: ['word', 'ms word', 'docx'], icon: <WordIcon /> },
  { keywords: ['excel', 'ms excel', 'xlsx'], icon: <ExcelIcon /> },
  { keywords: ['powerpoint', 'ms powerpoint', 'pptx'], icon: <PowerPointIcon /> },
  { keywords: ['vlc'], icon: <img src={vlcLogo} className="w-5 h-5 shrink-0 object-contain" alt="VLC Logo" /> },
  { keywords: ['potplayer'], icon: <PotPlayerIcon /> },
  { keywords: ['revo uninstaller', 'revo'], icon: <RevoIcon /> },
  { keywords: ['internet download manager', 'idm'], icon: <IDMIcon /> },
  { keywords: ['format factory', 'formatfactory'], icon: <FormatFactoryIcon /> },
  { keywords: ['3dp net', '3dpnet', '3dp'], icon: <TripleDPNetIcon /> },
  { keywords: ['cisco anyconnect', 'cisco'], icon: <CiscoIcon /> },
  { keywords: ['autocad'], icon: <AutoCADIcon /> },
  { keywords: ['whatsapp'], icon: <WhatsAppIcon /> },
  { keywords: ['zoom'], icon: <ZoomIcon /> },
  { keywords: ['visual studio code', 'vscode', 'vs code'], icon: <VSCodeIcon /> },
  { keywords: ['node.js', 'nodejs', 'node'], icon: <NodejsIcon /> },
  { keywords: ['python'], icon: <PythonIcon /> }
];

export function getFileIcon(filename: string, isFolder?: boolean): React.ReactNode {
  if (isFolder) {
    return <Folder className="w-5 h-5 text-[#066291] fill-sky-500/10 shrink-0" />;
  }

  const nameLower = filename.toLowerCase();

  // 1. Software Recognition (Highest Priority)
  for (const mapping of softwareMappings) {
    if (mapping.keywords.some(keyword => nameLower.includes(keyword))) {
      return mapping.icon;
    }
  }

  // 2. File Type Fallback based on extension
  const extension = filename.split('.').pop()?.toLowerCase();

  switch (extension) {
    case 'exe':
      return <AppWindow className="w-5 h-5 text-indigo-500 shrink-0" />;
    case 'msi':
      return <AppWindow className="w-5 h-5 text-sky-500 shrink-0" />;
    case 'zip':
    case 'rar':
    case '7z':
      return <Archive className="w-5 h-5 text-amber-500 shrink-0" fill="rgba(245, 158, 11, 0.1)" />;
    case 'iso':
      return <Disc className="w-5 h-5 text-slate-500 shrink-0" />;
    case 'pdf':
      return <FileText className="w-5 h-5 text-rose-500 shrink-0" />;
    case 'docx':
    case 'doc':
      return <FileText className="w-5 h-5 text-blue-600 shrink-0" />;
    case 'xlsx':
    case 'xls':
      return <FileSpreadsheet className="w-5 h-5 text-emerald-600 shrink-0" />;
    case 'pptx':
    case 'ppt':
      return <Presentation className="w-5 h-5 text-orange-600 shrink-0" />;
    case 'jpg':
    case 'jpeg':
    case 'png':
    case 'webp':
      return <FileImage className="w-5 h-5 text-purple-500 shrink-0" />;
    case 'mp4':
    case 'avi':
    case 'mkv':
      return <FileVideo className="w-5 h-5 text-pink-500 shrink-0" />;
    case 'mp3':
    case 'wav':
      return <FileAudio className="w-5 h-5 text-violet-500 shrink-0" />;
    default:
      // 3. Unknown Files Fallback
      return <FileIcon className="w-5 h-5 text-slate-400 shrink-0" />;
  }
}
