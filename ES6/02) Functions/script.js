// Destructuring functions
function drawES2015Chart({size = 'big', cords = { x: 0, y: 0 }, radius = 25} = {}) {
	console.log(size, cords, radius);
	// do some chart drawing
}

// In Firefox, default values for destructuring assignments are not yet implemented (as described below).
// The workaround is to write the parameters in the following way:
// ({size: size = 'big', cords: cords = { x: 0, y: 0 }, radius: radius = 25} = {})

drawES2015Chart({
	cords: { x: 18, y: 30 },
	radius: 30
});

// Destructuring objects
var metadata = {
	title: 'Scratchpad',
	translations: [
		{
			locale: 'de',
			localization_tags: [ ],
			last_edit: '2014-04-14T08:43:37',
			url: '/de/docs/Tools/Scratchpad',
			title: 'JavaScript-Umgebung'
		}
	],
	url: '/en-US/docs/Tools/Scratchpad'
};

var { title: englishTitle, translations: [{ title: localeTitle }] } = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"