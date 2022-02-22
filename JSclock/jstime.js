alert("javascript timeing");

function changeColor();
       {
         date=new Date();
         hour=date.getHours();
         minute=date.getMinutes();
         seconds=date.getSeconds();
         timing=date.toLocalTimeString();
         x=document.getElemenyById("p1");
         x.innerHTML=timing;

         if(seconds%==0)
          {
            x.style.color="black"
          }
         else
          {
            x.style.color="blue"
          }

         function start()
          {
            setInterval(changeColor,1000);
          }

         function stop()
          {
            clearInterval(clear);
          }

    }
