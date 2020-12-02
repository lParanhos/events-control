<script lang="ts">
    import { getEventsAction } from "../utils/utils";
    import { current_component } from "svelte/internal";
  
    export let label = "";
    export let md = "";
    export let id = "";
    export let type: "date" | "time" = "time";
    export let value: string | number = "";
    export let name = "";
  
    let isInvalid = false;
  
    const events = getEventsAction(current_component);
    const onError = () =>{
      isInvalid = true;
    }
    const handleBlur = () => {
      if(isInvalid)
        isInvalid = false;
    }
  </script>
  
  <div class={`w-full md:w-${md} px-3 mb-6 md:mb-0`}>
    <label
      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      for={id}>
      {label}
    </label>
    <input
      class={`appearance-none block w-full bg-gray-200 text-gray-700 border ${isInvalid && "border-red-500"} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
      use:events
      {id}
      {name}
      {type}
      {value}
      on:invalid={onError}
      on:blur={handleBlur}
      />
      {#if isInvalid}
         <p class="text-red-500 text-xs italic">Por favor preencha esse campo.</p>
      {/if}
  </div>
  