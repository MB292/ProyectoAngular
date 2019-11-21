import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-nuevo',
  templateUrl: './componente-nuevo.component.html',
  styleUrls: ['./componente-nuevo.component.css']
})
export class ComponenteNuevoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

const firebaseConfig = {
  apiKey: "AIzaSyAoSRxYVY8Wh8BxW_M6LQFYjZJmT3IJ6cA",
  authDomain: "proyecto-1-b583c.firebaseapp.com",
  databaseURL: "https://proyecto-1-b583c.firebaseio.com",
  projectId: "proyecto-1-b583c",
  storageBucket: "proyecto-1-b583c.appspot.com",
  messagingSenderId: "136631858292",
  appId: "1:136631858292:web:5474d8be5e0b873eaa0d21",
  measurementId: "G-15Y79Z74SK"
};