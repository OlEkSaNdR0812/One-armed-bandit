let userName = prompt("Введіть ім'я");
if (userName != null && userName != "") {
   document.getElementById("UserName").innerText = userName;
}
var arrSuit = {
	0:"♥", 
    1:"♦", 
	2:"♣", 
	3:"♠",
	};
var check = document.getElementById("inp")
var tern = document.getElementsByClassName("tern")
var allside = Array.from(document.getElementsByClassName("allside"))
var counter=0;
	check.addEventListener("click", function(){
				for (var i = 0; i < 9; i++){
				var temp = Math.floor(Math.random() * 4)
				allside[i].innerHTML = arrSuit[temp]			
				if (arrSuit[temp] == "♥" ||
				arrSuit[temp] == "♦"){
					allside[i].style.color = "red"
				}else{
					allside[i].style.color = "black"
				}	
				
			}
			console.log(counter);
			if((((allside[0].innerHTML)==(allside[1].innerHTML))&&((allside[1].innerHTML)==(allside[2].innerHTML)))||(((allside[6].innerHTML)==(allside[7].innerHTML))&&((allside[7].innerHTML)==(allside[8].innerHTML)))||(((allside[3].innerHTML)==(allside[4].innerHTML))&&((allside[4].innerHTML)==(allside[5].innerHTML)))){
				document.getElementById("title").innerText=("ВИ виграли!!!!!!!");
			}
			counter++;
			if (counter==3){
				document.getElementById("UserName").innerText=(userName+" Не бажаєте спробувати ще раз?");
			}
			if	(counter==4){location.reload()}		
		})
		
  
