<script>
	import Child from '../lib/Component.svelte';
</script>

<div>
	<Child />
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
