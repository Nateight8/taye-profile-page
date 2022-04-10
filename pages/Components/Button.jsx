import React from "react";

function Button({ cta }) {
  return (
    <button className="capitalize bg-gradient-to-b from-orange-400 to-orange-700 my-8 px-11 text-[#005257] py-3 rounded-full shadow-2xl text-base font-bold hover:shadow-sm transition-all duration-700 ">
      {cta}
    </button>
  );
}

export default Button;
