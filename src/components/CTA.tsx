import { FaTelegram } from "react-icons/fa6"
import Button from "./Button"

const CTA = () => {
  return (
    <div className=" py-15 relative inset-0 ">
       <div className="lg:px-35 px-2 flex flex-col gap-6">
         <h1 className="text-3xl text-center">
            Let's make Bitcoin make sense—together.
        </h1>
        <p className="text-center lg:w-6/12 mx-auto text-[16px]">Join the Adam Bitcoin Chat on Telegram, follow my content, or jump right into the class—and start building real financial skills with Bitcoin.</p>
        <Button
            link="https://t.me/adambitcoinchat"
            icon={<FaTelegram className="text-lg" />}
            text="Join"
            target="_blank"
            classNam="flex items-center gap-2 font-body px-10 cursor-pointer mx-auto"/>
       </div>
    </div>
  )
}

export default CTA