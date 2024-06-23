let data = ["1","2","1","2","1","2","1","2","1","2"]
export const MainPage = () =>{
    return (
        <div className="block w-full">
        
    <h1 className="from-neutral-800 font-extrabold w-full text-center mb-10 text-4xl p-20">
      Web-Cafe
    </h1>
    <article>
      <p className="text-xs">
        This Website was build for practicing Full-Stack skill with next-js, go-api, prisma and docker.
      </p>
    </article>
    <section className="grid grid-cols-3 gap-20 mt-20 mx-8">
      {data.map((k) =>{
        return <>
          <div className="bg-neutral-800 text-red-50 w-full text-center text-3xl p-7 h-56 rounded-lg active:bg-gray-400 hover:bg-neutral-500 transition-colors">
            {k}
          </div>
        </>
      })}
    </section></div>
    )
}