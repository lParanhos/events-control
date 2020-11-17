<script>
    import Checkbox from "../../components/Checkbox.svelte";
    import FieldFormLabel from "../../components/FieldFormLabel.svelte";
    import Input from "../../components/Input.svelte";
    import Select from "../../components/Select.svelte";
  
    let address = {};
    let eventType = "";
    let fetchingAddress = true;
    let form;
  
    $: console.log(form);
  
    const civilStateOptions = [
      "Solteiro(a)",
      "Casado(a)",
      "Divorciado(a)",
      "Viúvo(a)",
      "Separado(a)",
    ];
  
    const fetchAddress = () => {
      fetchingAddress = true;
      fetch(`https://viacep.com.br/ws/${address.cep}/json/`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((response) => {
          address = { ...response };
          fetchingAddress = false;
        });
    };
  
    const onInput = (ev) => (address[ev.target.name] = ev.target.value);
    const onCheck = (ev) => {
      if (ev.target.value === eventType) {
        eventType = "";
        return;
      }
  
      eventType = ev.target.id;
    };
  
    const handleSubmit = async (ev) => {
      console.log(ev.target);
      const fake = {
        date: "2020-11-01",
        type: eventType,
        email: "cleb@assrrrr.com",
        phoneNumber: 122222222222,
      };
  
      const response = await fetch("/add.json", {
        method: "POST",
  
        headers: {
          "Content-Type": "application/json",
        },
  
        body: JSON.stringify(fake),
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
          placeholder="Augusto Jorge" />
        <Select id="maritalStatus" md="1/2" label="Estado Civil:" options={civilStateOptions} />
      </div>
      {#if !fetchingAddress}
        <div class="flex flex-wrap -mx-3 mb-2">
          <Input
            id="street"
            md="3/4"
            label="Residente Domiciliado (a):"
            placeholder="Albuquerque"
            value={address.logradouro} />
  
          <Input
            id="houseNumber"
            md="1/4"
            label="Número:"
            placeholder="000"
            value={address.numero} />
        </div>
      {/if}
      {#if !fetchingAddress}
        <div class="flex flex-wrap -mx-3 mb-2">
          <Input
            id="neighborhood"
            md="2/3"
            label="Bairro:"
            placeholder="Jardim Ibirapuera"
            value={address.bairro} />
          <Input
            id="city"
            md="1/3"
            label="Cidade:"
            placeholder="São Paulo"
            value={address.localidade} />
        </div>
      {/if}
      <div class="flex flex-wrap -mx-3 mb-2">
        {#if !fetchingAddress}
          <Input
            id="state"
            md="1/3"
            label="Estado:"
            placeholder="SP"
            value={address.uf} />
        {/if}
        <Input
          id="zipCode"
          md="1/3"
          label="CEP:"
          name="cep"
          placeholder="9090045"
          minlength="8"
          maxlength="8"
          on:blur={fetchAddress}
          value={address.cep}
          on:input={onInput} />
      </div>
    </div>
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 class="title">Dados do Evento</h1>
      <div class="flex flex-wrap -mx-3 mb-6">
        <Input
          id="description"
          md="2/2"
          label="Tipo do pacote:"
          placeholder="Augusto Jorge" />
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
            placeholder="Albuquerque" />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <FieldFormLabel md="1/1" label="Tipo de evento:" />
        <div class="w-full md:w-1/1 px-3 mb-6 md:mb-0">
          <Checkbox
            id="weeding"
            on:click={onCheck}
            checked={eventType === 'weeding'}
            title="Casamento" />
          <Checkbox
            id="birthday"
            on:click={onCheck}
            checked={eventType === 'birthday'}
            title="Aniversário" />
        </div>
      </div>
      {#if eventType}
        <div class="flex flex-wrap -mx-3 mb-2">
          <Input
            id="groomsName"
            md="2/3"
            label={`Nome
              ${eventType === 'weeding' ? 'dos Noivos' : 'do(a) aniversariante'}:`}
            placeholder="Ronald e Mary" />
          <Input
            id="date"
            md="1/3"
            label="Data do evento:"
            type="date" />
        </div>
        {#if eventType === 'weeding'}
          <div class="flex flex-wrap -mx-3 mb-2">
            <Input
              id="weedingLocation"
              md="2/3"
              label="Local da Cerimônia Religiosa:"
              placeholder="Rua 123 - Chacara 4 - Campinas" />
  
            <Input
              id="weedingTime"
              md="1/3"
              label="Horário da Cerimônia:"
              type="time" />
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
          <Input id="eventStart" md="2/4" label="Início" type="time" />
          <Input id="eventEnd" md="2/4" label="Término" type="time" />
        </div>
      {/if}
    </div>
    <button
      type="submit"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Salvar evento
    </button>
  </form>
  