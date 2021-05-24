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
      margherita: {
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

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  console.log(
    `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R: ${order.address.street}, N°${order.address.number}, AP:${order.address.apartment}`
  );
};

customerInfo(order);

// function renameKey(object, newkey, oldkey) {
//   const clonedObj = Object.assign({}, object);
//   const tempKey = clonedObj[oldkey];
//   delete clonedObj[oldkey];
//   clonedObj[newkey] = tempKey;

//   return clonedObj;
// }

// renameKey(order.order.pizza, 'mussarela', 'margherita');

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  order.order.pizza['mussarela'] = order.order.pizza['margherita'];
  order.order.pizza['calabresa'] = order.order.pizza['pepperoni'];
  delete order.order.pizza.margherita;
  delete order.order.pizza.peperoni;
  order.payment.total = 50;

  console.log(
    `Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)} e ${
      order.order.drinks.coke.type
    } é de R$${order.payment.total}`
  );
};

orderModifier(order);
