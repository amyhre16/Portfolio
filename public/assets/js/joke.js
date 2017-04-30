$(document).ready(function() {
	var jokes = [
		"<em><strong>Algorithm</strong> (noun)</em><br />Word used by programmers when...they do not want to explain what they did.",
		"<strong>Q:</strong> What's the object-oriented way to become wealthy?<br />" +
			"<strong>A:</strong> Inheritance.",
		"<strong>Q:</strong> What do you call a programmer from Finland?<br />" +
			"<strong>A:</strong> Nerdic.",
		"<strong>Q:</strong> What is a programmer's favourite hangout place?<br />" +
			"<strong>A:</strong> Foo Bar.",
		"<strong>Q:</strong> Why did the programmer quit its job?<br />" +
			"<strong>A:</strong> Because he didn't get arrays.",
		"<strong>Q:</strong> 0 is false and 1 is true, right?<br />" +
			"<strong>A:</strong> 1",
		"<strong>Q:</strong> Why do Java programmers have to wear glasses?<br />" +
			"<strong>A:</strong> Because they don't C#.",
		"How do you tell HTML from HTML5?<br />" +
			"Try it out in Internet Explorer. Did it work? No? It's HTML5.",
		"Real programmers count from 0.",
		"Chuck Norris writes code...that optimizes itself.",
		"Chuck Norris <em>can</em> simply walk to Mordor.",
		"<strong>Q:</strong> What do you call a bear with no teeth?<br />" +
			"<strong>A:</strong> A gummy-bear.",
		"<strong>Q:</strong> What do you get when you combine an alien with a kangaroo?<br />" +
			"<strong>A:</strong> A Mars-upial.",
		"Two television antennas met on a roof, fell in love, and got married. The ceremony wasn't very special, but the reception was excellent.",
		"A foo walks into a bar, takes a look around and says \"Hello, World!\"",
		"99 little bugs in the code,<br />99 little bugs in the code.<br />" +
			"1 bug fixed...try it again, 100 little bugs in the code.",
		"3 SQL Databases walked into a NoSQL bar.<br />" +
			"A little while later they walked out...because they couldn't find a table.",
		"<strong>Q:</strong> What do we do with JavaScript bugs?<br />" +
			"<strong>A:</strong> We console them.",
		"The programmer got stuck in the shower because the instructions on the shampoo bottle said <u><em>Lather. Rinse. Repeat.</em></u>",
		"A SQL query goes into a bar, walks up to two tables and asks \"Can I join you?",
		"[\"hip\", \"hip\"]",
		"<em>An optimist says:</em> \"The glass is half-full\"<br />" +
			"<em>A pessimist says:</em> \"The glass is half-empty\"<br />" +
			"<em>A programmer says:</em> \"The glass is twice as large as necessary\"",
		"<strong>Q:</strong> What's the worst thing about throwing a party in space?<br />" +
			"<strong>A:</strong> You have to planet.",
		"Yesterday a clown held the door open for me. I thought it was a nice jester.",
		"I used to want to be a banker....but I lost interest.",
		"I was walking through a quarry and said to the foreman, \"That's a big rock!\" \"Boulder,\" he replied. So I puffed out my chest and shouted, \"Look at that enormous rock over there!!\"",
		"It's hard to explain puns to a kleptomaniac, because they always take things literally",
		"Did you hear the joke about the German sausage? It was the wurst",
		"There are 10 types of people in the world: Those who understand binary and those who don't.",
		"A guy walks into a bar and asks for 1.014 root beers. The bartender says,\"I'll have to charge you extra, that's a root beer float.\" So the guy says, \"In that case, better make it a double.\"",
		"In order to understand recursion, you must first understand recursion.",
		"<strong>Q:</strong> What do you call it when a programmer throws up at IHOP?<br />" +
			"<strong>A:</strong> A stack overflow.",
		"// Solution to insomnia<br />" +
			"while (!asleep) {<br />" +
			"&nbsp&nbsp&nbsp&nbspsheep++;<br />}"
	];

	var random_index = Math.floor(Math.random() * jokes.length);

	$("#joke").html(jokes[random_index]);

	$(document).on('click', '#joke-button', function() {
		random_index = Math.floor(Math.random() * jokes.length);
		$("#joke").html(jokes[random_index]);
	});
});