var md = document.querySelector('.md');
var data;
// var views = new Vue({
//     el: '#app',
//     data: {
//       message: 'Hello Vue!',
//       markData: '# Marked in the browser'
            

//     }
//   });


// console.log(views.markData);



fetch("https://raw.githubusercontent.com/MattixNow/giselle-bot/master/README.md"
)
.then(response => response.text())
.then(data => {
    console.log(data);
    md.innerHTML = marked(data);
    document.querySelector(".md details").remove();
    document.querySelector(".md h1").remove();

});