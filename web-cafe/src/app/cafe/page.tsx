let data = ["1","2","3","4","2","3","4","2"]
export default function Cafe({name} : {name:string}){
    return(
        <div className="w-full pl-12 -z-40">
            <div className="grid grid-flow-row w-full h-screen">
            <h1 className="text-right mr-20 text-5xl font-extrabold text-white row-span-1">Party</h1>
                <section className="grid grid-cols-4 gap-1 mx-5">
                {data.map((k) =>{
                    return <>
                    <div className="grid grid-rows-3 bg-neutral-800 text-red-50 w-full text-center text-3xl p-7 rounded-lg row-span-3 shadow content-center justify-center">
                        <div className="w-28 h-28 rounded-full bg-white row-span-2"></div>
                        <a href="" className="row-span-1">{k}</a>
                    </div>
                    </>
                })}
                </section>
                

                <section className="grid w-full inset-x-0 content-end bottom-0 bg-gradient-to-t from-zinc-900 via-opacity via-90% text-white">
                    <article className="flex content-end flex-col-reverse h-36 mx-5 overflow-y-auto bg-scroll">
                        <div className="flex">
                            <a href="">asd</a>
                            <a href=""> : </a>
                            <a href="">asasdasdasdd</a>
                        </div>
                        <div className="flex">
                            <a href="">asd</a>
                            <a href=""> : </a>
                            <a href="">asasdasdasdd</a>
                        </div>
                        <div className="flex">
                            <a href="">asd</a>
                            <a href=""> : </a>
                            <a href="">asasdasdasdd</a>
                        </div>
                        <div className="flex">
                            <a href="">asd</a>
                            <a href=""> : </a>
                            <a href="">asasdasdasdd</a>
                        </div>
                        <div className="flex">
                            <a href="">asd</a>
                            <a href=""> : </a>
                            <a href="">asasdasdasdd</a>
                        </div>
                        <div className="flex">
                            <a href="">asd</a>
                            <a href=""> : </a>
                            <a href="">asasdasdasdd</a>
                        </div>
                        <div className="flex">
                            <a href="">asd</a>
                            <a href=""> : </a>
                            <a href="">asasdasdasdd</a>
                        </div>
                        <div className="flex">
                            <a href="">asd</a>
                            <a href=""> : </a>
                            <a href="">asasdasdasdd</a>
                        </div>

                        
                    </article>
                    <div className="content-end mx-5 flex mb-4">
                        <input type="text" className="w-full rounded-md border-solid border-2 border-black h-8 text-black pl-3" placeholder = "chatwithyourfriend"/>
                    </div>
                </section>

            </div>

            

            
        </div>
    )
}