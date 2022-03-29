
    const TotalPadding=12;
   var mytemp=''.padStart(TotalPadding+1,' ');

   for (let i = 0; i < 11; i ++)
   {    
     for (let j = 1; j < 11; j++)
      {          
        if (i==0)
         {
            mytemp=mytemp+(j + ' ').padStart(TotalPadding,' ');  //Первый строк индекс рисуем
         }
        else 
         {
             mytemp=mytemp+((i ** j)+'').padStart(TotalPadding,' ');
         }
     }   

    if (i != 0)
     {        
       console.log( (i + "").padStart(TotalPadding,' ')+mytemp);
     }
    else 
     {
       console.log(mytemp);
     }
      mytemp="";
    }







