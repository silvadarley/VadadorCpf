function varlidarCPF(cpf) {

    var strCpf = String(cpf).replace(/[^\d]/g, '')

    var soma = 0
    var resto

    if (strCpf.length != 11) {
        alert(`CPF ${strCpf} tem um numero menor que de caracters do que o esperado!`)
        return false
    }

    if (cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" ||
        cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" ||
        cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" ||
        cpf == "99999999999") 
        {
            alert(`Por favor insira um CPF valido!\n o numero ${strCpf} não é um documento válido.`)
            return false;
        }


    for (let i = 0; i < 9; i++) {

        if (i == 0) {
            x = parseInt(strCpf.substring(i, 1))
        } else {
            x = parseInt(strCpf.substring(i, i + 1));
        }

        h = (10 - i)
        soma += (h * x)

        if (i == 8) {
            resto = 11 - (soma % 11)
            if (resto < 2) {
                resto = 0
            } else if (parseInt(resto) !== parseInt(strCpf.charAt(9))) {
                alert(`O CPF ${strCpf} não é um documento válido!`)
                return false
            }
        }
    }

    soma = 0

    for (let i = 1; i < 10; i++) {

        if (i == 0) {
            x = parseInt(strCpf.substring(i, 1))
        } else {
            x = parseInt(strCpf.substring(i, i + 1));
        }

        h = (11 - i)
        soma += (h * x)

        if (i == 9) {
            resto = 11 - (soma % 11)
            if (resto < 2) {
                resto = 0
            } else if (parseInt(resto) !== parseInt(strCpf.charAt(10))) {
                alert(`O CPF ${strCpf} não é um documento válido!`)
                return false
            }
        }
    }
    return true
}