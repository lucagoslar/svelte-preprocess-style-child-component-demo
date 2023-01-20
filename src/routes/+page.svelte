<script>
	import Component from '$lib/Component.svelte';
</script>

<div>
	<Component />
	<p>Page</p>
</div>

<style lang="scss">
	p {
		color: blue;
	}

	Child {
		&::part(paragraph) {
			text-decoration: line-through;
			color: red;
		}
	}
</style>
