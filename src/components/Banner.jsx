import bannerImg from '../assets/banner.jpg'

function Banner() {
  return (
    <section className="text-white
    ">
      <div className="flex flex-col  text-center bg-purple min-h-[90vh] rounded-3xl">
        <div className="mt-28">
          <h1 className="text-xl lg:text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
          <p className="py-6">
          Explore the latest gadgets that will take your experience to the next level. From smart devices <br /> to the coolest accessories, we have it all!
          </p>
          <button className="btn bg-white text-purple rounded-3xl px-8">Shop Now</button>
        </div>
      </div>
      <div className="-translate-y-[160px] sm:-translate-y-[200px] md:-translate-y-[200px] lg:-translate-y-[170px] xl:-translate-y-[210px] lg:w-2/3  mx-auto rounded-2xl border border-white bg-[#ffffff75] p-6">
         <img src={bannerImg} alt="Banner Image" className='rounded-2xl h-[500px] w-full'/>
      </div>
    </section>
  );
}

export default Banner;
