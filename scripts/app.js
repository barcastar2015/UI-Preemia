var logos = [
	'images/barca.jpg',
	'images/chelsea.jpg',
	'images/flora.jpg',
	'images/juventus.jpg',
	'images/manu.jpg',
	'images/NYC.jpg',
	'images/psg.jpg',
	'images/real_madrid.jpg'
];

function startGame() {
	console.log("Starting new game");
	// add logos to squares 2 times
	
	var tiles = [];
	for (var i = 0; i < logos.length; i++) {
		tiles.push(logos[i]);
	}
	for (var i = 0; i < logos.length; i++) {
		tiles.push(logos[i]);
	}
	tiles = _.shuffle(tiles);
	// empty gamefield
	$('#gameboard').empty();
	for (var i = 0; i < tiles.length; i++) {
		var tile = '<div class="card"></div>';
		$('#gameboard').append(tile);
	}
	
	var openedTiles = [];
	
	$('#gameboard .card').click(function() {
		var tileNum = $(this).index();
		if (openedTiles.length >= 2 || $(this).hasClass('open')) {
			return;
		}
		openedTiles.push(tileNum);
		$(this).addClass('open');
		$(this).css('background-image', 'url('+tiles[tileNum]+')');
		if (openedTiles.length == 2) {
			var tileNum1 = openedTiles[0];
			var tileNum2 = openedTiles[1];
			console.log('tiles[tileNum1]: '+tiles[tileNum1]+', tiles[tileNum2]: '+tiles[tileNum2]);
			console.log(tileNum1, tileNum2);
			if (tiles[tileNum1] == tiles[tileNum2]) {
				openedTiles = [];
			}/*
			else if (tiles[tileNum1] == 'images/matu2.jpg' && tiles[tileNum2] == 'images/matu1.jpg') {
				openedTiles = [];
			} else if (tiles[tileNum1] == 'images/mark1.jpg' && tiles[tileNum2] == 'images/mark2.jpg' ||
			tiles[tileNum1] == 'images/mark2.jpg' && tiles[tileNum2] == 'images/mark1.jpg') {
				openedTiles = [];
			} else if (tiles[tileNum1] == 'images/margus1.jpg' && tiles[tileNum2] == 'images/margus2.jpg' ||
			tiles[tileNum1] == 'images/margus2.jpg' && tiles[tileNum2] == 'images/margus1.jpg') {
				openedTiles = [];
			} else if (tiles[tileNum1] == 'images/enzo1.jpg' && tiles[tileNum2] == 'images/enzo2.jpg' ||
			tiles[tileNum1] == 'images/enzo2.jpg' && tiles[tileNum2] == 'images/enzo1.jpg') {
				openedTiles = [];
			} else if (tiles[tileNum1] == 'images/kolts1.jpg' && tiles[tileNum2] == 'images/kolts2.jpg' ||
			tiles[tileNum1] == 'images/kolts2.jpg' && tiles[tileNum2] == 'images/kolts1.jpg') {
				openedTiles = [];
			} else if (tiles[tileNum1] == 'images/kask1.jpg' && tiles[tileNum2] == 'images/kask2.jpg' ||
			tiles[tileNum1] == 'images/kask2.jpg' && tiles[tileNum2] == 'images/kask1.jpg') {
				openedTiles = [];
			} else if (tiles[tileNum1] == 'images/martin1.jpg' && tiles[tileNum2] == 'images/martin2.jpg' ||
			tiles[tileNum1] == 'images/martin2.jpg' && tiles[tileNum2] == 'images/martin1.jpg') {
				openedTiles = [];
			} else if (tiles[tileNum1] == 'images/asd.jpg' && tiles[tileNum2] == 'images/asb.jpg' ||
			tiles[tileNum1] == 'images/asb.jpg' && tiles[tileNum2] == 'images/asd.jpg') {
				openedTiles = [];
			}*/ else {
				// eri pildid
				setTimeout(function() {
					$('#gameboard .card:eq('+tileNum1+')').css('background-image', '').removeClass('open');
					$('#gameboard .card:eq('+tileNum2+')').css('background-image', '').removeClass('open');
					openedTiles = [];
				}, 500);
			}
		} 
	});
}

startGame();