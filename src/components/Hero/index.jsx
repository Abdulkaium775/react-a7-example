import "./index.css"
function Hero() {
    return ( <div className="relative min-h-screen bg-black text-white">
        <img
          src="https://i.ibb.co.com/W4mRDzZ0/Banner-min.jpg"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 flex flex-col gap-6">
          <h1 className="sora text-4xl md:text-5xl font-bold leading-tight">
            Bid on Unique Items from <br /> Around the World
          </h1>
          <p className="text-[#D2D2D2] sora text-xl  max-w-xl">
            Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
          </p>
          <button className="sora w-fit bg-white text-black hover:bg-gray-200 px-4 py-3 rounded-3xl">
            Explore Auctions
          </button>
        </div>
      </div> );
}

export default Hero;