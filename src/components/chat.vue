<template>
  <div class="chat container">
    <h2 class="center black-text"><u>Live Chat App - Vue.js</u></h2>
    <h6 class="left-align black-text">Total Messages: {{ totalMessage() }}</h6>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li v-for="message in messages" :key="message.id" class="list"> 
            <p class="left-align name">Name: {{ message.name }}</p>
            <p class="right-align time">Time: {{ message.timestamp }}</p>
            <p class="left-align">Message: {{ message.content }}</p>

            <hr>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage :name="name"/>
      </div>
    </div>
  </div>
</template>

<script>

import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import moment from 'moment'

export default {
  name: 'chat',
  props: ['name'],

  components: {
    NewMessage
  },

  data () {
    return {
      messages: [],
      total: null
    }
  },
  methods: {
    totalMessage: function(){
      return this.total;
    }
  },
  created(){
    let ref = db.collection('messages');

    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if(change.type == "added"){
          let doc = change.doc;
          this.total++;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format('lll')

          });
        }
      });
    });
  }
}
</script>


<style scoped>

  .card {
    margin-top: 30px;
  }

  .chat h2 {
    font-size: 2.6em;
    margin-bottom: 40px;
  }

  .chat span {
    font-size: 1.4em;
  }

  .list {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .chat .time {
    display: block;
    font-size: 1.2em;
  }

  .chat .name {
    color: black;
    font-size: 1.4em;
  }

  .chat .time {
    font-style: italic;
    font-size: 1em;
    color: gray;
    padding-right: 30px;
  }

  .messages {
    max-height: 500px;
    overflow: auto;
  }

  .messages::webkit-scrollbar {
    width: 3px;
  }

  .messages::webkit-scrollbar-track {
    background: #ddd;
  }

  .messages::webkit-scrollbar-thumb {
    background: #aaa;
  }

  .card-content {
    background: #ffff88;
    border: 1px solid black;
    padding: 10px;
    box-shadow: 5px 10px #888888;
  }

  .card-action {
    border: 1px solid black;
    padding: 10px;
    box-shadow: 5px 10px #888888;
    margin-bottom: 100px;
  }

  hr {
      border-top: 1px dashed red;
  }
</style>
