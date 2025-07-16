  
  //Write a script that prints the numbers from 1 to 100.
  // But for multiples of three print "Infinite" instead of the number and for the multiples of five print "Tiers".
  //  For numbers which are multiples of both three and five print "Infinite Tiers".
  
  for(let i=1;i<101;i++)
  {
    if(i%3==0 && i%5==0)
    {console.log("Infinite Tiers");}
    else if (i%5==0)
    {console.log("Tiers");}
    else if(i%3==0)
    {console.log("Infinite");}
    else
    {console.log(i);}
  }