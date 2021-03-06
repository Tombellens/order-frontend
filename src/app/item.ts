export class Item {
  stockString: string;

  constructor(public id: string,
              public name: string,
              public description: string,
              public price: number,
              public stockUrgency: string,
              public amountOfStock: number){
    this.stockString = this.transformStockInputToString(this.stockUrgency);
  }

  transformStockInputToString(stockInput: string): string{
    console.log(stockInput);
    if (stockInput === 'STOCK_HIGH') { return `High`; }
    if (stockInput === 'STOCK_LOW') { return `Low`; }
    if (stockInput === 'STOCK_MEDIUM') { return 'Medium'; }
}





}
