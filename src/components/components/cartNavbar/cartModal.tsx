"use client"
import Button from "@/components/tokens/button";
import CartItem from "@/components/components/cartNavbar/cartItem";

export default function CartModal(){
    // temporary
    const cartItem = true
    return (
        <div className={"w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white flex flex-col gap-6 top-12 right-0 z-20"}>
            {!cartItem ? (
                // Cart content when cart is empty
                <div>cart is empty</div>
            ):(
                // Cart content when cart not empty
                <>
                    {/*Cart Title*/}
                    <div>
                        <h1 className={"font-bold text-slate-500 text-lg"}>Shopping Cart</h1>
                    </div>
                    {/*Body cart*/}
                    <div className={"flex flex-col gap-8"}>
                        {/*item*/}
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>

                    </div>
                    {/*Cart footer*/}
                    <div>
                        <div className={"flex items-center justify-between font-semibold"}>
                            <span>Subtotal</span>
                            <span>$49</span>
                        </div>
                        <p className={"text-slate-500 text-sm mt-2 mb-4"}>
                            <span>Lorem ipsum dolor sit amet, consectetur.</span>
                        </p>
                        <div className={"flex justify-between text-sm"}>
                            <Button typeName={"button"} className={"btn btn-line"} name={"View Cart"}/>
                            <Button typeName={"button"} className={"btn btn-primary"} name={"Checkout"}/>
                        </div>
                    </div>
                </>


            )}
        </div>
    )
}