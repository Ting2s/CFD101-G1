var lc = LC.init(document.getElementsByClassName('myDrawing')[0],{imageURLPrefix: 'images/dinoCard'},);

window.onload = function () {
  
  let btn = document.getElementById('save')
  btn.addEventListener('click', function (e) {
      console.log('e', e);
      e.preventDefault();
      let fetchImg = lc.getImage().toDataURL()
      //fetchImg = fetchImg.replace("data:image/png;base64,",'');
      console.log('fetchImg', fetchImg);

      document.getElementById('hidden_data').value = fetchImg;
      var formData = new FormData(document.getElementById("myForm"));
      var xhr = new XMLHttpRequest();
      
      xhr.onload = function () {
        if (xhr.status == 200) {
          alert('Succesfully uploaded'); 
          console.log( xhr.responseText);
          document.getElementById("my_download").href = xhr.responseText;
          document.getElementById("download").style.visibility = "visible";
          // console.log("檔名 : ", xhr.responseText);
          // document.getElementById("download").href = xhr.responseText;
          // document.getElementById("download").innerText = "下載";
        } else {
          alert(xhr.status);
        }
      };


  xhr.open('POST', './php/makeCard.php', true); 

  xhr.send(formData);

  }, false);
  
};