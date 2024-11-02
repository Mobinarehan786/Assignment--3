
import Image from "next/image";
import Link from "next/link"
import images from "../images/logo.png"
import Images from "../images/profile.jpg"


export default function Header() {
 
  return (
 
    

    <div className="header"> 
    

<ul className="header-button">
            <Image src={images} alt="picture" height={50} width={100} className="cursor-pointer"/>
        


   
<Link href="/">
<li className="hover:text-[#0088a9]">Portfolio</li>
</Link>
    <Link href="/about-me">
        <li className="hover:text-[#0088a10]">About me</li></Link>
        <Link href="/contact-us">
    <li className="hover:text-[#0088a9]">Contactme</li></Link>
    <button className="py-2 px-2 bg-[#0099CC] text-xl border-none text-white rounded-lg hover:bg-[#0088a9justify-content[end]">Search</button>
    </ul>
    


    <div className="imageContainer">
      <Image src={Images} alt="picture" /></div>
   
    </div>
    
 






  

    
  );
}
