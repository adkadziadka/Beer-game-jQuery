var drink1 = new Audio();
drink1.src = "http://res.cloudinary.com/thkodaisseur/video/upload/v1498217715/Swallow_sound_effect_d6ynqn.mp3"

var drink2 = new Audio();
drink2.src = "http://res.cloudinary.com/thkodaisseur/video/upload/v1498217715/Swallow_sound_effect_d6ynqn.mp3"
drink2.playbackRate=0.5;

var victory1 = new Audio();
victory1.src = "http://res.cloudinary.com/thkodaisseur/video/upload/v1498218874/Cartoon_Winning_Sound_Effect_fvt4i5.mp3"

var victory2 = new Audio();
victory2.src = "http://res.cloudinary.com/thkodaisseur/video/upload/v1498219168/Burp_Sound_Effect_klf1l5.mp3"

$(document).keyup(function(e){
   switch(e.which) {
    case 13:
       $('#glass1').height('-=5px');
       drink1.play();
       if ($('#glass1').height() == 0) {
           victory1.play();
           victory2.play();
           alert('Player 1 win!');
       };
    break;
    
    case 40:
       $('#glass2').height('-=5px');
       drink2.play();
       if ($('#glass2').height() == 0) {
       		victory1.play();
          victory2.play();
          alert('Player 2 win!');
       };
    break;
    default: return;
 }
});

$('#restart').on('click', function(){
   $('#glass1').height('200px');
   $('#glass2').height('200px');
});