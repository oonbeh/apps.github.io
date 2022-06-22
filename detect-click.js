(()=>{
  //-- direct link shoope 
  const urlDirectClick = "https://t.co/8RJWNNuJYI";

  //-- direct link adsterra 
  const urlDirectClick2 = "https://readydolphinpoverty.com/uijctn538c?key=4f219c1087bce980ac7a203a864c9d2b";

  document.querySelectorAll("a").forEach(element => {
    element.setAttribute("target","_blank");
    element.addEventListener("click", event => {
      const isTargetBlank = event.target.target === "_blank";
      const isShortcutKeyPressed = event.ctrlKey || event.shiftKey || event.metaKey;
      if (isTargetBlank || isShortcutKeyPressed) {
        try{
          setTimeout(()=>{
            window.location.href=urlDirectClick2;
          },1000);
        }catch(e){};
      };
    });
  });

  document.querySelector("body").addEventListener("click",(event)=>{
      setTimeout(()=>{
          window.location.href=urlDirectClick2;
      },2000);
  });
})();
