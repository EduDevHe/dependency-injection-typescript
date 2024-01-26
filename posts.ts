interface INotificador {
  enviar(): null;
}


class Notifica {
  enviar() {
    console.log("Nitificando usuarios");
  }
}

class Post {

  constructor(public titulo: string, private notificardor: INotificador) {
    console.log("Novo Post:" + titulo);
  }

  publicar() {
    console.log("Publicando Post!");
    this.notificardor.enviar()
  }
}


let novoPost = new Post("Aprendendo Injecao de dependencia", new Notifica);

novoPost.publicar();
