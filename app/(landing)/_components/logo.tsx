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
            <Image src={"/1.png"} alt={"logo"} height={30} width={90} />
        </div>
     );
}
 
export default Logo;