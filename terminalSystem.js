const CreateProcess = (nameprocess, color) => {
  $(".ProcessArea").append(`
          <div class="process"><spam style=" font-family: monospace; color: ${color}">${nameprocess}</spam>
            `)
}
d.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    switch (d.value.toLowerCase()) {
      case "":
        d.value = ""
        CreateProcess("~ $", "lawngreen")
        break
      case "ls":
        CreateProcess("[!] Em breve chegara atualizações!", "lawngreen")
        d.value = "";
        break
      case "cp":
        CreateProcess("[!] Em breve chegara atualizações!", "lawngreen")
        d.value = "";
        break
      case "mv":
        CreateProcess("[!] Em breve chegara atualizações!", "lawngreen")
        d.value = "";
        break
      case "mkdir":
        CreateProcess("[!] Em breve chegara atualizações!", "lawngreen")
        d.value = "";
        break
      case "touch":
        CreateProcess("[!] Em breve chegara atualizações!", "lawngreen")
        d.value = "";
        break
      case "cat":
        CreateProcess("[!] Em breve chegara atualizações!", "lawngreen")
        d.value = "";
        break
      case "pip":
        CreateProcess("[!] Em breve chegara atualizações!", "lawngreen")
        d.value = "";
        break
      case "exit":
        z.style.transition = "0.5s";
        z.style.left = "-1000px";
        d.value = "";
        break;
      default:
        if (d.value.slice(0, 5).toLowerCase() != "clear") {
          CreateProcess(`sh: comando não reconhecido "${d.value.toLowerCase()}"`, "white")
          d.value = ""
        } else {
          $(".hythonTitle").remove()
          $(".process spam").remove();
          d.value = ""
        }
        d.value = ""
    }
  }
})