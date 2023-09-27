let validation = (e)=>{
    let choice = e.target.innerHTML
    let input;
    let email_exp = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    let number_exp = /^\d{11}$/;
    let code_exp = /^\d{4}$/;
    let valid = false;


    switch (choice) {
        case 'Email':
            input = prompt(`Please Enter Your ${choice}`);
            console.log(input);
            console.log(input);
            valid = email_exp.test(input);
            break;
        case 'Phone Number':
            input = prompt(`Please Enter Your ${choice}`);
            valid = number_exp.test(input);
            break; 
        case 'Post Code':
            input = prompt(`Please Enter Your ${choice}`);
            valid = code_exp.test(input);
            break;  
    }
    if(!valid && input != null){
        window.alert("Your input is not valid");
        
    }
    else if(input != null){
       let output = document.getElementById('output');
       output.innerHTML = ` Your input is " ${input}"`
       e.preventDefault();
    }


}


let div = document.querySelector('ol');
div.addEventListener('click', validation);



