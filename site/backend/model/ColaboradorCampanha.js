module.exports = class ColaboradorCamp{

    constructor(usuarioId,campanhaId) {
        this.usuarioId = usuarioId;
        this.campanhaId = campanhaId;
    }

    getUsuarioId() {
        return this.usuarioId;
    }

    getCampanhaId() {
        return this.campanhaId;
    }

    setUsuarioId(usuarioId) {
        this.usuarioId = usuarioId;
    }

    setCampanhaId(campanhaId) {
        this.campanhaId = campanhaId;
    }

}