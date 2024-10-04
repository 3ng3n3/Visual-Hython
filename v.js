let selectedbtnMoreSave = false;
let selectedbtnTheme = false;
let selectedbtnCode = true;
let d = document.getElementById("shellComand");
let z = document.getElementById("td")

let x = 12;
let max = document.getElementById("zoom-max")
let min = document.getElementById("zoom-min")
let a = document.getElementById("pageUpSearch");
let y = document.getElementById("pageDownSearch");
let t = document.getElementById("searchfile");

let w = document.getElementById("btnSearch")
let c = document.getElementById("closeSearch");
let valor = $(".arquiveSearch spam").text().length
let yN = t.scrollLeft;
let librarie = document.getElementById("libraryInstall");

let pageLibrarie = document.getElementById("pageLibri");
let closeLib = document.getElementById("closeLibrariePage");
let ide = document.getElementById("newide");
let pageAt = document.getElementById("displayIde");
let closeAt = document.getElementById("btnPushAt");

let codeShare = document.getElementById("startcodeShare");
let interpret = document.getElementById("interpretstart");
let titleCountArea = 0;
let titleCheckExists = new Array();
let OpenArea = new Array();

let iterator = 0;
let importFile = document.getElementById("importFile");
let selectedId;
let date = new Date();
let recentTitle = new Array();

let recentContent = new Array();
let recentId = new Array();
let selectedRename;
let newscroll = document.getElementById("displayDev");
let ground = document.getElementById("groundCover");

let historiC = document.getElementById("historicontent");
let counthistoric = 0;
let number = document.getElementById("namefile");
let len = document.getElementById("leng")
let newfile = document.getElementById("newFile");

let backAllRelate = document.getElementById("allrelate");
let AllRelate = document.getElementById("allrelated");
let coffe = document.getElementById("coffee");

let refe = document.getElementById("refe");
let NoRefe = document.getElementById("no-refe")
let CountRefes = {
  "Refe0": 0,
  "Refe1": 0,
  "Refe2": 0,
  "Refe3": 0,
  "Refe4": 0,
  "Refe5": 0,
  "Refe6": 0,
  "Refe7": 0,
  "Refe8": 0,
  "Refe9": 0
}
let getIdHistoric = new Array();
let AreaCode = {
  "AreaCode0" : [],
  "AreaCode1" : [],
  "AreaCode2" : [],
  "AreaCode3" : [],
  "AreaCode4" : [],
  "AreaCode5" : [],
  "AreaCode6" : [],
  "AreaCode7" : [],
  "AreaCode8" : [],
  "AreaCode9" : []
}
let ShareEvent = document.getElementById("shareCode");
let ShareBack = document.getElementById("backHython");
let value = " Visual Hython Coding World... <>"
let count = 0;
let reverse = true;
    setInterval(() => {
     if(!(count >= value.length) && reverse){
       count++
       $("#textCode").text(value.slice(0, count))
     }else{
       if (!(count <= 0)) {
         count-=1
         $("#textCode").text(value.slice(0, count))
         reverse = false;
       } else {
         reverse = true;
       }
     }
    },200)
    setInterval(() => {
      $("#anime").text("|")
      setTimeout(() => {
        $("#anime").text("")
      },500)
},1000)
let DisplayCompiler = document.getElementById("runCode");
//coding...
