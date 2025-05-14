import React from 'react';
import Button from './Button';
import { MdOutlineFileDownload } from 'react-icons/md';

interface DownloadPdfButtonProps {
  fileUrl: string;          // URL or relative path to the PDF file
  fileName?: string;        // Optional custom file name for the download
  label?: string;           // Optional button label
}

const DownloadPdfButton: React.FC<DownloadPdfButtonProps> = ({
  fileUrl,
  fileName = 'Web3_Growth.pdf',
  
}) => {
//   const handleDownload = () => {
//     const link = document.createElement('a');
//     link.href = fileUrl;
//     link.download = fileName;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
   
//   };

  const handleDownload = async () => {
    try {

      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      
      if (isIOS) {
        // For iOS, open PDF in new tab
        window.location.href = fileUrl;
        alert('Please click the "Share" button in bottom of the screen to save the PDF.');
      } else {

      // Fetch the PDF file
      const response = await fetch(fileUrl);
      if (!response.ok) throw new Error('Failed to fetch PDF');
      
      // Convert to blob
      const blob = await response.blob();
      console.log(blob);
      
      // Create blob URL
      const blobUrl = window.URL.createObjectURL(blob);
      console.log(blobUrl);
      
      // Create download link
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = fileName;
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      console.log(link);
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
      }
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  
  };

  return (
    // <button onClick={handleDownload} className='relative inset-0'>{label}</button>
     <Button onClickk={handleDownload} link="" target="null" text="Bitcoin Guide"  classNam="relative inset-0 flex items-center gap-2 bg-transparent border border-orange-400 hover:bg-zinc-900" icon={<MdOutlineFileDownload />} />
  )
};

export default DownloadPdfButton;