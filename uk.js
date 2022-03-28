function validate() {
   var usernamestatus = usernamevalidate();
   var emailstatus = emailvalidate();
   var passwordstatus = passwordvalidate();
   var contactstatus = contactvalidate();
   var dobstatus = dobvalidate();
   var genderstatus = gendervalidate();
   var hobbystatus = hobbyvalidate();
   var subjectstatus = subjectvalidate();
   var addressstatus = addressvalidate();
   var registerstatus = registervalidate();

    var udisplay = document.getElementById("udisplay");
   var edisplay = document.getElementById("edisplay");
   var pdisplay = document.getElementById("pdisplay");
   var cdisplay = document.getElementById("cdisplay");
   var ddisplay = document.getElementById("ddisplay");
   var gdisplay = document.getElementById("gdisplay");
   var hdisplay = document.getElementById("hdisplay");
   var sdisplaay = document.getElementById("sdisplay");
   var adisplay = document.getElementById("adisplay");
   var rdisplay = document.getElementById("rdisplay");

   if (usernamestatus === false) {
      if (emailstatus === false)
         edisplay.innerHTML = "*";
      if (passwordstatus === false)
         pdisplay.innerHTML = "*";
      if (contactstatus === false)
         cdisplay.innerHTML = "*";
      if (dobstatus === false)
         ddisplay.innerHTML = "*";
      if (genderstatus === false)
         gdisplay.innerHTML = "*";
      if (hobbystatus === false)
         hdisplay.innerHTML = "*";
      if (subjectstatus === false)
         sdisplaay.innerHTML = "*";
      if (addressstatus === false)
         adisplay.innerHTML = "*";
      if (registerstatus == false)
         rdisplay.innerHTML = "*";
      return false;

   }
   else if (emailstatus === false) {
      if (passwordstatus === false)
         pdisplay.innerHTML = "*";
      if (contactstatus === false)
         cdisplay.innerHTML = "*";
      if (dobstatus === false)
         ddisplay.innerHTML = "*";
      if (genderstatus === false)
         gdisplay.innerHTML = "*";
      if (hobbystatus == false)
         hdisplay.innerHTML = "*";
      if (subjectstatus === false)
         sdisplaay.innerHTML = "*";
      if (addressstatus === false)
         adisplay.innerHTML = "*";
      if (registerstatus == false)
         rdisplay.innerHTML = "*";
      return false;
   }
   else if (passwordstatus === false) {
      if (contactstatus === false)
         cdisplay.innerHTML = "*";
      if (dobstatus === false)
         ddisplay.innerHTML = "*";
      if (genderstatus === false)
         gdisplay.innerHTML = "*";
      if (hobbystatus == false)
         hdisplay.innerHTML = "*";
      if (subjectstatus === false)
         sdisplaay.innerHTML = "*";
      if (addressstatus === false)
         adisplay.innerHTML = "*";
      if (registerstatus == false)
         rdisplay.innerHTML = "*";
      return false;
   }
   else if (contactstatus === false) {
      if (dobstatus === false)
         ddisplay.innerHTML = "*";
      if (genderstatus === false)
         gdisplay.innerHTML = "*";
      if (hobbystatus == false)
         hdisplay.innerHTML = "*";
      if (subjectstatus === false)
         sdisplaay.innerHTML = "*";
      if (addressstatus === false)
         adisplay.innerHTML = "*";
      if (registerstatus == false)
         rdisplay.innerHTML = "*";
      return false;
   }
   else if (dobstatus === false) {
      if (genderstatus === false)
         gdisplay.innerHTML = "*";
      if (hobbystatus == false)
         hdisplay.innerHTML = "*";
      if (subjectstatus === false)
         sdisplaay.innerHTML = "*";
      if (addressstatus === false)
         adisplay.innerHTML = "*";
      if (registerstatus == false)
         rdisplay.innerHTML = "*";
      return false;
   }
   else if (genderstatus === false) {
      if (hobbystatus == false)
         hdisplay.innerHTML = "*";
      if (subjectstatus === false)
         sdisplaay.innerHTML = "*";
      if (addressstatus === false)
         adisplay.innerHTML = "*";
      if (registerstatus == false)
         rdisplay.innerHTML = "*";
      return false;
   }
   else if (hobbystatus === false) {
      if (subjectstatus === false)
         sdisplaay.innerHTML = "*";
      if (addressstatus === false)
         adisplay.innerHTML = "*";
      if (registerstatus == false)
         rdisplay.innerHTML = "*";
      return false;
   }
   else if (subjectstatus === false) {
      if (addressstatus === false)
         adisplay.innerHTML = "*";
      if (registerstatus == false)
         rdisplay.innerHTML = "*";
      return false;
   }
   else if (addressstatus === false) {
      if (registerstatus == false)
         rdisplay.innerHTML = "*";
      return false;
   }
   else if (registerstatus == false)

      return false;
}


function usernamevalidate() {
   var username = document.getElementById("username");
   var udisplay = document.getElementById("udisplay");

   if (username.Value.trim() === "") {
      udisplay.innerHTML = "uesrname required";
      return false;
   }
   else {
      udisplay.innerHTML = "";
      return true;
   }
}
function emailvalidate() {
   var email = document.getElementById("email");
   var edisplay = document.getElementById("edisplay");

   if (email.value.trim() === "") {
      edisplay.innerHTML = "email required";
      return false;
   }
   else {
      edisplay.innerHTML = "";
      return true;
   }

}
function passwordvalidate() {
   var password = document.getElementById("password");
   var pdisplay = document.getElementById("pdisplay");

   if (password.value.trim() === "") {
      pdisplay.innerHTML = "password required";
      return false;
   }
   else {
      var reg = /^(?=.+?[0-9])(?=.+?[A-Z])(?=.+?[a-z])(?=.+?[~!@#$%^&*()_+]).{8,}$/;
      if (reg.test(password.value)) {
         pdisplay.innerHTML = "valid";
         pdisplay.style.color = "red";
         return true;
      }
      else {
         pdisplay.innerHTML = "invalid";
         pdisplay.style.color = "blue";
         return false;
      }
   }

}
function contactvalidate() {


   var contact = document.getElementById("contact");
   var cdisplay = document.getElementById("cdisplay");

   if (contact.value.trim() === "") {
      cdisplay.innerHTML = "contact required";
      return false;
   }
   // else{
   //    cdisplay.innerHTML="";
   //    return true;
   // }
   else {
      var reg = /^[6789][0-9]{9}$/;
      if (reg.test(contact.value)) {
         cdisplay.innerHTML = "valid";
         cdisplay.style.color = "red";
         return true;
      }
      else {
         cdisplay.innerHTML = "invalid";
         cdisplay.style.color = "blue";
         return false;
      }
   }


}
function dobvalidate() {
   var dob = document.getElementById("dob");
   var ddisplay = document.getElementById("ddisplay");

   if (dob.value.trim() === "") {
      ddisplay.innerHTML = "dob required";
      return false;
   }
   else {
      ddisplay.innerHTML = "";
      return true;
   }
}
function gendervalidate() {
   var male = document.getElementById("male");
   var female = document.getElementById("female");
   var gdisplay = document.getElementById("gdisplay");

   if (male.checked === false && female.checked === false) {
      gdisplay.innerHTML = "gender required";
      return false;
   }
   else {
      gdisplay.innerHTML = "";
      return true;
   }
}
function hobbyvalidate() {
   var cricket = document.getElementById("cricket");
   var hockey = document.getElementById("hockey");
   var hdisplay = document.getElementById("hdisplay");

   if (cricket.checked === false && hockey.checked === false) {
      hdisplay.innerHTML = "hobby required";
      return false;
   }
   else {
      hdisplay.innerHTML = "";
      return true;
   }
}
function subjectvalidate() {
   var subject = document.getElementById("subject");
   var sdisplay = document.getElementById("sdisplay");

   if (subject.value === "") {
      sdisplay.innerHTML = "subject required";
      return false;
   }
   else {
      sdisplay.innerHTML = "";
      return true;
   }
}
function addressvalidate() {
   var address = document.getElementById("address");
   var adisplay = document.getElementById("adisplay");

   if (address.value.trim() === "") {
      adisplay.innerHTML = "address required";
      return false;
   }
   else {
      adisplay.innerHTML = "";
      return true;
   }
}
function registervalidate() {
   var register = document.getElementById("register");
   var rdisplay = document.getElementById("rdisplay");

   if (register.value.trim() === "") {
      rdisplay.innerHTML = " required";
      return false;
   }
   else {
      rdisplay.innerHTML = "";
      return true;
   }

}





