import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Apiresp } from '../Apiresp';

@Component({
  selector: 'app-apikey',
  templateUrl: './apikey.component.html',
  styleUrls: ['./apikey.component.css']
})
export class ApikeyComponent implements OnInit {
  url='http://jsonplaceholder.typicode.com/posts';
  reaponse:Apiresp[]=[]

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getapi()
  }
  getapi(){
    this.http.get<Apiresp[]>(this.url)
    .subscribe(a=>this.reaponse=a)
  }

}
