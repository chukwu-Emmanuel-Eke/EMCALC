let surname1= document.querySelector('#surname1');
  let mat1= document.querySelector('#mat1');
  let jamb1= document.querySelector('#jamb1');
  let phone1= document.querySelector('#phone1');
  let house1= document.querySelector('#house1');
  let current11= document.querySelector('#current1');
  let name_school1= document.querySelector('#name_school1');
  let submit= document.querySelector('#submit');


  submit.addEventListener('click',function(){
 
    if(surname1.value===""){
        alert('username required');
    }
    else if(mat1.value===""){
        alert('matric number required');
    }
    else if(jamb1.value===""){
        alert('jamb reg no required');                                                                                                                                           xz
    }
    else if(phone1.value===""){
        alert('phone number required');
    }
    else if(house1.value===""){
        alert('house address required');
    }
    else if(current1.value===""){
        alert('current cgpa required');
    }
    else if(name_school1.value===""){
        alert('name of school required')
    }
  else{
    alert('submitted successfully')
  }

  });




