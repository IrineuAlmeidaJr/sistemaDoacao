module.export = class inscricao {

   constructor(beneficiarioId,campanhaId) {
        this.beneficiarioId = beneficiarioId;
        this.campanhaId = campanhaId;
    }
    
    getBeneficiarioId() {
        return this.beneficiarioId;
    }

    getCampanhaId() {
        return this.campanhaId;
    }

    setBeneficiarioId(beneficiarioId) {
        this.beneficiarioId = beneficiarioId;
    }

    setCampanhaId(campanhaId) {
        this.campanhaId = campanhaId;
    }

    getCod() {
        return this.cod;
    }
}