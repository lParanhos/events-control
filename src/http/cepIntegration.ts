interface Result {
    zipCode: number,
    street: string,
    city: string,
    neighborhood: string,
    state: string
}

interface Address {
    cep: string;
    logradouro: string;
    complemento?: string;
    bairro: string;
    localidade: string;
    numero: string;
    uf: string;
    ibge?: string;
    gia?: string;
    ddd?: string;
    siafi?: string;
}

export const fetchAddress = async (zipCode: number) => {
    const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`);
    const data = await response.json() as Address;
    const { cep, logradouro, bairro, uf, localidade } = data;

    return  {
        zipCode: parseInt(cep.replace("-", "")),
        street: logradouro,
        city: localidade,
        neighborhood: bairro,
        state: uf
    }
}