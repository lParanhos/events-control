<script lang="ts">
  export let md = "";
  export let label = "" ;
</script>

<div class={`w-full md:w-${md} px-3 mb-6 md:mb-0`}>
  <span
    class="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">{label}</span>
</div>
