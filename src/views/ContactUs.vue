<template>
<div style="height:100vh;">
  <form class="contact-form rounded" @submit.prevent="sendEmail">
    <label>Name</label>
    <input type="text" class="form-control" name="user_name" required="required"><br>
    <label>Email</label>
    <input type="email" class="form-control" name="user_email" required="required"><br>
    <label>Message</label>
    <textarea class="form-control" name="message"></textarea><br>
    <input type="submit" class="btn btn-primary " value="Send" required="required">
  </form>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '../style/intern_project.css';
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
	div {
		background : #ffffff;
		padding : 1%;
		text-align : center;
	}
	
</style>
