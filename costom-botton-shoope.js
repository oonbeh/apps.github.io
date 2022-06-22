(()=>{
  //-- direct link shoope 
  const costomAds = "https://t.co/8RJWNNuJYI";

  let elTarget = document.querySelector(".sg-button__text");
  if(elTarget){
    elTarget.addEventListener("click",()=>{
      window.open(costomAds, "_blank");
    });
  };
})();
