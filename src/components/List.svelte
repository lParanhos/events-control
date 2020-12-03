<script>
  import Delete from "carbon-icons-svelte/lib/Delete20";
  import Edit from "carbon-icons-svelte/lib/Edit20";
  import { onMount, afterUpdate } from "svelte";

  export let data = [];

  afterUpdate(() => {
    console.log(data);
  });
</script>

<style>
  td {
    text-align: center;
  }
</style>

<table class="table-auto">
  <thead>
    <tr>
      <th class="px-4 py-2">Evento</th>
      <th class="px-4 py-2">Cliente</th>
      <th class="px-4 py-2">Data</th>
      <th class="px-4 py-2">Ações</th>
    </tr>
  </thead>
  <tbody>
    {#each data as item, index}
      <tr class:bg-gray-100={index % 2}>
        <td class="border px-12 py-2">{item.description}</td>
        <td class="border px-12 py-2">{item.User.name}</td>
        <td class="border px-12 py-2">{item.date}</td>
        <td class="border px-12 py-2">
          <button>
            <Delete />
          </button>
          <button>
            <Edit />
          </button>
        </td>
      </tr>
    {/each}
  </tbody>
</table>
