const firebaseConfig = {
    apiKey: "AIzaSyD7BzC0APoJgE4ppHnUc4IWwGzF_WNXYXI",
    authDomain: "detailform-20815.firebaseapp.com",
    databaseURL: "https://detailform-20815-default-rtdb.firebaseio.com",
    projectId: "detailform-20815",
    storageBucket: "detailform-20815.appspot.com",
    messagingSenderId: "351703909819",
    appId: "1:351703909819:web:0bc54a76f4d12fd2de309e"
  };

  firebase.initializeApp(firebaseConfig);

  var contactformDB = firebase.database() .ref("detailform ");
  document.getElementById('detailform').addEventListener('submit',submitForm);
  function submitForm(e){
    e.preventDefault();
    var Id=getElementByVal('id');
    var name=getElementByVal('name');
    var phn_num=getElementByVal('phn_num');
    var gmail=getElementByVal('gmail');
    var benchmark=getElementByVal('benchmark');
    var credits=getElementByVal('credits');
 saveMessages(saveMessages(Id, name, phn_num, gmail ,benchmark ,credits));
    
  }


  const saveMessages=(Id,name,phn_num,gmail, benchmark,credits)=>{
    var newdetailForm=contactformDB.push();

    newdetailForm.set({
        Id:id,
        name:name,

        phn_num:phn_num,
        gmail:gmail,
        benchmark:benchmark,
        credits:credits,
});
  };
  
  const getElementByVal=(id) =>{
    return document.getElementById(id).value;
  }