//  Chapter # 21-25 ...

// Task # 1...

    // var firstname  = prompt("Enter your first name");
    // var lastname  = prompt("Enter your last name");
    // var fullname = firstname + lastname;
    // alert("Welcome  " + fullname)

//  Task # 2...

    // var Faviortemobile = prompt("What is your Faviorte mobile phone model");

    // console.log(Faviortemobile.length)

// Task # 3...

    // var country = "Pakistani";
    // document.write(country.indexOf("n"));


//  Task # 4 ...

    // var string = "Hello World";
    // var index;
    // document.write( "String" + ":" + string+ "<br> <br>" + "Last Index of l" + ":" + string.lastIndexOf("l") )
    
    
//  Task # 5 ...
    
    // var string = "Pakistani";
    
    // document.write( "String" + ":" + string+ "<br> <br>" + "Characters at index 3" + ":" + string.charAt(3) )
    

// Task # 6 . .. 

    // var firstname  = prompt("Enter your first name");
    // var lastname  = prompt("Enter your last name");
    // var fullname = firstname.concat(lastname);
    // console.log(fullname)

// Task # 7 ... 

// var city = "hyderabad";
// var newcity =city.replace("hyder","Islam");
// console.log(newcity)

//  Task # 8 ...


    // var message = "Ali and Sami are best friends. They play cricket and football together";
    // var repalce = message.replace(/and/g,"&")
    // console.log(repalce)

// Task # 9...


    // var string = "472";
    // var number = parseInt(string)
    // console.log(number)

// Task # 10 ...

    // var input = prompt("Enter something and changed into upper case letter");
    // var change = input.toUpperCase(input)
    // console.log(change)

//  Task # 11 ...

    //  var some = prompt("Enter something ");
    // var change = some.toUpperCase(some)
    // alert(change)

// Task # 12 ...

    // var num = 35.36;
    // var rem = num + "";
    // rem =rem.replace(".","");
    // rem = parseInt(rem);
    // alert (rem)

//  Task # 13 ...

    // var name = prompt("Enter your name");
    //     if( name === ""){
    //         alert("Please enter your name")
    //     }else if ( name === "!"){
    //         alert("Enter a valid user name")
    //     }
    //     else if ( name === ","){
    //         alert("Enter a valid user name")
    //     }
    //     else if ( name === "."){
    //         alert("Enter a valid user name")
    //     }
    //     else if ( name === "@"){
    //         alert("Enter a valid user name")
    //     }
  
    // console.log(name)



//  Task # 14 ...  (KArna Baki HAi..)

    // var item = ["cake", "apple pie", "cookie", "chips", "patties"];
    // var input = prompt("Enter your faviourte item");
    // var chng = input.toLocaleLowerCase(chng);


    // for(i = 0; i<item.length;i++){
    //     if(item.length === chng){
    //         return()
    //     }
    //     else{
    //         alert("Wedont found")
    //     }
        
    // }


//  Task #  15 ....


    // var pass = prompt("Enter yout password");
    // var num = [0,1,2,3,4,5,6,7,8,9]
    // for (i = 0;  i<pass.length; i++){
    //     if ( pass === ""){
    //         alert("Enter a valid Passowrd")
    //     }else if (pass.includes(parseInt(num.charAt(0))) ){
    //         alert("pasword is valid")
    //     }else{
    //         alert("Password is not valid")
    //     }
    // }



// Task # 16 ...

    // var university = "University of karachi";
    // var arry = university.split("")
    // alert (arry)


//  Task # 17 ..

//  var str = "The quick brown fox jumps over the lazy dog";
//  var chng = str.toLocaleLowerCase(chng)
//  var find = chng.indexOf("brown")
//  console.log(find)


//  Chapter 26-30 ...

// Task # 1 ...

    // var detail = prompt("Enter a number");
    // var chng = Math.round(detail)
    // var flor = Math.floor(detail)
    // var cel =  Math.ceil(detail)
    // // var chng = Math.floor(detail )
    // alert(detail)
    // alert(chng)
    // alert(flor)
    // alert(cel)

//  TASk # 2 ...

    // var num = prompt("Enter a negative number");
    // var rnd = Math.round(num);
    // var flr = Math.floor(num);
    // var cel = Math.ceil(num);
    // console.log(num)
    // console.log(rnd)
    // console.log(flr)
    // console.log(cel)

//  Task # 3 ... 

    // var num = -4;
    // var chng = Math.abs(num);
    // console.log(chng)
     
//  Task # 4 ...

// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// console.log("Random Dice Value" + diceRoll);

//  Task # 5 ...

    // var coin =  Math.floor(Math.random() * 2) +1;
    // console.log("Random Coin Value" + coin)

//  Task # 6 ...

    // var num = Math.floor(Math.random() * 99) +2;
    // console.log(num)

//  Task # 7 ...

    // var weight = prompt("Enter your Weight");

//  Task # 8 ...

    // var num = prompt("Enter a number between 1 to 10");
    // var rnd = Math.floor(Math.random() *10) + 1;
    // if ( num == rnd){
    //     alert("Congratulation")
    // }else{
    //     alert("try again")
    // }


        //  Chapter # 31-34 ...

//  Task # 1 ...

    // var date = new Date();
    // console.log(date)

//  Task # 2 ...
// var dte = new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var currentmonth = month[dte.getMonth()];
// console.log(currentmonth)

//  Task # 3 ...

// var dte = new Date();
// var day =  new Array;
// day[0] = "mon";
// day[1] = "tue";
// day[2] = "wed";
// day[3] = "thu";
// day[4] = "frd";
// day[5] = "sat";
// day[6] = "sun";
// var currentday = day[dte.getDay()];
// console.log(currentday)

//  Task # 4 ...

