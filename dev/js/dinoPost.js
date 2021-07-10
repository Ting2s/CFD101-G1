function showPreview(event){
    if(event.target.files.length > 0){
      let src = URL.createObjectURL(event.target.files[0]);
      let preview = document.getElementById("file-ip-1-preview");
      preview.src = src;
      preview.style.display = "block";
    }
  };

  let vm = new Vue({
    el: "#app",
    data(){
      return{
        lasttext: 250,
        showModal: false
      }
    },
    methods:{
      remain(){
      let text = this.input.length;
      this.lasttext = 250 - text ;
      }
    },
  });