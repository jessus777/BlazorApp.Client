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
            focusCancel: true,
            cancelButtonColor: '#d33',
            confirmButtonText: 'si, guardar!',
            
        }).then((result) => {
            resolve(result.isConfirmed);
        })
    })
    
}

async function asyncPhoneMask() {
    $('.phone').mask('(00) 0000-0000')
        .focusout(function (event) {
            var target, phone, element;
            target = (event.currentTarget) ? event.currentTarget : event.srcElement;
            phone = target.value.replace(/\D/g, '');
            element = $(target);
            element.unmask();
            if (phone.length == 10) {
                element.mask('(00) 0000-0000');
                console.log(phone);
            } else {
                element.mask('(00) 0000 - 0000');
                console.log("incopletos");;
            }
        });
}