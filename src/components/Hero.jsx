const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2">
        <div className="flex flex-col items-center my-20"> 
             <h1 className="text-6xl lg:text-[10rem] p-2 uppercase font-bold">
                {HERO_CONTENT.title}
             </h1>
        </div>
    </section>
  )
}

export default Hero