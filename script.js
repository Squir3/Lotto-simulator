function lottoLiczby()
{
    var lottoNum = [];

   for (var i = 0; i < 6; i++)
   {
       var temp = Math.floor(Math.random() * 49 + 1);

       if (lottoNum.indexOf(temp) == - 1)
       {
           lottoNum.push(temp);
           document.getElementById("kulka"+i).innerHTML = lottoNum[i];
       }
       else
       {
           i--;
       }
   }

    
}