<script>
  import Delete from "carbon-icons-svelte/lib/Delete20";
  import Edit from "carbon-icons-svelte/lib/Edit20";

  export let data = [];
</script>

<style>
</style>

<table class="table-auto">
  <thead>
    <tr>
      <th class="px-4 py-2">Nome do Evento</th>
      <th class="px-4 py-2">Data</th>
      <th class="px-4 py-2">Ações</th>
    </tr>
  </thead>
  <tbody>
    {#each data as item, index}
      <tr class:bg-gray-100={index % 2}>
        <td class="border px-12 py-2">{item.name}</td>
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
