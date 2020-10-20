<script>
  import { getEventsAction } from "../utils/utils";
  import { current_component } from "svelte/internal";
  export let title;
  export let checked;
  export let id;

  const events = getEventsAction(current_component);
</script>

<style>
  label {
    margin-right: 10px;
  }
</style>

<label class="inline-flex items-center mt-3">
  <input
    {id}
    type="checkbox"
    class="form-checkbox h-5 w-5 text-teal-600"
    use:events
    {checked} /><span class="ml-2 text-gray-700">{title}</span>
</label>
