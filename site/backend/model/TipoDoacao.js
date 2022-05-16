class TipoDoacao {

    constructor(id,nome){
        this.id = id;
        this.nome = nome;
    }

    getId(){
        return this.cod;
    }

    setId(id){
        this.id = id;
    }

    getNome(){
        return this.nome;
    }

    setNome(nome){
        this.nome = nome;
    }

    async  gravar(db) {
        const resp = await new DAOTipoDoacao().gravar(this, db); 
    }
}

module.exports = TipoDoacao