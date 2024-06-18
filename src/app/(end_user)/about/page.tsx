import Image from "next/image";
import Button from "@/components/tokens/button";

export default function AboutPage() {
    return (
        <div className={"py-5 flex flex-col items-center"}>
            {/*tittle about*/}
            <div className={"flex flex-col items-center px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-64"}>
                <h1 className={"font-bold text-4xl text-slate-600"}>About Us</h1>
                <span className={"w-[100px] h-[3px] bg-secondary mt-2"}></span>
                <p className={"text-center text-slate-600 tracking-wide mt-4 w-full"}>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur corporis, debitis dicta dolorem, excepturi facilis harum inventore maiores minus nihil, pariatur ullam veritatis. Dolores dolorum magni ratione recusandae voluptatem.</span><span>A adipisci at atque beatae cumque dicta ea eaque est fugiat illo iusto laudantium libero nam nemo nesciunt officiis optio quam quas quibusdam ratione sint soluta ut vitae voluptate, voluptatum?</span>
                </p>
            </div>

            {/*company*/}
            <div className={"h-[calc(100vh-80px)] mt-6"}>
                <div className={"w-screen h-full flex flex-col gap-16 xl:flex-row items-center"}>
                    {/*Text container*/}
                    <div
                        className={"h-1/2 xl:w-1/2 xl:h-full flex items-center justify-center flex-col gap-8 xl:gap-12 text-center"}
                    >
                        <h1 className={"text-5xl lg:text-6xl 2xl:text-8xl font-semibold text-slate-600"}>Company</h1>
                        <div className={"text-md lg:text-lg 2xl:text-xl px-4"}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam at beatae consequatur, culpa cum delectus dolores est et iste magni minus molestiae nisi nobis nulla provident quia sequi vero.
                        </div>

                    </div>
                    {/*image container*/}
                    <div className={"h-1/2 w-full xl:w-1/2 xl:h-3/4 relative bg-info p-10 xl:flex xl:items-center xl:justify-center xl:rounded-l-3xl"}>
                        <Image
                            src="https://images.pexels.com/photos/415980/pexels-photo-415980.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt={"about"}
                            fill
                            sizes={"30vw"}
                            className={"w-full xl:rounded-3xl xl:m-6 xl:-translate-x-12 "}
                        />
                    </div>
                </div>
            </div>

            {/*Timeline*/}
            <div className={"flex flex-col items-center px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mt-8"}>
                <h1 className={"font-bold text-4xl text-slate-600"}>Time Line</h1>
                <span className={"w-[100px] h-[3px] bg-secondary mt-2"}></span>
                <div
                    className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent mt-6"
                >

                    {/*item 1*/}
                    <div
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        {/*icon*/}
                        <div
                            className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                <path fillRule="nonzero"
                                      d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"/>
                            </svg>
                        </div>
                        {/*card*/}
                        <div
                            className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                            <div className="flex items-center justify-between space-x-2 mb-1">
                                <div className="font-bold text-slate-600">Company Created</div>
                                <time className="font-caveat font-medium text-primary">08/06/2023</time>
                            </div>
                            <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam
                                vestibulum morbi blandit cursus risus.
                            </div>
                        </div>
                    </div>

                    {/*item 2*/}
                    <div
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        {/*icon*/}
                        <div
                            className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                <path fillRule="nonzero"
                                      d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"/>
                            </svg>
                        </div>
                        {/*card*/}
                        <div
                            className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                            <div className="flex items-center justify-between space-x-2 mb-1">
                                <div className="font-bold text-slate-600">Status</div>
                                <time className="font-caveat font-medium text-primary">09/12/2023</time>
                            </div>
                            <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam
                                vestibulum morbi blandit cursus risus.
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/*other about*/}
            <div className={"h-[calc(100vh-80px)] mt-6"}>
                <div className={"w-screen h-full flex flex-col gap-16 xl:flex-row items-center"}>
                    {/*image container*/}
                    <div className={"h-1/2 w-full xl:w-1/2 xl:h-3/4 relative bg-info p-10 xl:flex xl:items-center xl:justify-center xl:rounded-r-3xl"}>
                        <Image
                            src="https://images.pexels.com/photos/415980/pexels-photo-415980.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt={"about"}
                            fill
                            sizes={"30vw"}
                            className={"w-full xl:rounded-3xl xl:m-8 xl:-translate-x-1"}
                        />
                    </div>

                    {/*Text container*/}
                    <div
                        className={"h-1/2 xl:w-1/2 xl:h-full flex items-center justify-center flex-col gap-8 xl:gap-12 text-center"}
                    >
                        <h1 className={"text-5xl lg:text-6xl 2xl:text-8xl font-semibold text-slate-600"}>Other About</h1>
                        <div className={"text-md lg:text-lg 2xl:text-xl px-4"}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam at beatae consequatur, culpa cum delectus dolores est et iste magni minus molestiae nisi nobis nulla provident quia sequi vero.
                        </div>

                    </div>
                </div>
            </div>

            {/*tittle contact*/}
            <div className={"flex flex-col items-center px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mt-8 bg-info py-16 xl:rounded-2xl"}>
                <h1 className={"font-bold text-4xl text-slate-600"}>Contact Us</h1>
                <span className={"w-[100px] h-[3px] bg-secondary mt-2"}></span>

                <div
                    className="grid sm:grid-cols-2 items-start gap-16 p-8 mx-auto max-w-4xl font-[sans-serif] mt-8 rounded-2xl bg-slate-200">
                    <div>
                        <h1 className="text-slate-600 text-3xl font-extrabold">{`Let's`} Talk</h1>
                        <p className="text-sm text-slate-600 mt-4">Have some big idea or brand to develop and need help?
                            Then reach out {`we'd`} love to hear about your project and provide help.</p>

                        <div className="mt-12">
                            <h2 className="text-slate-600 text-base font-bold">Email</h2>
                            <ul className="mt-4">
                                <li className="flex items-center">
                                    <div
                                        className="bg-slate-100 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             fill='#FE6A86'
                                             viewBox="0 0 479.058 479.058">
                                            <path
                                                d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                                data-original="#000000"/>
                                        </svg>
                                    </div>
                                    <a href="/" className="text-primary text-sm ml-4">
                                        <small className="block">Mail</small>
                                        <strong>info@example.com</strong>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-12">
                            <h2 className="text-slate-600 text-base font-bold">Socials</h2>

                            <ul className="flex mt-4 space-x-4">
                                <li className="bg-slate-100 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <a href="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             fill='#FE6A86'
                                             viewBox="0 0 24 24">
                                            <path
                                                d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                                                data-original="#000000"/>
                                        </svg>
                                    </a>
                                </li>
                                <li className="bg-slate-100 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <a href="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             fill='#FE6A86'
                                             viewBox="0 0 511 512">
                                            <path
                                                d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                                                data-original="#000000"/>
                                        </svg>
                                    </a>
                                </li>
                                <li className="bg-slate-100 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <a href="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             fill='#FE6A86'
                                             viewBox="0 0 24 24">
                                            <path
                                                d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z">
                                            </path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <form className="ml-auto space-y-4">
                        <input type='text' placeholder='Name'
                               className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"/>
                        <input type='email' placeholder='Email'
                               className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"/>
                        <input type='text' placeholder='Subject'
                               className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"/>
                        <textarea placeholder='Message' rows={6}
                                  className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"></textarea>
                        <Button typeName={"submit"} className={"btn btn-primary w-full"} name={"Send"}/>
                    </form>
                </div>
            </div>

        </div>
    );
}