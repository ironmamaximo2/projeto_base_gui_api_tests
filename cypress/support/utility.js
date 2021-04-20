class Utility {

    // retorna a data de hoje
    dataHoje() {
        var hoje = new Date();

        var ontem = new Date(hoje.getTime());
        ontem.setDate(hoje.getDate());

        var dd = ontem.getDate();
        var mm = ontem.getMonth() + 1;
        var yyyy = ontem.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        var data_ok = dd + '/' + mm + '/' + yyyy;

        return data_ok;
    }

}
module.exports = Utility

