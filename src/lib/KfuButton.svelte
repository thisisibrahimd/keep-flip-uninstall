<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let bot: string;
  export let game: string[];

  $: keepBot = game[0];
  $: flipBot = game[1];
  $: uninstallBot = game[2];

  $: status =
    keepBot == bot
      ? "keep"
      : flipBot == bot
      ? "flip"
      : uninstallBot == bot
      ? "uninstall"
      : null;

  function keep() {
    dispatch("keep", { bot });
  }
  function flip() {
    dispatch("flip", { bot });
  }
  function uninstall() {
    dispatch("uninstall", { bot });
  }
</script>

<div class="field is-grouped">
  <div class="control">
    <button
      on:click={keep}
      class="{status !== 'keep' ? 'button is-rounded is-info is-small is-outlined' : 'button is-rounded is-info'}"
    >
      Keep
    </button>
  </div>
  <div class="control">
    <button
      on:click={flip}
      class="{status != 'flip' ? 'button is-rounded is-success is-small is-outlined' : 'button is-rounded is-success'}"
    >
      Flip
    </button>
  </div>
  <div class="control">
    <button
      on:click={uninstall}
      class="{status != 'uninstall' ? 'button is-rounded is-danger is-small is-outlined' : 'button is-rounded is-danger'}"
    >
      Uninstall
    </button>
  </div>
</div>
