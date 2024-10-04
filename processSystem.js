const CreateTitle = (titleName) => {
     $(".arquivesName").append(`
      <spam id="btnAr${titleCountArea}" style="font-size: 19px; font-family: Arial; color: white; margin-left: 14px;">${titleName}</spam>
     `)
     titleCheckExists.push(titleName)
     titleCountArea++
   }
const CreateNewArea = (title, content) => {
      OpenArea.push(true);
      $(".AreaScroll").append(`
                 <div class="base${iterator}" style="position: relative;"><h3 id="rename${iterator}" style="font-size: 20px;">${title}</h3> <button type="button" id="Active${iterator}" style="width: 90px; height: 35px; border-radius: 5px; font-size: 16px; margin-right: 7px; margin-bottom: 6px; background-color: green; color: white; border: none;">Desativa</button><button type="button"  id="Save${iterator}" style="width: 90px; height: 35px; border-radius: 5px; font-size: 16px; margin-right: 7px; margin-bottom: 6px; background-color: black; color: white; border: none;">Salvar</button><button type="button" id="Close${iterator}" style="width: 90px; height: 35px; border-radius: 5px; font-size: 16px; margin-right: 7px; margin-bottom: 6px; background-color: black; color: white; border: none;">Fechar</button><button type="button"  id="RunCode${iterator}" style="width: 90px; height: 35px; border-radius: 5px; font-size: 16px; margin-right: 7px; margin-bottom: 6px; background-color: #EBE134; color: black; border: none; font-weight: bold;">Run</button><br><spam id="line${iterator}" style="margin-right: 7px; color: yellow">Linhas: 0</spam><spam style="color: yellow" id="filesize${iterator}">Tamanho: 0b</spam>
                   <textarea class="codeText" id="codetext${iterator}">${content}</textarea>
                       </div>
                `)
      let styleElement = document.getElementById(
        `codetext${iterator}`)
      styleElement.style.fontFamily = "var(--font-style-hython)"
      styleElement.style.width = "100%";
      styleElement.style.height = "600px";
      styleElement.style.outline = "none";
      styleElement.style.color = "cyan";
      styleElement.style.fontSize = "12px";
      styleElement.style.backgroundColor = "black";
      styleElement.style.border = "none";
      styleElement.style.padding = "5px 0px 0px 3px";
      styleElement.style.marginLeft = "5px";
      FilerOptions();
      let scroll = document.getElementById("displayDev");
      scroll.scrollTop = scroll.scrollHeight;
      iterator++
   }
   newfile.addEventListener("click", () => {
     if($(".AreaScroll div").length >= 10){
       alert("Numero maximo de Areas criadas!")
       FilerOptions();
     }else{
     CreateNewArea("New", "");
     CreateTitle("New")
     }
   })
importFile.addEventListener("change", (event) => {
     const filepyContent = event.target.files[0];
     if(filepyContent.name.slice(filepyContent.name.length - 3, filepyContent.name.length) != ".py"){
       alert("Não e um arquivo python!(.py)")
       FilerOptions();
     }else{
       const reader = new FileReader();
       reader.onload = (e) => {
         if(!titleExist(filepyContent.name.slice(0, filepyContent.name.length - 3))){
         CreateNewArea(filepyContent.name.slice(0, filepyContent.name.length - 3), e.target.result);
         CreateTitle(filepyContent.name.slice(0, filepyContent.name.length - 3))
         FilerOptions();
         importFile.value = "";
         }else{
           alert("Ja existe esse arquivo na area atual!")
           importFile.value = "";
           FilerOptions();
         }
       }
       reader.readAsText(filepyContent);
     }
   })
const ReturnDate = () => {
     let data;
     if (date.getDate() < 10) { data = "0" + date.getDate(); } else { data = date.getDate(); }
     if (date.getMonth() < 10) { data = data + "/" + "0" + (date.getMonth() + 1); } else { data = data + "/" + date.getMonth(); }
     return data + "/" + date.getFullYear();
   }
const ReturnHour = () => {
     let hour;
     if (date.getHours() < 10) { hour = "0" + date.getHours(); } else { hour = date.getHours(); }
     if (date.getMinutes() < 10) { hour = hour + ":" + "0" + date.getMinutes(); } else { hour = hour + ":" + date.getMinutes(); }
     return hour;
   }
$(".AreaScroll").click((e)=>{
    if(e.target.id.charAt(0) == "C"){
      iterator-=1
      titleCountArea-=1
      titleCheckExists.splice(titleCheckExists.indexOf($(`#btnAr${e.target.id.charAt(5)}`).text()), 1)
      $(`#codetext${e.target.id.charAt(5)}`).animate({ "height" : "0px"}, 200)
      CreateFileRecent($(`.arquivesName #btnAr${e.target.id.charAt(5)}`).text(),ReturnHour(), ReturnDate());
      recentTitle.push($(`.arquivesName #btnAr${e.target.id.charAt(5)}`).text());
      recentContent.push($(`#codetext${e.target.id.charAt(5)}`).val());
      console.log("Criando: " + recentTitle.length)
      setTimeout(() => {
        $(`.base${e.target.id.charAt(5)}`).remove();
        $(`.arquivesName #btnAr${e.target.id.charAt(5)}`).remove();
      },200)
    }
    if(e.target.id.charAt(0) == "c"){
      selectedId = e.target.id;
      document.getElementById(`${e.target.id}`).addEventListener("keydown", () => {
        AreaCode[`AreaCode${e.target.id.charAt(8)}`].push($(`#${e.target.id}`).val())
      })
      FilerOptions();
      ThemeBtn();
    }
    if(e.target.id.charAt(0) == "A"){
      let q = document.getElementById(`codetext${e.target.id.charAt(6)}`)
      if(OpenArea[+e.target.id.charAt(6)]){
        OpenArea[+e.target.id.charAt(6)] = false;
       $(`#codetext${e.target.id.charAt(6)}`).animate({ "height" : "50px" });
        q.disabled = true;
        let a = document.getElementById(`${e.target.id}`)
        a.style.transition = "0.8s";
        a.style.backgroundColor = "red"
        a.style.color = "white";
        $(`#${e.target.id}`).text("Ativar")
      }else{
        OpenArea[+e.target.id.charAt(6)] = true;
        $(`#codetext${e.target.id.charAt(6)}`).animate({ "height" : "500px" });
        q.disabled = false;
        let a = document.getElementById(`${e.target.id}`)
        a.style.transition = "0.8s";
        a.style.backgroundColor = "green"
        a.style.color = "white";
        $(`#${e.target.id}`).text("Desativar");
      }
    }
    if(e.target.id.charAt(0) == "r"){
      CreateAnimateFileTrasition(false);
      $("#namefile").val($(`#${e.target.id}`).text());
      selectedRename = e.target.id.charAt(6);
    }
    if(e.target.id.charAt(0) == "R"){
      DisplayCompiler.style.trasition = "0.5s";
      DisplayCompiler.style.left = "0";
      RequestsCode($(`#codetext${e.target.id.charAt(7)}`).val())
    }
   })
   $(".arquivesName").click((e) => {
     try{
       document.getElementById(`codetext${e.target.id.charAt(5)}`).focus()
     }catch(err){
       return err
     }
   })
const ProcessCode = setInterval(() => {
     if(selectedId != undefined){
       try{
         let id = document.getElementById(`${selectedId}`)
      $(`#line${selectedId.charAt(8)}`).text("Linhas: "+id.value.split("\n").length)
         $(`#filesize${selectedId.charAt(8)}`).text("Tamanho: "+($(`#${selectedId}`).val().length*=1)+"b")
         $("#namescript").text($(`.base${selectedId.charAt(8)} h3`).text())
      $("#filename").text($(`.base${selectedId.charAt(8)} h3`).text())
       }catch(error){
         $("#filename").text("Crie uma Área")
         $("#namescript").text("")
       }
     }
   },100)
refe.addEventListener("click", () => {
  try{
    for (let i = 0; i < AreaCode[`AreaCode${selectedId.charAt(8)}`].length; i++) {
      if (AreaCode[`AreaCode${selectedId.charAt(8)}`][i] == "") {
        AreaCode[`AreaCode${selectedId.charAt(8)}`].splice(i, 1)
      }
    }
    if (CountRefes[`Refe${selectedId.charAt(8)}`] > AreaCode[`AreaCode${selectedId.charAt(8)}`].length) {
      return;
    } else {
      CountRefes[`Refe${selectedId.charAt(8)}`] += 3;
      $(`#${selectedId}`).val(AreaCode[`AreaCode${selectedId.charAt(8)}`][AreaCode[`AreaCode${selectedId.charAt(8)}`].length - CountRefes[`Refe${selectedId.charAt(8)}`]])
      document.getElementById(`${selectedId}`).focus();
    }
  }catch(err){
    return
  }
  console.log(CountRefes[`Refe${selectedId.charAt(8)}`])
})
NoRefe.addEventListener("click", () => {
  try {
    for (let i = 0; i < AreaCode[`AreaCode${selectedId.charAt(8)}`].length; i++) {
      //refeHistoric.splice(i, 1)
      if (AreaCode[`AreaCode${selectedId.charAt(8)}`][i] == "") {
        AreaCode[`AreaCode${selectedId.charAt(8)}`].splice(i, 1)
      }
    }
    if (CountRefes[`Refe${selectedId.charAt(8)}`] <= 0 || CountRefes[`Refe${selectedId.charAt(8)}`] <= 3) {
      return;
    } else {
      CountRefes[`Refe${selectedId.charAt(8)}`] -= 3;
      $(`#${selectedId}`).val(AreaCode[`AreaCode${selectedId.charAt(8)}`][AreaCode[`AreaCode${selectedId.charAt(8)}`].length - CountRefes[`Refe${selectedId.charAt(8)}`]])
      document.getElementById(`${selectedId}`).focus();
    }
  } catch (err) {
    return
  }
})
$(`#copy`).click(() => {
      if($(".AreaScroll div").length <= 0){
        alert("Crie uma area de codigo para realizar esta ação!")
      }else{
      if(selectedId != undefined){
      let e = document.getElementById(`${selectedId}`)
      e.select();
      document.execCommand("copy")
      }else{
        alert("Você precisa dar um click em alguma Area de codigo para realizar essa ação!")
      }
     }
    })
$("#cut").click(() => {
      if ($(".AreaScroll div").length <= 0){
        alert("Crie uma area de codigo para realizar esta ação!")
      }else{
        if (selectedId != undefined){
          let c = document.getElementById(`${selectedId}`)
          c.select();
          document.execCommand("cut")
        } else {
          alert("Você precisa dar um click em alguma Area de codigo para realizar essa ação!")
        }
      }
    })
$("#pageUp").click(() => {
      newscroll.scrollTop = 0;
  })
$("#pageDown").click(() => {
      newscroll.scrollTop = newscroll.scrollHeight;
 })
document.getElementById("closeFile").addEventListener("click", () => {
      if($(".arquivesName spam").length <= 0){
        alert('Nada para fechar.')
      FilerOptions();
      }else{
      FilerOptions();
      for(let i = 0; i < iterator; i++){
        CreateFileRecent($(`.arquivesName #btnAr${i}`).text(),ReturnHour(), ReturnDate())
        recentTitle.push($(`.arquivesName #btnAr${i}`).text());
        recentContent.push($(`#codetext${i}`).val());
        $(`.base${i}`).remove();
        $(`.arquivesName #btnAr${i}`).remove();
      }
      iterator = 0;
      titleCountArea = 0;
     }
    })
const CreateFileRecent = (title, hour, date) => {
      $(".historiContent").append(`
      <button type="button" id="closeR${counthistoric}" style="font-size: 14px;border: none; height: 20px;">Excluir historico "${title}"</button>
      <spam id="fonthis${counthistoric}" style="font-size: 16px; background-color: slategray;"><br>${title} Fechado: ${hour} Data: ${date} <br><br></spam>
      `)
      recentId.push("fonthis"+counthistoric)
      counthistoric++
    }
document.getElementById("recentFiles").addEventListener("click", () => {
      FilerOptions();
      ground.style.width = "100%";
      ground.style.height = "100%";
      ground.style.backgroundColor = "black";
      
      historiC.style.transition = "0.5s";
      historiC.style.left = "2%";
    })
   ground.addEventListener("click", () => {
     ground.style.width = "0";
     ground.style.height = "0";
     ground.style.backgroundColor = "none";
     
     historiC.style.transition = "0.5s";
     historiC.style.left = "-1000px";
   })
   $("#historicontent").click((e) => {
     if(e.target.id.charAt(0) == "f"){
       counthistoric-=1
       let w = e.target.id.charAt(7);
       ground.style.width = "0";
       ground.style.height = "0";
       ground.style.backgroundColor = "none";
       
       historiC.style.transition = "0.5s";
       historiC.style.left = "-1000px";
       let x = recentId.indexOf(e.target.id);
       console.log(e.target.id)
       CreateTitle(recentTitle[x])
       CreateNewArea(recentTitle[x], recentContent[x])
       console.log("O valor e : "+x)
       recentTitle.splice(x, 1);
       recentContent.splice(x, 1);
       recentId.splice(x, 1)
       console.log("Colocando: "+ recentTitle.length)
       $(`.historiContent #fonthis${w}`).remove();
       $(`.historiContent #closeR${w}`).remove();
     }
    if(e.target.id.charAt(0) == "c"){
      counthistoric-=1
      let cls = e.target.id.charAt(6);
      $(`.historiContent #fonthis${cls}`).remove();
      $(`.historiContent #closeR${cls}`).remove();
      let y = recentId.indexOf("fonthis"+cls);
      console.log("O valor e : "+y)
      recentTitle.splice(y, 1);
      recentContent.splice(y, 1);
      recentId.splice(y, 1)
      console.log("Removendo: "+ recentTitle.length)
    }
   if(e.target.id.charAt(0) == "b"){
     if(counthistoric <= 0){
       alert("Nada a ser excluido!")
     }else{
       for(let i = 0; i < 11; i++){
        $(`#fonthis${i}`).remove();
        $(`#closeR${i}`).remove();
        recentTitle.pop(i);
        recentContent.pop(i);
        recentId.pop(i);
       }
       counthistoric = 0;
     }
   }
   })
  
const RenameFile = (id, rename) => {
    $(`.arquivesName #btnAr${id}`).text(rename)
    $(`.base${id} #rename${id}`).text(rename)
  }
const CreateAnimateFileTrasition = (type) => {
   let docrename = document.getElementById("namerename");
   let backRename = document.getElementById("backrename");
   if(type){
    backRename.style.width = "0";
    backRename.style.height = "0";
    backRename.style.backgroundColor = "none";
    
    docrename.style.transition = "0.5s";
    docrename.style.left = "-1000px";
  }else{
    backRename.style.width = "100%";
    backRename.style.height = "100%";
    backRename.style.backgroundColor = "black";
    
    docrename.style.transition = "0.5s";
    docrename.style.left = "0px";
  }
 }
  document.getElementById("backrename").addEventListener("click", () => {
    CreateAnimateFileTrasition(true);
    number.value = "";
    $("#leng").text("0");
  })
  document.getElementById("namefile").addEventListener("keydown", (e) => {
    if (number.value.length > 15) {
      $("#leng").css("color", "red")
      number.value = $(number).val().slice(0, number.value.length - 1)
    } else {
      $("#leng").css("color", "limegreen")
      $("#leng").text(number.value.length)
    }
  })
const titleExist = (title) => {
    for(let i = 0; i < titleCheckExists.length; i++){
      if(title == titleCheckExists[i]){
        return true;
        break;
      }else{
        continue;
      }
    }
  }
document.getElementById("confirm").addEventListener("click", () => {
     if(!(/^[A-Za-z0-9]+$/.test(number.value))){
      number.value = "";
      $("#ERROr").text("Caractere não permitido!")
      $("#leng").css("color", "limegreen")
      $("#leng").text(0)
      setTimeout(() => {
        $("#ERROr").text("")
      }, 3 * 1000)
    }else{
      if(!(titleExist(number.value)) && number.value != $(`#rename${selectedRename}`).text()){
      titleCheckExists[titleCheckExists.indexOf($(`#rename${selectedRename}`).text())] = number.value;
      CreateAnimateFileTrasition(true)
      RenameFile(selectedRename, number.value)
      number.value = "";
      $("#leng").text("0");
      }else{
        $("#ERROr").text("Arquivo ja existe!")
        $("#leng").css("color", "yellow")
        setTimeout(() => {
          $("#ERROr").text("")
        }, 3 * 1000)
      }
    }
 })
 const CreateAnimationRelate = (type) => {
   if(type){
   backAllRelate.style.width = "100%";
   backAllRelate.style.height = "100%";
   backAllRelate.style.backgroundColor = "black";
   
   AllRelate.style.transition = "0.5s";
   AllRelate.style.left = "0";
 }else{
   backAllRelate.style.width = "100%";
   backAllRelate.style.height = "100%";
   backAllRelate.style.backgroundColor = "black";
   
   coffe.style.transition = "0.5s";
   coffe.style.left = "0";
 }
}
backAllRelate.addEventListener("click", () => {
   backAllRelate.style.width = "0";
   backAllRelate.style.height = "0";
   backAllRelate.style.backgroundColor = "none";
 
   AllRelate.style.transition = "0.5s";
   AllRelate.style.left = "-1000px";
   
   coffe.style.transition = "0.5s";
   coffe.style.left = "-1000px";
 })
document.getElementById("btnbug").addEventListener("click", () => {
  ThemeBtn();
  $("#titlerelate").text("Relatando bugs")
  CreateAnimationRelate(true);
})
document.getElementById("btnSugestion").addEventListener("click", () => {
  ThemeBtn();
  $("#titlerelate").text("Sugestão")
  CreateAnimationRelate(true);
})
document.getElementById("buycoffee").addEventListener("click", () => {
  ThemeBtn();
  CreateAnimationRelate(false);
})
DisplayCompiler.addEventListener("click", () => {
  DisplayCompiler.style.trasition = "0.5s";
  DisplayCompiler.style.left = "-1000px";
})
const RequestsCode = (code) => {
     fetch('http://127.0.0.1:5000', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    coding : code
  })
})
.then(response => response.json())
.then(data => $("#codeReturn").text(data["data"]))
.catch(err => $("#codeReturn").text("Sua internet esta ligada? Erro na execução."));
}

document.getElementById("btnExampleWord").addEventListener("click", () => {
  ShareEvent.style.transition = "0.5s";
  ShareEvent.style.left = "-1000px";
  setTimeout(() => {
  CreateTitle("HelloWord")
  CreateNewArea("HellWord", ex1)
  },400)
})

document.getElementById("btnExampleVar").addEventListener("click", () => {
  ShareEvent.style.transition = "0.5s";
  ShareEvent.style.left = "-1000px";
  setTimeout(() => {
    CreateTitle("Variaveis")
    CreateNewArea("Variaveis", ex2)
  }, 400)
})

document.getElementById("btnExampleOpe").addEventListener("click", () => {
  ShareEvent.style.transition = "0.5s";
  ShareEvent.style.left = "-1000px";
  setTimeout(() => {
    CreateTitle("Operadores")
    CreateNewArea("Operadores", ex3)
  }, 400)
})

document.getElementById("btnExampleCod").addEventListener("click", () => {
  ShareEvent.style.transition = "0.5s";
  ShareEvent.style.left = "-1000px";
  setTimeout(() => {
    CreateTitle("Codicao")
    CreateNewArea("Codicao", ex4)
  }, 400)
})

document.getElementById("btnExampleFuc").addEventListener("click", () => {
  ShareEvent.style.transition = "0.5s";
  ShareEvent.style.left = "-1000px";
  setTimeout(() => {
    CreateTitle("Funcoes")
    CreateNewArea("Funcoes", ex5)
  }, 400)
})

document.getElementById("btnExampleFor").addEventListener("click", () => {
  ShareEvent.style.transition = "0.5s";
  ShareEvent.style.left = "-1000px";
  setTimeout(() => {
    CreateTitle("ForLista")
    CreateNewArea("ForLista", ex6)
  }, 400)
})