var app = new Vue({

  el: '#app',

created() {

    this.fetchDataUser(); 
    this.fetchDataPost();
    this.fetchDataComment(); 
  	

    //console.log('Criado');

  },
  data: {
    
    Userlist : null,
    Postlist : null,
    Comentlist : null,
    finalObjet: []
    

  },
  methods: {

  	teste: function () {
    
       //	console.log(this.Userlist); 
    	console.log(this.Userlist);		

	  },

	   fetchDataUser() {

    	axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
       
      	 this.Userlist = response.data;


        });
    },fetchDataPost() {

    	axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
       
      	 this.Postlist = response.data;
      	 //console.log(response.data);

        });
    },fetchDataComment() {

    	axios.get('https://jsonplaceholder.typicode.com/comments').then(response => {
       
      	 this.Comentlist = response.data;
      	 this.MakenewObject();



        });
    },MakenewObject(){

    	for (indexUser in this.Userlist){
    		

				this.Userlist[indexUser].Postlist = [];

				for (indexPost in this.Postlist) {

					if (this.Postlist[indexPost].userId != this.Userlist[indexUser].id) continue;

					this.Postlist[indexPost].Comentlist = [];

							for (indexComment in this.Comentlist) {

					if (this.Comentlist[indexComment].postId != this.Postlist[indexPost].id) continue;

					this.Postlist[indexPost].Comentlist.push(this.Comentlist[indexComment]);

				}

				this.Userlist[indexUser].Postlist.push(this.Postlist[indexPost]);	


			}
		}

		this.finalObjet = this.Userlist;

    }
   
  },mounted() {    

  	// this.finalObjet = this.Userlist;

  }
  
})