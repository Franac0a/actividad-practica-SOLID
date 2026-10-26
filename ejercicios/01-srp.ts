interface User {
  username: string;
  email: string;
}

const clases = [
  `UserValidator`,
  `UserRepository`,
  `EmailService`,
  `UserRegistrationService`,
];

class UserManager {
  users: User[] = [];
}

class UserValidator {
  isValid(email: string): boolean {
    if (email.includes("@")) {
      return true;
    }
    return false;
  }
}

class UserRepository {
  private users: User[] = [];
  constructor() {}

  register(username: string, email: string): void {
    this.users.push({ username, email });
  }
}

class EmailService {
  sendWelcomeEmail(email: string): string {
    return `Email enviado a ${email}`;
  }
}

class UserRegistrationService {
  public validador: UserValidator;
  public repository: UserRepository;
  public serviceEmail: EmailService;
  constructor(
    validador: UserValidator,
    repository: UserRepository,
    serviceEmail: EmailService,
  ) {
    this.validador = validador;
    this.repository = repository;
    this.serviceEmail = serviceEmail;
  }

  newUser({ username, email }: User) {
    if (!this.validador.isValid(email)) {
      throw new Error("Email invalido");
    }

    this.repository.register(username, email);
    return this.serviceEmail.sendWelcomeEmail(email);
  }
}

const validador = new UserValidator();
const repository = new UserRepository();
const servicioEmail = new EmailService();
const servicioRegistro = new UserRegistrationService(
  validador,
  repository,
  servicioEmail,
);

console.log(
  servicioRegistro.newUser({ username: "santi", email: "santi@gmail.com" }),
);
