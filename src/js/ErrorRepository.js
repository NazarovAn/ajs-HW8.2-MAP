export default class ErrorRepository {
  constructor() {
    this.errorStorage = new Map();
  }

  addToStorage(num, str) {
    this.errorStorage.set(num, str);
  }

  translate(code) {
    const errorText = this.errorStorage.get(code);
    return errorText === undefined || errorText === null ? 'Unknown error' : errorText;
  }
}

const errRep = new ErrorRepository();

errRep.addToStorage(1, 'Error');
errRep.addToStorage(2, 'Other Error');
errRep.addToStorage(38, 'Another other Error');
errRep.addToStorage(1001, '1001 Error');
errRep.addToStorage(368);

// console.log(errRep.translate(1));
// console.log(errRep.translate(2));
// console.log(errRep.translate(38));
// console.log(errRep.translate(1001));
// console.log(errRep.translate(368));
