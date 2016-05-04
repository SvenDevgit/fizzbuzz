$( document ).ready(function() {
    
    var voutput;
    for (var i=1; i<100; i++)
    {
      if (i%3==0 && i%5==0)
      {  voutput = 'FizzBuzz';
      }
      else if (i%3==0)
      {  voutput = 'Fizz';
      }
      else if (i%5==0)
      { voutput = 'Buzz';
      }
      else
      { voutput = i;	
      }
      $('body').append('<p>' + voutput + '</p>');
    }
 });  