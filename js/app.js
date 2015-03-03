  var count = 0;
  var currQsn = 0;
  var completed = false;

$(document).ready(function(){

  $('.question, .container, .complete').hide();

  $('.start').click(function(e){
    e.preventDefault();
    $('.next').hide();
    $('.start, .complete').hide();
    $('.container, .question').fadeIn(500);
    restart();
    loadQ();
    enableForm();
  });

function Question(Question, a1, a2, a3, a4, correct){
  this.Question=Question;
  this.a1=a1;
  this.a2=a2;
  this.a3=a3;
  this.a4=a4;
  this.correct=correct;
}

    var one = new Question("When friction acts on matter falling into a black hole, it can create a very bright ___?", "Meteor trail", "Galactic cluster", "Hawking Glow", "Accretion disc", 4);
    var two = new Question("Who was the first person to use a telescope?", "Nicolas Copernicus", "Johnnes Kepler", "Isaac Newton", "Galielo Galilei", 4);
    var three = new Question("Who was the first known person to say that the Sun was the center of the Solar System?", "Aristarchus", "Aristotle", "Hypatia", "Ptolemy", 1);
    var four = new Question("Astronaut and future presidential candidate John Glenn served four terms as a US senator from what state?", "Florida", "Texas", "Ohio", "California", 3);
    var five = new Question("Who is famous for his work on the motion of planets?", "Johannes Franzen", "Johannes Cruyff", "Johannes Santana", "Johannes Kepler", 4);
    var six = new Question("Who was the 2nd man in space?", "Scott Carpenter", "John Glenn", "Virgil Grissom", "Alan Shepard", 4);
    var seven = new Question("What word does the \"S\" in NASA represent?", "Stellar", "Solar", "Space", "Sun", 3);
    var eight = new Question("What satellite, launched in 2013, will study more than one billion stars in the Milky Way?", "Hipparcos", "Rosetta", "Gaia", "Herschel", 4);
    var nine = new Question("What means \"the curved path that a moving object describes\"?", "Transient", "Trajectory", "Trapezium", "Tangent", 2); 
    var ten = new Question("What was the Space Shuttle Constitution renamed, after a massive letter-writing effort by TV fans?", "Enterprise", "Atlantis", "Challenger", "Jesus", 1);   

    var qsnList = [one, two, three, four, five, six, seven, eight, nine, ten];

//button hovers
    $('.begin button').on({
      mouseover:function(){
        $('.start').addClass('over');
      },
      mouseleave:function(){
        $('.start').removeClass('over');
      }
    })

    $('.container button').on({
      mouseover:function(){
          $(this).closest('.choice').addClass('hover');
      },
      mouseleave:function(){
          $(this).closest('.choice').removeClass('hover');
      },
      click:function(){
        if($(this).closest('.choice').attr('id') == qsnList[currQsn].correct){
          $(this).closest('.choice').addClass('correct').removeClass('hover')
          $('.next').addClass('over');
          addPoint();
          disableForm();
          addNext();
        }
        else{
          $(this).closest('.choice').addClass('incorrect').removeClass('hover');
          correctAnswer();
          disableForm();
          addNext();
        }
      }
    });

//next button reveal
   function addNext(){
    if(qsnList === ten){
      $('.next').text("Finish");
      $('.next').fadeIn(500);
    }
    else{
      $('.next').text("Next")
      $('.next').fadeIn(500);

    }
   }

   //add point
   function addPoint(){
    count++;
    $('').text(count);
   }

   function disableForm(){
    $('.container').find('.choice').attr('disabled', true);
}
   function enableForm(){
    $('.container').find('.choice').attr('disabled', false);
   }

   function clearClass(){
    $('.choice').removeClass('correct');
    $('.choice').removeClass('incorrect');
   }


    function finish() {
       finalScore();
      $('.container').fadeOut(500);
      $('.complete').fadeIn(500);
    }
    
//question toggle
   $('.choice').click(function(e){
    e.preventDefault();
    if(currQsn === 9){
      $('.next').text("Finish");
      $('.next').fadeIn(500);
      $('.next').click(finish);
    }
    else{
      currQsn++;
      addNext();
    }
   });

   //question load
   function loadQ(){
    $('.question').text(qsnList[currQsn].Question);
    $('.choice:nth-child(1)').text(qsnList[currQsn].a1);
    $('.choice:nth-child(2)').text(qsnList[currQsn].a2);
    $('.choice:nth-child(3)').text(qsnList[currQsn].a3);
    $('.choice:nth-child(4)').text(qsnList[currQsn].a4);
    $('.next').hide();
    clearClass();
   }

   //next button
    $('.next').click(function(){
    clearClass();
    loadQ();
    enableForm();
 })


//quiz restart
   function restart(){
    count = 0;
    currQsn = 0;
   }

//answer reveals
  function correctAnswer(){
    var ans = qsnList[currQsn].correct;
    $('.container').find('.choice#' + qsnList[currQsn].correct).addClass('correct', 500);
  }

//final
   function finalScore(){
    $('.complete p').html(count);
    if(count <= 3){
      $('.complete p').html( + count + " out of 10 correct <br /> stick with your current job!");
    }
     else if (count <= 5) {
      $('.complete p').html(  + count + " out of 10 correct <br /> not bad!"); 
    }
    else if (count == 6) {
      $('.complete p').html(  + count + " out of 10 correct <br /> keep reaching for the stars!"); 
    }
    else if (count <= 9){
      $('.complete p').html( + count + " out of 10 correct <br /> Good job!");
    }
    else{$('.complete p').html( + count + " out of 10 correct <br /> worthy of NASA!");
  }
    $('.question').hide();
    $('.container').hide();
   }
});