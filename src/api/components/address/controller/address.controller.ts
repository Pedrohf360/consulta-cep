import { Request, Response } from 'express';
import { ViaCepService } from '../../../../services/via-cep';
import Address from '../interfaces/address.interface';

export default class AddressController {

    public async FindAddressByCEP(request: Request, response: Response): Promise<Response> {
        const cepNumber: string = request.params.cepNumber;

        if (!cepNumber) {
            return response.status(400).json({ error: 'O número do CEP não é válido' });
        }

        const addressService = new ViaCepService();

        const cepDataFound: Address = await addressService.findAddressByCEP(cepNumber);

        return response.json(cepDataFound);
    }
}