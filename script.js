

$(document).click((e)=>{
       switch (e.target.id){
         case "BackFoud":
           $(".moreOptionsDiv").animate({ "left": "-300px" }, 200)
           setTimeout(() => {
             $(".backgroundFoud").remove();
           }, 200)
           break;
         case "fileoption":
           FilerOptions();
           break
         case "OptionOrg":
           FilerOptions();
           break
         case "themesoption":
           ThemeBtn();
           break
         case "themesOpt":
           ThemeBtn();
           break
         case "startShell":
           AnimationTerminal();
           break;
         case "td":
           d.focus();
         case "displayDev":
           $("#sDiv").animate({ "height": "0px" }, 200);
           setTimeout(()=>{
             $(".searchDiv").css("left", "-200px");
           },200)
           ThemeBtn()
           FilerOptions();
           break
         default:
         return;
       }
})
