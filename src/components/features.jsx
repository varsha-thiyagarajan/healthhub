// src/components/Features.jsx
function Features() {
  return (
    <section className="py-12   text-center">
      <h2 className="text-4xl font-bold mb-8 text-gray-1000">Features</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 ">
        <div className="bg-white rounded-xl p-6 shadow hover:shadow-[0_0_15px_-3px_rgba(59,130,246,0.5)] hover:border-blue-500 border-2 border-transparent">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Post Help Requests</h3>
          <p className="text-gray-600">Easily post any kind of help you need within your local community.</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow hover:shadow-[0_0_15px_-3px_rgba(59,130,246,0.5)] hover:border-blue-500 border-2 border-transparent">
          <h3 className="text-xl font-semibold text-green-600 mb-2">Offer Help to Others</h3>
          <p className="text-gray-600">Support neighbors by responding to their requests and offering your help.</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow hover:shadow-[0_0_15px_-3px_rgba(59,130,246,0.5)] hover:border-blue-400 border-2 border-transparent">
          <h3 className="text-xl font-semibold text-yellow-600 mb-2">Trusted by Your Local Community</h3>
          <p className="text-gray-600">Built to connect verified, trusted members in your own neighborhood.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
