const isValidCEP = (cepNumber: string) => {
    if (!cepNumber) {
        return false;
    }

    cepNumber = cepNumber.replace(/\D/g, '');

    if (!cepNumber) {
        return false;
    }

    const cepValidation = /^[0-9]{8}$/;

    if (!cepValidation.test(cepNumber)) {
        return false;
    }

    return true;
}

export {
    isValidCEP
}