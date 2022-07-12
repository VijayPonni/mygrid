import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { LearnModel } from './learn-model.model';

@Component({
  selector: 'app-learn-model',
  templateUrl: './learn-model.component.html',
  styleUrls: ['./learn-model.component.scss']
})
export class LearnModelComponent implements OnInit {

  public rowdata : LearnModel[] = [
    {name : 'vijay' , age : 21 , number : 67573781333},
    {name : 'vijay' , age : 21 , number : 67573781333},
  ];

  public columnDefs : ColDef[] =[
{field : 'name'},
{field : 'age'},
{field : 'number'}

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
