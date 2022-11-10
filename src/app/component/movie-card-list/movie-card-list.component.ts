import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card-list',
  templateUrl: './movie-card-list.component.html',
  styleUrls: ['./movie-card-list.component.css']
})
export class MovieCardListComponent implements OnInit {

  @Input() movie : any

  constructor() { }

  ngOnInit(): void {
  }

}
