<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <label for="new-message">Type Your Message:</label>
            <input type="text" name="new-message" v-model="newMessage"/>
            <button @click.prevent="addMessage">Send</button>
        </form>
        <p v-if="feedback" class="red-text"> {{ feedback }}</p>
    </div>
</template>

<script>

import db from '@/firebase/init'


export default {
    name: 'NewMessage',
    props: ['name'],
    data(){
        return {
            newMessage: null,
            feedback: null
        }
    },
    methods: {
        addMessage: function(){
            if(this.newMessage){
                this.feedback = null;
                db.collection('messages').add({
                    content: this.newMessage,
                    name: this.name,
                    timestamp: Date.now()
                });
                
                this.newMessage = null;

            } else {
                this.feedback = "You must enter a message.";
            }
            
        }
    }
}
</script>

<style scoped>

</style>