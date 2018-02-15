var stats = (function () {
	var people = 0;

	// DOM
	var $stats = $('#statsModule');
	var template = $('#stats-template').html();

	// Bind to events
	events.on('peopleChange', setPeople);

	render();

	function render() {
		$stats.html(Mustache.render(template, { people: people }));
	}

	function setPeople(newPeople) {
		people = newPeople;
		render();
	}
})();