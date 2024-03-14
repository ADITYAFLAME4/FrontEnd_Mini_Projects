function CheckPal(num) { 
	let str1 = num.toString(); 
	let str2 = str1.split('').reverse().join(''); 
	if(str1 == str2)	
      console.log(num  + " is palindrome number.");
   else
     console.log(num  + " is not a palindrome number.");
} 
CheckPal(121); 
CheckPal(123); 
