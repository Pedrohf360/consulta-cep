import axios from 'axios';
import IAddress from '../api/components/address/interfaces/address.interface';

const api = axios.create({
    baseURL: 'viacep.com.br/ws/',
});

export class ViaCepService {

    private callApi(subRoute: string, returnType: string = 'json'): Promise<any> {
        return api.get(`${subRoute}/${returnType}`);
    }

    public findAddressByCEP(cepNumber: string): Promise<IAddress> {
        return this.callApi(`${cepNumber}`);
    }
}