const Services = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2" id="services">
      <div className="my-20">
        <h2 className="text-xl lg:text-3xl tracking-tighter text-center uppercase mb-20">
          This what I like
        </h2>
        {SERVICES_CONTENT.map((service, index) => (
          <div key={index} className="mb-12 mx-4 flex flex-col lg:flex-row">
            <div className={`lg:w-1/2 mb-4 lg:mb-0 ${index % 2 === 0? "": "lg:order-2"}`}>
              <img src={service.image} alt={service.title} className="w-full h-auto object-cover rounded-lg" />
            </div>

            <div className={`lg:w-1/2`}>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services