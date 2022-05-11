async function asyncSelectState() {
    $('.state').select2({
        theme: 'bootstrap-5',
        language: {

            noResults: function () {

                return "No se encontró";
            },
            searching: function () {

                return "Buscando..";
            }
        }
    });
}

async function asyncSelectCity() {
    $('.city').select2({
        theme: 'bootstrap-5',
        language: {

            noResults: function () {

                return "No se encontró";
            },
            searching: function () {

                return "Buscando..";
            }
        }
    });
}