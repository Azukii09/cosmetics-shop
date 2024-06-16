"use client"

import Logo from "@/components/tokens/logo";
import Image from "next/image";

export default function Footer(){


    return(
        <footer className="text-sm bg-secondary 24 text-white mt-24 py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 ">
            {/*Top*/}
            <div className={"flex flex-col md:flex-row justify-between gap-24"}>
                {/*left*/}
                <div className={" w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8"}>
                    <Logo/>
                    <p>
                        123 Jenderal Sudirman Street<br/>
                        Central Jakarta, DKI Jakarta 10110<br/>
                        Indonesia
                    </p>
                    <span className={"font-semibold"}>test@mail.com</span>
                    <span className={"font-semibold"}>+6281234567890</span>
                    <div className={"flex gap-6"}>
                        <Image src={"/assets/img/facebook.png"} alt="" width={16} height={16} />
                        <Image src={"/assets/img/instagram.png"} alt="" width={16} height={16} />
                        <Image src={"/assets/img/youtube.png"} alt="" width={16} height={16} />
                        <Image src={"/assets/img/x.png"} alt="" width={16} height={16} />
                    </div>
                </div>
                {/*center*/}
                <div className={"w-1/2 hidden lg:flex justify-between"}></div>
                {/*right*/}
                <div className={"w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8"}>
                    <h1 className={"font-medium text-lg"}>SUBSCRIBE</h1>
                    <p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, optio, saepe? Consequatur corporis culpa harum hic non repudiandae sed vel veritatis voluptas voluptates. Accusantium adipisci assumenda ipsam obcaecati, quisquam veritatis!</span>
                    </p>
                    <div className={"flex"}>
                        <input
                            type="text"
                            placeholder="Email"
                            className={"p-4 w-3/4"}
                        />
                        <button className={"w-1/4 bg-primary text-white"}>JOIN</button>
                    </div>
                    <span className={"font-semibold"}>Secure Payment</span>
                    <div className={" flex justify-between"}>
                        <Image src={"/assets/img/discover.png"} alt="" width={40} height={20} />
                        <Image src={"/assets/img/skrill.png"} alt="" width={40} height={20} />
                        <Image src={"/assets/img/paypal.png"} alt="" width={40} height={20} />
                        <Image src={"/assets/img/mastercard.png"} alt="" width={40} height={20} />
                        <Image src={"/assets/img/visa.png"} alt="" width={40} height={20} />
                    </div>
                </div>
            </div>
            {/*Bottom*/}
            <div></div>
        </footer>
    )
}