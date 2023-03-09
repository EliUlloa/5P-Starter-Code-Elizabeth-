let button=document.querySelector("button");
                                  
 button.onclick = function() {
  let Q1=document.querySelector(".question1").value;
     let Q2=document.querySelector(".question2").value;
     console.log(Q1);
     console.log(Q2);
     
      if (Q1 <= 3  && Q2 === "Domesticated"  ) {
       document.querySelector(".result").innerHTML="    You have "   +  Q1  + " pets "  +  "   and you prefer " +  Q2  +  "   This means you are a Dog  "; 
      }
          
        else if (Q1 > 4 && Q2 === "Non-domesticated" ) 
        {
       document.querySelector(".result").innerHTML="  You have "   +  Q1  + " pets "  +  "   and you prefer " +  Q2  +  "   This means you are a Monkey  "; 
      }
 
        else if (Q1 <= 3   && Q2 === "Non-domesticated" ) 
        {
       document.querySelector(".result").innerHTML="You have "   +  Q1  + " pets "  +  "   and you prefer " +  Q2  +  "   This means you are a Lion  ";}
 
      else if (Q1 > 4  && Q2 === "Domesticated" ) 
      {
       document.querySelector(".result").innerHTML="You have "   +  Q1  + " pets "  +  "   and you prefer " +  Q2  +  "   This means you are a Pig  ";}
     
 };          