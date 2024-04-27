import Image from "next/image";

export const Logo = () => {
    return(
        <Image 
            height={200}
            width={200}
            alt="logo du site"
            src="/logo-blanc-1.png"
            className="border "

        />
    )
}