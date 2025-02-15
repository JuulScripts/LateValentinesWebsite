let stoneInfo = {
    Rose_Qaurtz: ["Rose Quartz", "Rose Quartz stands for love, passion, and unconditional love, which reminds me of you. (Also, it's really pretty)", "images/roseqaurtz.jpg"],
    Rhodochrosite: ["Rhodochrosite", "Rhodochrosite stands for compassion for others, it helps you understand people, which also reminds me of you because your sweet soul always makes sure people are okay", "images/Rhodochrosite.jpg"],
    Larimar: ["Larimar", "Larimar stands for peace and calm, and well Iris, you make me feel at peace and calm, so I figured why not add it to the list. Larimar can help people calm down, and you do the same thing to me :D.", "images/Larimar.jpg"],
    Howlite: ["Howlite", "Howlite stands for stress relief, and well you make me feel at peace, don't really got much to explain", "images/Howlite.jpg"],
    Celestite: ["Celestite", "Celestite is a heavenly stone and well you're an angel so duh. Celestite is also a very light and positive stone, and well your energy just radiates positivity soooooooooo yeah, and well Celestite is a special stone because it reminds many people of angelic things, and well you do the same so :D", "images/Celestite.jpg"]
 };
 
 function Pickone() {
    
    let stoneKeys = Object.keys(stoneInfo);
 

    let randomIndex = Math.floor(Math.random() * stoneKeys.length);
 
   
    let randomStone = stoneKeys[randomIndex];
 
  
    let stoneDetails = stoneInfo[randomStone];
 
    document.getElementById("stoneimage").setAttribute("src", stoneDetails[2]);  
    document.getElementById("info").textContent = stoneDetails[1];  
    document.getElementById("Name").textContent = stoneDetails[0];  
 }


 function Yes() {
    document.getElementById('awnser').textContent = "YAAYYAYAYAYAYAYAAYAAYAYYAYAAYAYYAYAYAYAYAYAYAYAYAYAYAY OKAY SO FIRST OF ALL YOU DO HAVE TO ACTUALY TELL ME THIS IN PERSON BECAUSE I CANT KNOW WHAT YOU PICKED AND SECOND OF ALL YAYAYAYAYAAYAYA SO I HAVE A WHOLE DAY PLANNED OUT FOR US! so heres what we can do first we can play some games whilst calling (IF YOU WANT TO AND IF U CAN CALL) AND THTEN MAYBE AFTER WE CAN WATCH A MOVIE TOGETHRE (JUS WATCH THE SAME ONE AT THE SAME TIME WHILST CALLING I FU CAN AND WANT TO) THEN WE CAN PICK OUT A NEKCLACE FOR EACHOTHER IF U WANT AND MAYBE AFTER THAT WE CAN UHHHHHHH WELL I THINK THE DAY WOULD PROBABLY BE DONE THEN NO? and of course im gonna get you gifts❤️"
    document.body.style.backgroundImage = "url('images/Pandas.jpg')";
}

 function No()  {
    document.getElementById('awnser').textContent = "okido iris i truly thank you for being honest! i really appreciate that you didnt just press yes to make me feel happy :D i hope that we can still play some fisch today tho hihi but i do have some bad news, yup thats right IM NOT SHARING MY PIZZA WITH YOU NOW >:)"
 
}

 