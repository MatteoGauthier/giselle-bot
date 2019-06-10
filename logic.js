var md = document.querySelector('.md');
var data;
var video = document.querySelector(".content video");
var btn1 = document.querySelector("#btn1")
var btn2 = document.querySelector("#btn2")
tippy(btn1, {
    content: 'Redirection vers le repository',
    placement: 'bottom',
    theme:'light-border'
  })
tippy(btn2, {
    content: 'Demo video du bot',
    placement: 'bottom',
    theme:'light-border'
  })
btn2.addEventListener('click', _ => {
    video.classList.add("video");
})




fetch("https://raw.githubusercontent.com/MattixNow/giselle-bot/master/README.md")
    .then(response => response.text())
    .then(data => {
        console.log(data);
        md.innerHTML = marked(data);
        document.querySelector(".md details").remove();
        document.querySelector(".md h1").remove();
        document.querySelector(".md p").setAttribute("data-splitting", "");
        Splitting();

    });