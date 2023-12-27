import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const fonts = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"]
})
const Logo = () => {
    return ( 
        <div className="hidden md:flex items-center gap-x-2">
            <Image src={"/brand-light.png"} alt={"logo"} height={40} width={100} className="dark:hidden"/>
            <Image src={"/brand-dark.png"} alt={"logo"} height={40} width={100} className="hidden dark:block"/>
        </div>
     );
}
 
export default Logo;