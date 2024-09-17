function showPreview(event){
    if(event.target.files.length > 0){
      let src = URL.createObjectURL(event.target.files[0]);
      let preview = document.getElementById("file-ip-1-preview");
      preview.src = src;
      preview.style.display = "block";
    }
  };

  Vue.component('box', {
    template: ` <div class="clickbac" style="display: none;">
                   <div class="modal">
                       <form method="post">
                           <div class="cross"><i class="fas fa-times" @click="discuss"></i></div>
                           <p>🎉發文成功🎉</p>
                       </form>
                   </div>
                </div>`,
    methods: {
        discuss() {
            window.location.href = "./dinoDisscus.html";
        },
    },
});

  let vm = new Vue({
    el: "#app",
    data(){
      return{
        lasttext: 250,
        input: "",
        type: "",
        title: "",
      }
    },
    methods:{
      remain(){
      let text = this.input.length;
      this.lasttext = 250 - text ;
      },

      send_data() {
        var form = $('form')[0];
        var formData = new FormData();
        let file = document.getElementById('file-ip-1').files[0]
        formData.append("title", this.title)
        formData.append("type", this.type)

        formData.append("text", this.input)
        formData.append("file", file)



        $.ajax({
            url: './php/dinoPost.php', 
            method: 'POST',               
            dataType: 'text',             
            contentType: false,
            cache: false,
            processData: false,
            data: formData,  
            success: function (res) {       
                console.log('成功');
                console.log(res);
                let lightbox = document.querySelectorAll('.clickbac')[0];
                lightbox.style.display = '';
            },
            error: function (res) {
                console.log('失敗');
                console.log(res);
                let lightbox = document.querySelectorAll('.clickbac')[0];
                lightbox.style.display = '';
            },
        });
      },
    },
  });