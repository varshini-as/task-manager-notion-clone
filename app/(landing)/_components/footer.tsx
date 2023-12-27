import { Button } from "@/components/ui/button";
import Logo from "./logo";

const Footer = () => {
    return ( 
        <div className="flex items-center w-full z-50 bg-transparent dark:bg-[#1F1F1F] p-5">
            <Logo />
            <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
                <Button variant="ghost">Privacy Policy</Button>
                <Button variant="ghost">Terms & Conditions</Button>
            </div>
        </div>
     );
}
 
export default Footer;