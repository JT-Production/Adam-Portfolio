import Button from './Button';
import { MdOutlineWorkspacePremium } from 'react-icons/md';

const DownloadPdfButton2: React.FC = () => {
  return (
    <div className="">
      <Button  
        link="https://buy.stripe.com/aEUg0u0wDeiL42QfYY" 
        target="null" 
        text="Premium Access"    
        classNam="relative inset-0 flex items-center gap-2 bg-transparent border border-orange-400 hover:bg-zinc-900 " 
        icon={<MdOutlineWorkspacePremium/>} 
      />
    </div>
  );
};

export default DownloadPdfButton2;