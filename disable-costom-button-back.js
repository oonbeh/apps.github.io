//---- disable back ----
//-- direct link adsterra
const targetDirectDisableBack = "https://readydolphinpoverty.com/uijctn538c?key=4f219c1087bce980ac7a203a864c9d2b";

//-- direct link propeller ads
//const targetDirectDisableBack = "//dooloust.net/4/5089450";

history.pushState(null, document.title, window.location.href);
window.addEventListener('popstate', function (event)
{
  window.location.href=targetDirectDisableBack;
});
window.addEventListener('scroll', function() {
  history.pushState(null, document.title, window.location.href);
});
