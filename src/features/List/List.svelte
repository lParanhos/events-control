<script>
  import { goto } from "@sapper/app";
  import { onMount } from "svelte";
  import List from "../../components/List.svelte";

  let events = [];

  const handleClick = () => {
    goto("/add");
  };

  onMount(() => {
    fetch("/list.json")
      .then((response) => response.json())
      .then((data) => (events = data));
  });
</script>

<style>
  .title {
    text-align: center;
    font-size: 24px;
    margin-bottom: 30px;
  }

  section {
    display: flex;
    justify-content: center;
  }
</style>

<main>
  <h1 class="title">Eventos</h1>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    on:click={handleClick}>Adicionar</button>
  <section>
    <List data={events} />
  </section>
</main>
