var lc = LC.init(document.getElementsByClassName('myDrawing')[0],{imageURLPrefix: 'images/dinoCard'},);

window.onload = function () {
  
  let btn = document.getElementById('save')
  btn.addEventListener('click', function (e) {
      console.log('e', e);
      e.preventDefault();
      let fetchImg = lc.getImage().toDataURL()
      console.log('fetchImg', fetchImg);

      document.getElementById('hidden_data').value = fetchImg;
      var formData = new FormData(document.getElementById("myForm"));
      var xhr = new XMLHttpRequest();

      xhr.onload = function () {
        if (xhr.status == 200) {
          alert('Succesfully uploaded'); 
          //console.log( xhr.responseText);
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


 
// canvas.toDataURL() --> dataURL base64

///////////
//自動生成圖片
// window.onload = background();

// function background() {
//   $.ajax({
//     method: "POST",
//     url: "../dinoCard.php",
//     data: {
//       'postcard_category': 1,
//     },
//     dataType: "text",
//     success: function (response) {
//       //更新html內容
//       // console.log(response);
//       let postImg = document.getElementsByClassName('post_img')[0].querySelector('ul');
//       postImg.innerHTML = response;
//       changePic();
//     },
//     error: function (exception) {
//       alert("發生錯誤: " + exception.status);
//     }
//   });
//   //換背景圖片
//   function changePic() {
//     let changeImg = document.getElementsByClassName('post_img')[0].querySelectorAll('img');
//     let cardImg = document.getElementsByClassName('postcard_bg')[0];
//     for (let i = 0; i < changeImg.length; i++) {
//       changeImg[i].addEventListener('click', function () {
//         let imgSrc = changeImg[i].getAttribute('src');
//         cardImg.style.backgroundImage = "url('" + imgSrc + "')";
//       })
//     }
//   }
// }
// function logo() {
//   $.ajax({
//     method: "POST",
//     url: "./assets/php/front/cardImg.php",
//     data: {
//       'postcard_category': 2,
//     },
//     dataType: "text",
//     success: function (response) {
//       //更新html內容
//       // console.log(response);
//       let postImg = document.getElementsByClassName('post_img')[0].querySelector('ul');
//       postImg.innerHTML = response;
//       dragDrop();
//     },
//     error: function (exception) {
//       alert("發生錯誤: " + exception.status);
//     }
//   });
// }
// //drop and drag 素材
// function dragDrop() {
//   let img = document.getElementsByClassName('post_img')[0].querySelectorAll('img');
//   for (let i = 0; i < img.length; i++) {
//     img[i].addEventListener('dragstart', function (e) {
//       e.dataTransfer.setData('image/png', `<img class='drag material' src="${img[i].src}" alt>`);
//     });
//   }
//   box = document.getElementsByClassName('postcard_bg')[0];
//   box.addEventListener('dragover', function (e) { e.preventDefault(); });
//   box.addEventListener('drop', function dropped(e) {
//     e.preventDefault();
//     console.log(e.dataTransfer.getData('image/png'))
//     console.log(typeof (e.dataTransfer.getData('image/png')));
//     // box.innerHTML += e.dataTransfer.getData('image/png');  //用innerHTML會蓋掉原有的內容
//     box.insertAdjacentHTML('beforeend', e.dataTransfer.getData('image/png'));
//     drag();
//   })
// }

// //localhost
// function getLocalstorage() {
//   let tasks = JSON.parse(localStorage.getItem("tasks"));
//   if (tasks) {
//     return tasks[0];
//   }
// }
// let item = getLocalstorage();


// //html2canvas 下載圖片
// function screenshot() {
//   if (item) {
//     $(".postcard_send").css("height", "");
//     // $(".postcard_send").css("width", "753px");
//     $("html, body").scrollTop(0);
//     html2canvas(document.getElementsByClassName('postcard_send')[0]).then(function (canvas) {
//       // document.body.appendChild(canvas);
//       var a = document.createElement('a');
//       a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
//       a.download = 'image.jpg';
//       a.click();
//     });
//   } else {
//     alert('請先登入喔!');
//   }
// }

// $('.send').click(function () {
//   if (item) {
//     $(".postcard_send").css("height", "");
//     $(".postcard_send").css("width", "753px");
//     $("html, body").scrollTop(0);
//     html2canvas(document.getElementsByClassName('postcard_send')[0]).then(function (canvas) {
//       // document.body.appendChild(canvas);
//       var a = document.createElement('a');
//       a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
//       let base64 = canvas.toDataURL("image/jpeg");
//       // console.log(base64);
//       let your_mail = $('.email_text').val();
//       mailtest(your_mail, base64);

//     });
//   } else {
//     alert('請先登入喔!');
//   }
// });


// function mailtest(your_mail, base64) {

//   //Typing your code...
//   $.ajax({
//     method: "POST",
//     url: "./assets/php/front/send.php",
//     data: {
//       'your_mail': your_mail,
//       'base64': base64,
//     },
//     dataType: "text",
//     success: function (response) {
//       //更新html內容
//       // document.getElementsByClassName('tr')[0].innerHTML = response;
//       // console.log(response);
//       alert('明信片已經為您寄出!');
//     },
//     error: function (exception) {
//       alert("發生錯誤: " + exception.status);
//     }
//   });

// }