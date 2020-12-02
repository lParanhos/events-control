<script lang="ts">
  import Checkbox from "../../components/Checkbox.svelte";
  import FieldFormLabel from "../../components/FieldFormLabel.svelte";
  import Input from "../../components/Input.svelte";
  import InputDate from "../../components/InputDate.svelte";
  import Select from "../../components/Select.svelte";
  import { event } from "../../store/store";

  import { fetchAddress } from "../../http/cepIntegration";

  let fetchingAddress = true;

  const civilStateOptions = [
    "Selecione...",
    "Solteiro(a)",
    "Casado(a)",
    "Divorciado(a)",
    "Viúvo(a)",
    "Separado(a)",
  ];

  const handleChange = (ev) => ($event[ev.target.id] = ev.target.value);

  const onCheck = (ev) => ($event.type = ev.target.id);

  const handleAdrressSearch = () => {
    fetchingAddress = true;
    fetchAddress($event.zipCode).then((response) => {
      $event = { ...$event, ...response };
    });
    fetchingAddress = false;
  };

  const handleSubmit = async () => {
    const response = await fetch("/add.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify($event),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("result", result);
    }
  };
</script>

<style>
  form {
    padding-bottom: 30px;
  }
  .title {
    font-size: 24px;
    margin-bottom: 20px;
  }

  button {
    float: right;
  }
</style>

<form on:submit|preventDefault={handleSubmit}>
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h1 class="title">Dados do Contratante</h1>
    <div class="flex flex-wrap -mx-3 mb-6">
      <Input
        id="name"
        md="1/2"
        label="Nome do Cliente:"
        placeholder="Augusto Jorge"
        bind:value={$event.name} />
      <Select
        id="maritalStatus"
        md="1/2"
        label="Estado Civil:"
        options={civilStateOptions}
        bind:value={$event.maritalStatus} />
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <Input
        id="phoneNumber"
        md="1/2"
        label="Número do telefone:"
        placeholder="(99) 99999-9999"
        bind:value={$event.phoneNumber} />
    </div>
    {#if !fetchingAddress}
      <div class="flex flex-wrap -mx-3 mb-2">
        <Input
          id="street"
          md="3/4"
          label="Residente Domiciliado (a):"
          placeholder="Albuquerque"
          bind:value={$event.street} />

        <Input
          id="houseNumber"
          md="1/4"
          label="Número:"
          placeholder="000"
          bind:value={$event.houseNumber} />
      </div>
    {/if}
    {#if !fetchingAddress}
      <div class="flex flex-wrap -mx-3 mb-2">
        <Input
          id="neighborhood"
          md="2/3"
          label="Bairro:"
          placeholder="Jardim Ibirapuera"
          value={$event.neighborhood} />
        <Input
          id="city"
          md="1/3"
          label="Cidade:"
          placeholder="São Paulo"
          value={$event.city} />
      </div>
    {/if}
    <div class="flex flex-wrap -mx-3 mb-2">
      {#if !fetchingAddress}
        <Input
          id="state"
          md="1/3"
          label="Estado:"
          placeholder="SP"
          value={$event.state} />
      {/if}
      <Input
        id="zipCode"
        md="1/3"
        label="CEP:"
        name="cep"
        placeholder="9090045"
        minlength="8"
        maxlength="8"
        on:blur={handleAdrressSearch}
        bind:value={$event.zipCode} />
    </div>
  </div>
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h1 class="title">Dados do Evento</h1>
    <div class="flex flex-wrap -mx-3 mb-6">
      <Input
        id="description"
        md="2/2"
        label="Tipo do pacote:"
        placeholder="Augusto Jorge"
        bind:value={$event.description} />
    </div>
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/1 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="observations">
          Observações:
        </label>
        <textarea
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="observations"
          bind:value={$event.observations}
          placeholder="Albuquerque" />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-2">
      <FieldFormLabel md="1/1" label="Tipo de evento:" />
      <div class="w-full md:w-1/1 px-3 mb-6 md:mb-0">
        <Checkbox
          id="weeding"
          on:click={onCheck}
          checked={$event.type === 'weeding'}
          title="Casamento" />
        <Checkbox
          id="birthday"
          on:click={onCheck}
          checked={$event.type === 'birthday'}
          title="Aniversário" />
      </div>
    </div>
    {#if $event.type}
      <div class="flex flex-wrap -mx-3 mb-2">
        <Input
          id="groomsName"
          md="2/3"
          label={`Nome
              ${$event.type === 'weeding' ? 'dos Noivos' : 'do(a) aniversariante'}:`}
          placeholder="Ronald e Mary" />
        <InputDate
          id="date"
          md="1/3"
          label="Data do evento:"
          type="date"
          on:change={handleChange} />
      </div>
      {#if $event.type === 'weeding'}
        <div class="flex flex-wrap -mx-3 mb-2">
          <Input
            id="weedingLocation"
            md="2/3"
            label="Local da Cerimônia Religiosa:"
            placeholder="Rua 123 - Chacara 4 - Campinas" />

          <InputDate id="weedingTime" md="1/3" label="Horário da Cerimônia:" />
        </div>
      {/if}
      <div class="flex flex-wrap -mx-3 mb-2">
        <Input
          id="eventLocation"
          md="1/1"
          label="Local da Recepção:"
          placeholder="Rua 123 - Chacara 4 - Campinas" />
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <FieldFormLabel md="1/1" label="Horário da Recepção:" />
        <InputDate
          id="eventStart"
          md="2/4"
          label="Início"
          on:change={handleChange} />
        <InputDate
          id="eventEnd"
          md="2/4"
          label="Término"
          on:change={handleChange} />
      </div>
    {/if}
  </div>
  <button
    type="submit"
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Salvar evento
  </button>
</form>
