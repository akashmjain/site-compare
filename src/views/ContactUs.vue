<template>
  <form class="contact-form" @submit.prevent="sendEmail">
    <label>Name</label>
    <input type="text" name="user_name">
    <label>Email</label>
    <input type="email" name="user_email">
    <label>Message</label>
    <textarea name="message"></textarea>
    <input type="submit" value="Send">
  </form>
</template>

<script>
import emailjs from 'emailjs-com';
require('dotenv').config();
export default {
    
    name: "ContactUs",
    methods: {
        sendEmail: (e) => {
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
        // console.log(e);
        console.log(process.env.VUE_APP_SERVICE_ID);
        emailjs.sendForm(process.env.VUE_APP_SERVICE_ID, process.env.VUE_APP_YOUR_TEMPLATE_ID, e.target, process.env.VUE_APP_MAIL_USER_ID)
            .then((result) => {
                console.log('SUCCESS!', result.status, result.text);
            }, (error) => {
                console.log('FAILED...', error);
            });
        }
    }
}
</script>

<style scoped>

</style>