function Support()
{
    return(
          <section>
            <h1 className="flex justify-center items-center font-bold text-2xl mt-5"> Our Support</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 mt-10 ">
        <div className="bg-white rounded-xl p-6 shadow hover:shadow-[0_0_15px_-3px_rgba(59,130,246,0.5)] hover:border-blue-900 border-2 border-transparent">
          <h3 className="text-xl font-semibold text-gray-950 mb-2">Groceries to Home</h3>
          <img src="/grocerie.webp" className="ml-8"></img>
          <p className="text-gray-600 mt-5">Fresh groceries delivered to your doorstep within 2 hours. Order fruits, vegetables, dairy and more.</p>
          <button className="bg-purple-300 p-2 rounded-lg mt-8 hover:bg-purple-500 hover:text-black hover:font-bold">GET NOW</button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow hover:shadow-[0_0_15px_-3px_rgba(59,130,246,0.5)] hover:border-blue-900 border-2 border-transparent">
          <h3 className="text-xl font-semibold text-gray-950 mb-2">Medicine Delivery</h3>
           <img src="/medicine.webp" className="ml-2 bg-white"></img>
          <p className="text-gray-600">Prescription and over-the-counter medicines delivered safely within 1 hour. 24/7 emergency service available.</p>
          <button className="bg-purple-300 p-2 rounded-lg mt-2 hover:bg-purple-500 hover:text-black hover:font-bold">GET NOW</button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow hover:shadow-[0_0_15px_-3px_rgba(59,130,246,0.5)] hover:border-blue-900 border-2 border-transparent">
          <h3 className="text-xl font-semibold text-gray-950 mb-2">Cook at Home for Your Dish</h3>
           <img src="/cook.avif" className="ml-5 bg-white"></img>
          <p className="text-gray-600">Personal chef assistance at home—hire a cook to help prepare meals in your kitchen, with flexible scheduling.</p>
          <button className="bg-purple-300 p-2 rounded-lg mt-2 hover:bg-purple-500 hover:text-black hover:font-bold">GET NOW</button>
        </div>
      </div>
      </section>
    )
}
export default Support