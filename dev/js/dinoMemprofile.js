new Vue({
  el: '#app',
  data: {
    //會員資料
    memberRows: [],
  },

  methods: {
     //個人資料
    member() {
      const xhr = new XMLHttpRequest();
      const my = this;
      xhr.onload = function () {
        if (xhr.status == 200) {
          my.memberRows = JSON.parse(xhr.responseText);
        } else {
          alert(xhr.status);
        }
      }
      xhr.open("get", "./php/getMember.php", true);
      xhr.send(null);
    },
  },
  mounted() {
    this.member();
  }
})