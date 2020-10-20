<script>
  import { getEventsAction } from "../utils/utils";
  import { current_component } from "svelte/internal";

  export let label;
  export let md;
  export let type;
  export let placeholder;
  export let id;
  export let value = "";
  export let minlength;
  export let maxlength;
  export let name;

  const events = getEventsAction(current_component);
</script>

<div class={`w-full md:w-${md} px-3 mb-6 md:mb-0`}>
  <label
    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    for={id}>
    {label}
  </label>
  <input
    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    {id}
    {minlength}
    {maxlength}
    {name}
    use:events
    type={type || 'text'}
    {placeholder}
    {value} />
  <p class="text-red-500 text-xs italic">Please fill out this field.</p>
</div>
