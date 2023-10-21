out = document.getElementById("outputf")
inp = document.getElementById("inputf")
btn = document.getElementById("abtn")


function f() {
var lines = inp.value.split('\n');    // lines is an array of strings
out.innerHTML = null
for (var j = 0; j < lines.length; j++) {
    console.log("line complete")
        if (lines[j] == "---") {
            decode = `<hr>`
        } else if (lines[j].substring(0, 1) == "@") {
            decode = `<img src="${lines[j]}"></img>`
        } else if (lines[j].substring(0, 1) == ">") {
            decode = `<p class="green">${lines[j]}</p>`
        } else if (lines[j].substring(0, 1) == "|") {
            decode = `<p class="gray">${lines[j]}</p>`
        } else if (lines[j].substring(0, 1) == "^") {
            decode = `<p class="purple">${lines[j]}</p>`
        } else if (lines[j].substring(0, 1) == "!") {
            decode = `<p class="yellow">${lines[j]}</p>`
        } else if (lines[j].substring(0, 1) == "-") {
            decode = `<p class="orange">•${lines[j].substring(1,lines[j].length)}</p>`
        } else if (lines[j].substring(0, 1) == "?") {
            decode = `<p class="blue">${lines[j]}</p>`
        } else {
        decode = `<p>${lines[j]}</p>`
        }
  out.innerHTML = `${out.innerHTML}
  ${decode}
  `}}

btn.addEventListener("click", f)
