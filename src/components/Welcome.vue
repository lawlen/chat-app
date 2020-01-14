<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h4 class="black-text"><i>Live Chat App</i></h4>
        <form>
          <label for="name">Enter a name:</label>
          <input type="text" name="name" v-model="name">
          <p v-if="feedback" class="red-text"> {{ feedback }}</p>
          <button class="btn grey" @click.prevent="enterChat">Enter Chat</button>
          <br><label for="name">Developed by Lawlen Shek</label>
        </form>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
      name: '',
      feedback: ''
    }
  },
  methods: {
    enterChat: function(){
        if(this.name){
          this.$router.push({name: 'chat', params: { name: this.name }});
        } else {
          this.feedback = "You must enter a name.";
        }
        
      
    }
  }
}
</script>


<style scoped>
  .welcome {
    max-width: 400px;
    margin-top: 100px;
  }

  .welcome h2 {
    font-size: 3ems;
  }

  .welcome button {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .card-content {
    border: 1px solid black;
  }

</style>
