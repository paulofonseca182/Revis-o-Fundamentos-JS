const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (fullOrder) => {
  const nomeCliente = fullOrder.name
  const nomeDelivery = fullOrder.order.delivery.deliveryPerson
  const rua = fullOrder.address.street
  const numero = fullOrder.address.number
  const apartamento = fullOrder.address.apartment
  const telefone = fullOrder.phoneNumber
  const resposta = `
    Ola, ${nomeDelivery}, 
    entrega para: ${nomeCliente}, 
    Telefone: ${telefone}, 
    ${rua}, 
    Numero: ${numero}, 
    AP:${apartamento}.
    `
  return resposta
}

console.log(customerInfo(order));

const orderModifier = (fullOrder) => {
  const newName = fullOrder.name = "Luiz Silva"
  const newValor = fullOrder.payment.total = 50.00
  const pizzas = Object.keys(fullOrder.order.pizza)
  const drinks = fullOrder.order.drinks.coke.type
  const resposta = `
    Ola, ${newName}, 
    o valor total de seu pedido de ${pizzas} 
    e ${drinks} 
    e R$ ${newValor.toFixed(2)}. 
    `
  return resposta
}

console.log(orderModifier(order));