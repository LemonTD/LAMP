<template>
    <div class="row" id="register_wrapper">        
      <div class="col-md-5" id="register_frame-col1">
        <div class="row">
         <!-- <img src="./semicolon-logo.svg" class="col-md-6"> -->
        </div>

          <form @submit="submitApplication" id="register_fil" method="POST">
            <div class="form-row">         
              <div class="form-group col-md-6" style="padding-right:12px;">
                <!-- <label for="inputEmail4">Firstname</label> -->
                <input type="text" class="form-control register_input1"  name="first_name" id="first_name" v-model="first_name" placeholder="First Name">
              </div>
              <div class="form-group col-md-6" style="padding-left:12px;">
                <!-- <label for="inputEmail4">Lastname</label> -->
                <input type="text" class="form-control register_input2" name="last_name" id="last_name" v-model="last_name" placeholder="Last Name">
              </div>        
            </div>
            
            <div class="form-group" id="register_bigform1">
                <!-- <label for="inputEmail4">Email</border-color: red;label> -->
                <input type="email" class="form-control" name="email" id="email" v-model="email" placeholder="Email Address">
            </div>
            <div class="form-group" id="register_bigform">
              <input type="text" class="form-control" name="username" id="username" v-model="username" placeholder="Username">
            </div>
            <div  class="form-group" id="register_bigform">
              <!-- <label for="inputPhone">Phonenumber</label> -->
              <input type="text" class="form-control"  placeholder="Phone Number">
            </div>
            <div class="form-group" id="register_bigform">
              <!-- <label for="inputState">Gender</label> -->
              <select id="gender" class="form-control" name="gender" v-model="gender">
                <option selected>Gender</option>
                <option>Male</option>
                <option>Female</option>
                
              </select>
            </div>
            <div class="form-group" id="register_bigform">
              <!-- <label for="inputState">Age Range</label> -->
              <select id="inputState" class="form-control">
                <option selected>Age Range</option>
                <option>Below 15</option>
                <option>15-20</option>
                <option>20-30</option>
                <option>30-40</option>
                <option>above 40</option>
              </select>
            </div>
            <div class="form-group">
            <button type="submit" id="register_submit"  class="btn">Apply</button>
            <button type="submit"  click="" class="btn">Apply</button>
            </div>
          </form>
        </div>

        <div class="col-md-7" id="register_frame-col2"> 
           <!-- <div class="col"> -->
          
              <button type="submit" class="btn" id="register_partner"> <a href="http://semicolon.africa/">  Partner with us</a></button>
        
        <!-- </div> -->

        </div>
      </div>
</template>
<script>
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);
Vue.use(axios)
export default {
    name: 'Laff',
    mounted() {
        console.log("mounted")
    },
    data() {
        return {
            
        first_name: '',
        last_name:  '',
        email: '',
        username: '',
        gender: ''
        };
    },
    methods: {

            submitApplication: function(){
    axios
      .post('http://lamp-api.herokuapp.com/accounts/register', {
        first_name: '' + this.first_name,
        last_name: '' + this.last_name,
        email: '' + this.email,
        username: '' + this.username,
        gender: '' + this.gender
      }).then(function(res){console.log(res)}).catch(function(err){console.log(err.data)})
  }
        }
    }

</script>

<style src="./components/Register.css" scoped>
    
</style>