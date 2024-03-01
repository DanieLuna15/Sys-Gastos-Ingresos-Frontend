import { Component, OnInit } from '@angular/core';
import { Gasto } from 'src/app/models/gasto.model';
import { GastoService } from 'src/app/services/gasto.service';

@Component({
  selector: 'app-gasto-list',
  templateUrl: './gasto-list.component.html',
  styleUrls: ['./gasto-list.component.scss']
})
export class GastoListComponent implements OnInit {

  gastos: Gasto[] = [];
  total: number = 0;


  constructor(
    private gastoService: GastoService
  ) { }

  ngOnInit(): void {
    this.loadDataIntoTable();
  }

  private loadDataIntoTable(): void{
    this.gastoService.getGastos().subscribe(gastos=>{
      this.gastos = gastos;
      this.calculateTotal();
    })
  }

  private calculateTotal(): void{
    this.total = this.gastos.reduce((accumulated, currenValue) =>{
      return accumulated +Number(currenValue.monto);
    },0);
  }
}

