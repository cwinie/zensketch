// jquery for sketch
$(document).ready(function() {
	// declare grid variables
	var boxSize = 16;
	var container = $('#container');
  var button = $('button').hide();

	// empty container
	function empty() {
		container.fadeToggle('3000');
		container.empty();
	}

	// build first grid
	buildGrid(boxSize);
  $('#container div').hover(function() {
  	button.fadeIn(2000);
  	$(this).addClass('hover');
  });

	// reset grid
  $('#reset').click(function() {
  	/*$('#container').fadeToggle('3000');
  	$('#container').empty(); */
		empty();
    reset();
    $(document).ready(function() {
      $('#container').fadeToggle('3000');
    	$('#container div').hover(function() {
  		$(this).addClass('hover');
  	});
    });
    });

	 // expand options
   $('#more').on('click', function() {
   	$('#options').slideToggle(1000);
   });

	 // reset grid to random colors
	 $('.random').on('click', function() {
		 empty();
		 reset();
		 $(document).ready(function() {
      $('#container').fadeToggle('3000');
     	$('#container div').hover(function() {
   		$(this).addClass('hover');
   	 });

	 });


});

// build etch-a-sketch grid
function buildGrid(size) {
  var boxNumber = size * size;
  var container = document.getElementById('container');

  for (var i = 0; i < boxNumber; i++) {
  var box = buildBox(size);
  container.appendChild(box);
  }
  //alert(boxNumber);
}

// build individual boxes
function buildBox(size) {
	var canvasSize = 480;
	var dimensions = canvasSize / size;
  var box = document.createElement('div');
  box.style.margin = "0";
  box.style.padding = "0px";
  box.style.height = dimensions + "px";
  box.style.width = dimensions + "px";
  //box.style.border = "1px solid black";
  box.style.borderCollapse = "collapse"
  box.style.cssFloat = "left";
  //box.style.borderRadius = "50%";
  return box;
}

// clear grid and get new dimensions
function reset() {
		var input = prompt('How many boxes? (Between 10 and 100)');
    while (input == null || input > 100 || input < 10) {
    input = prompt('Try again, dummy. (Between 10 and 100)');
    }
    //alert('Your grid will be ' + input + 'x' + input + 'boxes');
    buildGrid(input);
}

function random() {

}
