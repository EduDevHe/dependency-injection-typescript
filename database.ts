class OrderService {

  // constructor

  save(order: string): void {
    this.database.save(order);
  }
}

interface Database {
  save(order: string): void;
}

class MySQLDatabase implements Database {
  save(order: string) {
    if (order === undefined) {
      // insert
    } else {
      // update
    }
  }
}
