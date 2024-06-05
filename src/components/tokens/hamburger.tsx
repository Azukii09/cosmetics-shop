"use client"
export default function Hamburger(props: {
    action: string | undefined;
    handler: any }){
    return(
        <div className="flex items-center justify-between relative">
            <button onClick={props.handler} className={props.action} id="hamburger" name="hamburger" type="button">
                <span
                    className="origin-top-left w-[30px] h-[2px] my-2 block bg-info transition duration-300 ease-in-out"></span>
                <span className="w-[20px] h-[2px] my-2 block bg-info transition duration-300 ease-in-out"></span>
                <span
                    className="origin-bottom-left w-[25px] h-[2px] my-2 block bg-info transition duration-300 ease-in-out"></span>
            </button>
        </div>
    )
}