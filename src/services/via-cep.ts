import axios from 'axios';
import IAddress from '../api/components/address/interfaces/address.interface';

const api = axios.create({
    baseURL: 'https://viacep.com.br/ws/',
});

export class ViaCepService {

    private callApi(subRoute: string, returnType: string = 'json'): Promise<any> {
        return api.get(`${subRoute}/${returnType}`);
    }

    public async findAddressByCEP(cepNumber: string): Promise<IAddress> {
        const data: IAddress = await this.callApi(`${cepNumber}`);

        return data;
    }
}