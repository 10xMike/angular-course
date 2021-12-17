export class Orologio {
  //dichiarazione semplificata degli attributi del costruttore
  constructor(public ore: number, public minuti: number) {}

  vediOrario(): string {
    //metodo che restituire le ore in formato hh:mm
    let oreStringa: string = this.ore + '';
    let minutiStringa: string = this.minuti + '';

    if (oreStringa.length < 2) oreStringa = '0' + oreStringa;
    if (minutiStringa.length < 2) minutiStringa = '0' + minutiStringa;

    return 'Sono le ore ' + oreStringa + ':' + minutiStringa;
  }
}
