import { Request, Response } from 'express';
import { ViaCepService } from '../../../../services/via-cep';
import { isValidCEP } from '../../../../shared/utils';
export default class AddressController {

    public async FindAddressByCEP(request: Request, response: Response): Promise<Response> {
        const cepNumber: string = request.params.cepNumber;

        if (!isValidCEP(cepNumber)) {
            return response.status(400).json({ error: 'O número do CEP não é válido' });
        }

        const addressService = new ViaCepService();

        const cepDataFound: any = await addressService.findAddressByCEP(cepNumber);

        return response.status(cepDataFound.status).json(cepDataFound.data);
    }
}