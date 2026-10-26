// class EmailSender {
//   send(to: string, message: string): void {
//     console.log(`Correo para ${to}: ${message}`);
//   }
// }

interface Notifier {
  envio(user: string): void;
}

class OrderService {
  private notifier: Notifier;

  constructor(notifier: Notifier) {
    this.notifier = notifier;
  }

  createOrder(email: string): void {
    console.log("Pedido creado");
    return this.notifier.envio(email);
  }
}

class SMS implements Notifier {
  envio(cellNumber: string) {
    console.log(`[SMS] - Mensaje enviado a ${cellNumber}`);
  }
}

class WhatsApp implements Notifier {
  envio(cellNumber: string): void {
    console.log(`[WHATSAPP] - Mensaje enviado a ${cellNumber}`);
  }
}

const whatsapp = new OrderService(new WhatsApp());
const sms = new OrderService(new SMS());

whatsapp.createOrder("37048723");
console.log("======================================");
sms.createOrder("3718546732");
