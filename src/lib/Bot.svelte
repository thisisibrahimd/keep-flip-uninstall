<script lang="ts">
	import KfuButton from '$lib/KfuButton.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let bot: string;
	export let game: string[];
</script>

<div>
	<p class="subtitle is-4 has-text-weight-semibold">{bot}</p>
	<br />
	<KfuButton {bot} {game} on:keep on:flip on:uninstall />
</div>
