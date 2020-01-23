<template>
    <div class="row" id="register_wrapper">        
      <div class="col-md-5" id="register_frame-col1">
        <div class="row">
          <img src="./semicolon-logo.svg" class="col-md-6">
        </div>

          <form id="register_fil">
            <div class="form-row">         
              <div class="form-group col-md-6" style="padding-right:12px;">
                <!-- <label for="inputEmail4">Firstname</label> -->
                <input type="text" class="form-control register_input1"  placeholder="First Name">
              </div>
              <div class="form-group col-md-6" style="padding-left:12px;">
                <!-- <label for="inputEmail4">Lastname</label> -->
                <input type="text" class="form-control register_input2" placeholder="Last Name">
              </div>        
            </div>
            <div class="form-group" id="register_bigform1">
                <!-- <label for="inputEmail4">Email</border-color: red;label> -->
                <input type="email" class="form-control" placeholder="Email Address">
            </div>
            <div  class="form-group" id="register_bigform">
              <!-- <label for="inputPhone">Phonenumber</label> -->
              <input type="text" class="form-control"  placeholder="Phone Number">
            </div>
            <div class="form-group" id="register_bigform">
              <!-- <label for="inputState">Gender</label> -->
              <select id="inputState" class="form-control">
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
            <button type="submit" id="register_submit" class="btn">Apply</button>
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
  export default {
  }
</script>

<style src="./Register.css" scoped>
    
</style>