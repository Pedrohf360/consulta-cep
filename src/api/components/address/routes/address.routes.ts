import { Router } from 'express';

import AddressController from '../controller/address.controller';

const router = Router();
const addressController = new AddressController();

router.get('/:cepNumber', addressController.FindAddressByCEP);

export default router;