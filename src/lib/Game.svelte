<script lang="ts">
	import { bots } from '../stores/bots';
	import Bot from '$lib/Bot.svelte';

	let choices: string[3] = getThreeBots();

	let keepBot: string;
	let flipBot: string;
	let uninstallBot: string;

	$: game = [keepBot, flipBot, uninstallBot];

	function getThreeBots() {
		let bot1 = $bots[Math.floor(Math.random() * $bots.length)];
		let bot2 = $bots[Math.floor(Math.random() * $bots.length)];
		let bot3 = $bots[Math.floor(Math.random() * $bots.length)];

		if (bot1 == bot2 || bot2 == bot3 || bot1 == bot3) {
			return getThreeBots();
		}

		return [bot1, bot2, bot3];
	}

	function handleKeep(event) {
		let { bot } = event.detail;
		if (flipBot == bot) {
			flipBot = null;
		} else if (uninstallBot == bot) {
			uninstallBot = null;
		}
		keepBot = event.detail.bot;
	}

	function handleFlip(event) {
		let { bot } = event.detail;
		if (keepBot == bot) {
			keepBot = null;
		} else if (uninstallBot == bot) {
			uninstallBot = null;
		}
		flipBot = event.detail.bot;
	}

	function handleUninstall(event) {
		let { bot } = event.detail;
		if (keepBot == bot) {
			keepBot = null;
		} else if (flipBot == bot) {
			flipBot = null;
		}
		uninstallBot = event.detail.bot;
	}

	function clearGame() {
		choices = getThreeBots();
		keepBot = null;
		flipBot = null;
		uninstallBot = null;
	}
</script>

<section class="section">
	<div class="level">
		{#each choices as choice}
			<div class="level-item">
				<Bot
					bot={choice}
					{game}
					on:keep={handleKeep}
					on:flip={handleFlip}
					on:uninstall={handleUninstall}
				/>
			</div>
		{/each}
	</div>
	<br />
	<div class="field">
		<div class="control">
			<button on:click={clearGame} class="button is-small is-rounded is-link"
				>restart</button
			>
		</div>
	</div>
</section>
