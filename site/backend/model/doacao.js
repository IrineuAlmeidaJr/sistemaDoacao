module.exports = class doacao {

    constructor(cod,data,codLocal,codCampanha,codUsuario){
        this.cod = cod;
        this.data = data;
        this.codLocal = codLocal;
        this.codCampanha = codCampanha;
        this.codUsuario = codUsuario;
    }

    getCod(){
        return this.cod;
    }

    setCod(cod){
        this.cod = cod;
    }

    getData(){
        return this.data;
    }

    setData(data){
        this.data = data;
    }

    getCodLocal(){
        return this.codLocal;
    }

    setCodLocal(codLocal){
        this.codLocal = codLocal;
    }

    getCodCampanha(){
        return this.codCampanha;
    }

    setCodCampanha(codCampanha){
        this.codCampanha = codCampanha;
    }

    getCodUsuario(){
        return this.codUsuario;
    }

    setCodUsuario(codUsuario){
        this.codUsuario = codUsuario;
    }

}