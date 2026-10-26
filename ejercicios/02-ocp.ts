interface Payment {
  procesPayment(amount: number): void;
}

type PaymentType = Card | Cash | Transfer;

class Card implements Payment {
  procesPayment(amount: number): void {
    console.log(`Pagando $${amount} con tarjeta`);
  }
}

class Cash implements Payment {
  procesPayment(amount: number): void {
    console.log(`Pagando $${amount} en efectivo`);
  }
}

class Transfer implements Payment {
  procesPayment(amount: number): void {
    console.log(`Pagando $${amount} en transferencia`);
  }
}

class PaymentProcessor {
  pay(paymentMethod: PaymentType, amount: number): void {
    return paymentMethod.procesPayment(amount);
  }
}
const card = new Card();
const cash = new Cash();
const transfer = new Transfer();

new PaymentProcessor().pay(transfer, 800);
