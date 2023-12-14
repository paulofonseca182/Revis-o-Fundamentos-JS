const proprietarios = ['Oliva', 'Nat', 'Gus'];

const novosProprietarios = ['Paulo', "Joao"]

function addCustomers (list1, list2) {
    for (let index = 0; index < list2.length; index += 1) {
        if (typeof list2[index] === 'string') {
            list1.push(list2[index])
        } else {
            console.log("Todos os valores precisam ser strings");
        }
    }
    return list1
}

console.log(addCustomers(proprietarios, novosProprietarios))