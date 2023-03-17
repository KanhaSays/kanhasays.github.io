
// var txt = $("answer").getValue();
var txt = document.getElementById("answer").value;
var i = 0;
var speed = 30;


function showTextarea() {
  
  var textarea = document.getElementById("answer");
  var ta = document.getElementById("answer").value;
  var question = document.getElementById("question").value;
  console.log(question);
  console.log(ta.length);

  // var clipboardd = document.getElementById("clipboard-d");
  // var clipboardl = document.getElementById("clipboard-l");
  // textarea.classList.remove("answer");
  // textarea.style = ('display: block');
  // textarea.style = ('animation: riseHeight 10s 10s normal forwards');
  // if(darkTheme()==true){
  //   clipboardd.style = ('display: block');
  //   clipboardl.style = ('display: none');
  // }else if(lightTheme()==true){
  //   clipboardl.style = ('display: block');
  //   clipboardd.style = ('display: none');
  // }

  // if (i < txt.length) {
  //   // textarea.innerHTML = "";
  //   textarea.innerHTML += txt.charAt(i);
  //   i++;
  //   setTimeout(showTextarea, speed);
  // }
}

function darkTheme() {
  var heading = document.getElementById("heading");
  var tagline = document.getElementById("tagline");
  // var question = document.getElementById("question");
  // var answer = document.getElementById("answer");
  var ask = document.getElementById("ask");
  var dark = document.getElementById("dark");
  var light = document.getElementById("light");
  var developer = document.getElementById("developer");
  var dname = document.getElementById("d-name");
  var body = document.getElementById("body");
  // var clipboardl = document.getElementById("clipboard-l");
  // var clipboardd = document.getElementById("clipboard-d");

  light.style = ('display: block');
  dark.style = ('display: none');
  heading.style = ('color: antiquewhite');
  tagline.style = ('color: antiquewhite');
  developer.style = ('color: antiquewhite');
  dname.style = ('color: antiquewhite')
  body.style = ('background-color: rgb(16, 25, 56)');
  ask.style = ('background-color: rgb(13, 0, 255)');
  // clipboardl.style = ('display: block');
  // clipboardd.style = ('display: none');
}

function lightTheme() {
  var heading = document.getElementById("heading");
  var tagline = document.getElementById("tagline");
  // var question = document.getElementById("question");
  // var answer = document.getElementById("answer");
  var ask = document.getElementById("ask");
  var dark = document.getElementById("dark");
  var light = document.getElementById("light");
  var dark = document.getElementById("dark");
  var light = document.getElementById("light");
  var developer = document.getElementById("developer");
  var dname = document.getElementById("d-name");
  var body = document.getElementById("body");
  var clipboardl = document.getElementById("clipboard-l");
  var clipboardd = document.getElementById("clipboard-d");

  light.style = ('display: none');
  dark.style = ('display: block');
  heading.style = ('color: black');
  tagline.style = ('color: black');
  developer.style = ('color: black');
  dname.style = ('color: black')
  body.style = ('background-color: rgb(230, 230, 230)');
  ask.style = ('background-color: black');
  // clipboardl.style = ('display: none');
  // clipboardd.style = ('display: block');
}

function copy() {
  let textarea = document.getElementById("answer");
  textarea.select();
  document.execCommand("copy");
}

// <script type="text/javascript">
//           var answer = {{ answer }}
//           function showTextarea() {
//             var textarea = document.getElementById("answer");
//             textarea.classList.remove("answer");
//             textarea.style = ('animation: riseHeight 1s .1s normal forwards');
//             if (i < answer.length) {
//               textarea.innerHTML += answer.charAt(i);
//               i++;
//               setTimeout(showTextarea, speed);
//             }
//           }
//         </script>
//         <script type="text/javascript" src="../static/script.js"></script>