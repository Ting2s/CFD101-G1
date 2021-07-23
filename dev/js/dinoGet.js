//-------------------------海平面
function get() {
    let xhr = new XMLHttpRequest();
}

function initElement() {
    console.log('in');
    let getDino = document.getElementById("getDinoSea");
    getDino.onclick = function(){debugger;
        let xhr = new XMLHttpRequest();
            xhr.onload = function () {
              if (xhr.status == 200) {
        
                // alert("得到恐龍！");
              } else {
                // alert(xhr.status);
              }
            }
            xhr.open("post", "./php/dinoGame.php", true);
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.send( `mydino=${document.getElementById("getDinoSea").value}`);
    };
  };
  initElement();


    // let data_info = `mydino = document.getElementById("getDinoSea").value}`;
    // xhr.send(data_info);
