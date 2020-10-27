<script>
  import { goto } from "@sapper/app";
  import List from "../components/List.svelte";

  let events = [
    { name: "Casamento B&R", date: "30/10/2020" },
    { name: "Aniversario 15 anos", date: "20/11/2020" },
    { name: "Aniversario 17 anos", date: "20/11/2020" },
  ];

  const handleClick = () => {
    goto("/addNewEvent");
  };
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
