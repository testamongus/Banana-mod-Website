<script>
	import NavigationBar from "$lib/NavigationBar/NavigationBar.svelte";
    import NavigationMargin from "$lib/NavigationBar/NavMargin.svelte";
	import Swal from 'sweetalert2';
	let name = '';
	let silly = '';
	Swal.fire({
                      title: 'You Found The Secret Page',
                      text: "You are very cool!",
                      icon: "success",
                  })
</script>
<NavigationBar />
<NavigationMargin />
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
</style>
