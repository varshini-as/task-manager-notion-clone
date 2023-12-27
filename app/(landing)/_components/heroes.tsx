import Image from "next/image";
import Footer from "./footer";

const Heroes = () => {
    return ( 
        <div className="flex flex-col items-center max-w-5xl dark:bg-[#1F1F1F]">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
                    <Image src={"/documents.png"} alt={"documents"} fill className="object-contain dark:hidden" />
                    <Image src={"/documents-dark.png"} alt={"documents"} fill className="object-contain hidden dark:block" />
                </div>
                <div className="relative h-[400px] w-[400px] hidden md:block">
                    <Image src={"/reading.png"} alt={"documents"} fill className="object-contain dark:hidden" />
                    <Image src={"/reading-dark.png"} alt={"documents"} fill className="object-contain hidden dark:block" />
                </div>
            </div>
        </div>
     );
}
 
export default Heroes;