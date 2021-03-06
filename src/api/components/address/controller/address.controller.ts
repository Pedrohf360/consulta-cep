import { Request, Response } from 'express';
import { ViaCepService } from '../../../../services/via-cep';
import { isValidCEP } from '../../../../shared/utils';
export default class AddressController {

    public async FindAddressByCEP(request: Request, response: Response): Promise<Response> {
        let cepNumber: string = request.params.cepNumber;

        cepNumber = cepNumber.replace(/\D/g, '');

        if (!isValidCEP(cepNumber)) {
            return response.status(400).json({ error: 'O número do CEP não é válido' });
        }

        const addressService = new ViaCepService();

        const cepDataFound: any = await addressService.findAddressByCEP(cepNumber);

        if (cepDataFound.data.erro) {
            return response.status(404).json({ error: 'O número do CEP não foi encontrado' });
        }

        return response.status(cepDataFound.status).json(cepDataFound.data);
    }
}