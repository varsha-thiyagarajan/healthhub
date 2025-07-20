import React from "react";
import { Link } from "react-router-dom"; 
function CtaSection()
{
    return(
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4 text-center m-3.5">
  <h2 class="text-3xl font-bold mb-6">Ready to Give Help?</h2>
  <div class="flex flex-wrap justify-center gap-4">
    <a >
        <Link to="/ask" class="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
      Ask Your Question</Link>
    </a>
    <a >
        <Link to="/join" class="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
      Join as Helper</Link>
    </a>
  </div>
</div>
    )
} 
export default CtaSection