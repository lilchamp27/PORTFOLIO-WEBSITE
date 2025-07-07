import { FiDownload } from "react-icons/fi";

const PDFDownload = () => {
  return (
    <a
      href="/resume.pdf" // Direct public path
      download="ODUNEYE_BOLUWATIFEMITO_RESUME.pdf"
      className="inline-flex items-center gap-2 bg-accent hover:bg-[#C73E24] text-white px-6 py-3 rounded-lg font-body transition-colors"
    >
      <FiDownload /> DOWNLOAD RESUME
    </a>
  );
};

export default PDFDownload;