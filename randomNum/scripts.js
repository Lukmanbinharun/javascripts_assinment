let low = 1;
let hi = 10;
let win = false;

tr = ['1st', '2nd', '3rd']


let currecr_ans = Math.ceil(Math.random()*10);
console.log(currecr_ans);

for (let index = 0; index < 3; index++) {
    let user_ans = prompt(`Your ${tr[index]} try
Please Enter a Number between 1 to 10`);

    if(user_ans == currecr_ans){
        window.alert("You Win!");
        break;
    }
    if(index == 2){
        window.alert("You loss!");
        break;
    }
    else if( user_ans < currecr_ans){
        window.alert(" Correct answer is greater!")   
    }
    else{
        window.alert("Correct answer is smaller! ");
    }
    
}



