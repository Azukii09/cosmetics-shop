"use client"
import Image from "next/image";
import {useState} from "react";

export default function SinglePage() {
    const image = [
        {
            id: 1,
            image: "https://images.pexels.com/photos/14716056/pexels-photo-14716056.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/14716151/pexels-photo-14716151.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: 4,
            image: "https://images.pexels.com/photos/1377034/pexels-photo-1377034.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
    ]

    const [index, setIndex] = useState(0);

    return (
        <div className="lg:sticky flex flex-col gap-4 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            <div className="mt-12 top-20">
                <div>
                    <h1 className={"text-4xl text-slate-600 font-medium"}>Product Tittle</h1>
                    <h6 className={"text-slate-400 text-sm"}>description</h6>
                </div>
                <div className={"w-full h-[2px] bg-slate-200"}></div>
            </div>
            <div
                className={"flex flex-col lg:flex-row gap-16 justify-between"}>
                {/*Image product*/}
                <div className={"w-full lg:w-1/2 lg:sticky top-20 h-max"}>
                    <div className={"h-[500px] relative"}>
                        <Image
                            src={image[index].image}
                            alt="Big Image"
                            fill
                            sizes={"50vw"}
                            className={"object-cover rounded-lg"}
                        />
                    </div>
                    <div className={"flex gap-4 overflow-x-scroll"}>
                        {image.map(image => (
                            <div
                                className={"w-1/3 sm:w-1/4 h-32 relative gap-4 mt-8 cursor-pointer flex-shrink-0"}
                                key={image.id}
                                onClick={() => {
                                    setIndex(image.id - 1)
                                }}
                            >
                                <Image
                                    src={image.image}
                                    alt="Big Image"
                                    fill
                                    sizes={"30vw"}
                                    className={"object-cover rounded-lg"}
                                />
                            </div>
                        ))}

                    </div>
                </div>
                {/*Description for product*/}
                <div className={"w-full lg:w-1/2 flex flex-col gap-6"}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam amet animi at
                        doloremque dolores ex incidunt, ipsum laborum nemo nihil optio perferendis possimus quidem,
                        ratione rerum tempora unde voluptas?
                    </div>
                    <div>Aperiam asperiores commodi fuga hic ipsa nostrum, quaerat quod quos suscipit! Corporis, eius
                        excepturi fugit maxime minus placeat ratione sequi tempora. Cumque doloribus eaque molestias
                        officia, provident quasi veniam voluptate.
                    </div>
                    <div>A accusantium assumenda beatae cupiditate deserunt dolor dolorem ex, explicabo incidunt iste
                        magnam minima minus nam nisi, nobis obcaecati possimus quaerat quas quibusdam recusandae
                        suscipit ut vel voluptatem voluptates voluptatibus.
                    </div>
                    <div>Accusantium animi architecto cumque deserunt dicta dolorem doloribus dolorum error est facere,
                        id laboriosam laborum molestiae natus neque nulla officia perferendis praesentium, quibusdam
                        repellat sit temporibus velit veritatis voluptate, voluptatem.
                    </div>
                    <div>Aspernatur assumenda blanditiis consequuntur culpa doloribus enim ex id laboriosam, magni
                        necessitatibus nihil numquam odio officia quaerat quam quas quasi sit. Commodi dolorum error
                        labore magnam? Debitis eos expedita nisi.
                    </div>
                    <div>Ab adipisci asperiores consequuntur dignissimos ducimus ea facere facilis, harum illum magnam
                        maxime minus molestiae, officiis, pariatur perferendis quaerat quam quas quia quisquam ratione
                        sapiente similique totam ut velit veniam.
                    </div>
                    <div>Animi expedita id provident soluta totam. Asperiores excepturi hic iure nemo quia. Accusantium
                        debitis dolor dolores facilis in maxime modi molestiae nisi, nobis perspiciatis praesentium
                        quasi quia quibusdam ratione tempora?
                    </div>
                    <div>A aliquam aperiam atque beatae consequuntur dolor est labore, libero maxime nemo nobis placeat
                        porro quia reiciendis repellat repellendus vero vitae. Beatae dolore doloribus eaque ex rem
                        sequi, tempore unde.
                    </div>
                    <div>Accusantium beatae dignissimos eaque eum in itaque, obcaecati qui sunt tenetur! A commodi
                        dolorum eaque est iusto laudantium magnam molestias, nulla numquam odit quod reprehenderit sed
                        tempora ullam voluptate voluptatibus.
                    </div>
                    <div>Alias aspernatur commodi, cum doloribus esse exercitationem expedita harum impedit in magnam
                        modi molestias nemo neque, nesciunt obcaecati officiis possimus quis ratione rerum sunt suscipit
                        unde ut velit, voluptatem voluptates.
                    </div>
                    <div>Aperiam autem cumque ducimus eaque eligendi ex fugit libero nam non pariatur repellendus
                        tempora, vero vitae. Impedit in ipsa iusto laboriosam nam quidem reiciendis? Eius fuga illum
                        perferendis qui tempore!
                    </div>
                    <div>Consequatur magnam minus quam reiciendis. Ab aliquid aut culpa cum cumque deserunt dicta
                        dignissimos eaque enim in iure magni, mollitia nam nesciunt optio porro quam quos reiciendis
                        tempora totam velit?
                    </div>
                    <div>Eligendi error est excepturi explicabo ipsum nostrum odit officiis quia rem repellendus. At
                        atque commodi cumque, ex facilis id illum ipsum sed sunt temporibus totam ullam ut veniam
                        voluptatibus voluptatum!
                    </div>
                    <div>Ad aliquam autem dicta eius fuga inventore qui quos voluptatum? Autem consectetur corporis
                        cumque eius odio officiis optio quaerat reiciendis, repudiandae vitae? Cumque distinctio
                        doloremque, ea excepturi itaque natus quia!
                    </div>
                    <div>Architecto eius fuga voluptas? Cumque hic in nisi odit pariatur quisquam tenetur voluptates.
                        Eos error esse itaque, natus non praesentium quam qui voluptatum. Eius libero maiores pariatur
                        perspiciatis quo temporibus.
                    </div>
                    <div>Atque consectetur eveniet explicabo fugiat impedit, ipsam maiores possimus sed vel voluptate.
                        Alias animi facilis fugiat iste laboriosam minus mollitia odit porro quasi, quibusdam
                        repellendus rerum similique sit? Fugiat, ipsum?
                    </div>
                    <div>A amet architecto commodi consequatur dolore excepturi reiciendis velit veniam, voluptatibus
                        voluptatum? Accusamus adipisci aspernatur aut corporis dicta doloribus exercitationem illum
                        minus nemo nobis nulla omnis, possimus quam voluptate voluptatem.
                    </div>
                    <div>Distinctio doloribus earum expedita ipsa laboriosam numquam quaerat quam quidem, voluptatem!
                        Alias aliquam, dolore eaque eos facilis, id illum ipsa libero modi nam quaerat quam sed velit!
                        Impedit, odio, quam.
                    </div>
                    <div>Aliquam aspernatur atque autem, cupiditate ea eius est hic inventore ipsa iusto labore,
                        laboriosam neque nihil nobis non, officiis perferendis perspiciatis quas quasi quos ratione rem
                        rerum veritatis vero vitae!
                    </div>
                    <div>A aperiam autem consequuntur corporis, debitis distinctio dolore error excepturi ipsam minima
                        nemo omnis totam ullam vel voluptas? Aspernatur doloremque ducimus eum illo non perferendis quam
                        reiciendis sint tempore vero!
                    </div>
                </div>
            </div>
        </div>
    )
}