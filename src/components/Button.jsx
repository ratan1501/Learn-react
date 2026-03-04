import React from "react";

export const button = () => {
  function btnClicked() {
    console.log("Button is Clicked");
  }

  return (
    <div
      onClick={() => {
        btnClicked();
      }}
      className="inline-block px-8 py-3 
                bg-emerald-50 text-emerald-700
                border border-emerald-100
                rounded-full
                shadow-md shadow-emerald-200/40
                active:scale-95
                transition-transform duration-150 ease-in-out
                cursor-pointer font-medium tracking-wide"
    >
      Click to Download
    </div>
  );
};
