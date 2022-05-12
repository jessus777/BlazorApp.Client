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

async function AlertNotify(title, text, icon) {
    return new Promise(resolve => {
        Swal.fire({
            title,
            text,
            icon,
            showCancelButton: true,
            confirmButtonColor: '#0d6efd',
            focusConfirm: false,
            cancelButtonColor: '#d33',
            confirmButtonText: 'si, guardar!',
            
        }).then((result) => {
            resolve(result.isConfirmed);
        })
    })
    
}