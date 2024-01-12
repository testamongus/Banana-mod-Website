<script>
	let name = '';
	let silly = '';
</script>

<body>
	<p class="p3">You found my secret webpage! Well done!</p>
	<input class="p3" bind:value={name} placeholder="enter your name" />
	<input class="p3" bind:value={silly} placeholder="adjectives about you" />
	<h1 class="p3">{name || 'Cool Guy'} is the coolest person in the multiverse!</h1>
	<p class="p3">Also {name || 'Cool Guy'} is {silly || 'silly, cool, and funny'}!</p>
</body>

<style>
	.p3 {
		font-family: "Lucida Console", "Courier New", monospace;
	}

	body {
		background-color: lightsteelblue;
	}
</style>
