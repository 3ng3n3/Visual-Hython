const FilerOptions = () => {
  if (selectedbtnMoreSave) {
    $(".filerOptions").animate({ "height": "0px" }, 200)
    setTimeout(() => {
      $(".filerOptions").css("left", "-500px");
      selectedbtnMoreSave = false;
    }, 200)
  } else {
    return;
  }
}
const ThemeBtn = () => {
  if (selectedbtnTheme) {
    $(".themes").animate({ "height": "0px" }, 200);
    setTimeout(() => {
      $(".themes").css("left", "-500px");
      selectedbtnTheme = false;
    }, 200)
  } else {
    return
  }
}
const AnimationHelpFile = () => {
  let v = document.getElementById("btnShowCodeOption")
  if (selectedbtnCode) {
    $(".btnCodeOption").animate({ "height": "350px" }, 200)
    v.style.transition = "0.3s";
    v.style.transform = "rotate(225deg)";
    selectedbtnCode = false;
  } else {
    $(".btnCodeOption").animate({ "height": "38px" }, 200)
    v.style.transition = "0.3s";
    v.style.transform = "rotate(0deg)";
    selectedbtnCode = true;
  }
}
const AnimationTerminal = () => {
  let d = document.getElementById("shellComand");
  let z = document.getElementById("td")
  $(".moreOptionsDiv").animate({ "left": "-300px" }, 200)
  setTimeout(() => {
    $(".backgroundFoud").remove();
    z.style.transition = "0.5s";
    z.style.left = "0px";
    z.style.height = "100%";
  }, 200)
}
$("#btnMore").click(() => {
  $(".n").append(`
          <div class="backgroundFoud" id="BackFoud"></div>
       `)
  $(".moreOptionsDiv").animate({ "left": "0px" }, 200);
  FilerOptions()
  ThemeBtn()
  if (!selectedbtnCode) AnimationHelpFile();
  $("#sDiv").animate({ "height": "0px" }, 200);
  setTimeout(() => {
    $(".searchDiv").css("left", "-200px");
  }, 200)
})
$("#btnMoreSave").click(() => {
  selectedbtnMoreSave = true;
  $(".filerOptions").css("left", "51%")
  $(".filerOptions").animate({ "height": "240px" }, 200)
  if (!selectedbtnCode) AnimationHelpFile();
})
$("#btnThemes").click(() => {
  selectedbtnTheme = true;
  $(".themes").css("left", "50%");
  $(".themes").animate({ "height": "240px" }, 200);
  if (!selectedbtnCode) AnimationHelpFile()
})
$("#btnShowCodeOption").click(() => {
  AnimationHelpFile()
})
max.addEventListener("click", () => {
       if (x >= 14){
         alert("Não e possivel aumentar mais!")
       }else{
         x+=2
         z.style.transition = "0.2s";
         z.style.fontSize = x + "px";
         d.style.fontSize = x + "px";
       }
     })
min.addEventListener("click", () => {
       if (x <= 3) {
         alert("Não e possivel diminuir mais!")
       }else{
         x-=2
         z.style.transition = "0.2s";
         z.style.fontSize = x + "px";
         d.style.fontSize = x + "px";
       }
     })
w.addEventListener("click", () => {
        if(!selectedbtnCode) AnimationHelpFile();
        $(".searchDiv").css("left", "23%");
        $("#sDiv").animate({ "height" : "250px" }, 200);
     })
a.addEventListener("click", () => {
       if(yN >= valor){
         return
       }else{
         valor+=10
         yN+=20
       t.style.transition = "1s"
       t.scrollLeft = yN;
       }
     })
y.addEventListener("click", () => {
      if(yN <= 0){
        return
      }else{
      valor-=10
      yN-=20
      t.style.transition = "1s"
      t.scrollLeft = yN;
    }
   })
c.addEventListener("click",() => {
     $("#sDiv").animate({ "height": "0px" }, 200);
        setTimeout(() => {
        $(".searchDiv").css("left", "-200px");
       }, 200)
   })
   
librarie.addEventListener("click", () => {
     $(".moreOptionsDiv").animate({ "left": "-300px" }, 200)
     setTimeout(() => {
       $(".backgroundFoud").remove();
       pageLibrarie.style.transition = "0.5s";
       pageLibrarie.style.left = "0px";
     }, 200)
   })
closeLib.addEventListener("click", () => {
     pageLibrarie.style.transition = "0.5s";
     pageLibrarie.style.left = "-1000px";
   })
ide.addEventListener("click", () => {
     $(".moreOptionsDiv").animate({ "left": "-300px" }, 200)
     setTimeout(() => {
       $(".backgroundFoud").remove();
       pageAt.style.transition = "0.5s";
       pageAt.style.left = "0px";
     }, 200)
   })
   
closeAt.addEventListener("click", () => {
     pageAt.style.transition = "0.5s";
     pageAt.style.left = "-1000px";
   })
codeShare.addEventListener("click", () => {
    $(".moreOptionsDiv").animate({ "left": "-300px" }, 200)
    $(".backgroundFoud").remove();
    ShareEvent.style.transition = "0.5s";
    ShareEvent.style.left = "0px";
})
ShareBack.addEventListener("click", () => {
  ShareEvent.style.transition = "0.5s";
  ShareEvent.style.left = "-1000px";
})
interpret.addEventListener("click", () => {
     alert("Na proxima atualização!")
})