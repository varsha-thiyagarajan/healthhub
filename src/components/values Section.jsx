import React from "react";
function ValueSection()
{
    return(
        <div class="bg-blue-50 py-16 px-4">
  <h2 class="text-3xl font-bold text-center mb-12">Our Core Principles</h2>
  <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    
    <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
      <div class="text-blue-600 text-4xl mb-4">🤝</div>
      <h3 class="font-bold text-xl mb-3">Radical Kindness</h3>
      <p class="text-gray-600">
        We treat every question with patience and respect, no matter how simple.
      </p>
    </div>
    
    <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
      <div class="text-blue-600 text-4xl mb-4">🔓</div>
      <h3 class="font-bold text-xl mb-3">Total Transparency</h3>
      <p class="text-gray-600">
        All answers are public so others can learn too. No hidden knowledge.
      </p>
    </div>
   
    <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
      <div class="text-blue-600 text-4xl mb-4">🌱</div>
      <h3 class="font-bold text-xl mb-3">Sustainable Help</h3>
      <p class="text-gray-600">
        We teach problem-solving skills, not just quick fixes.
      </p>
    </div>
  </div>
</div>
    )
}
export default ValueSection