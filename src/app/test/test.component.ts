import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
public user = "Jeson";
public url = window.location.href;
public myId = "testId";
public isdasebled = true
// class binding
public redColor = "red-color";
public orangeColor = "orange-color";
public specialText = "special-text"
public hasEror = false;
public multiClass = {
  "orange-color": this.hasEror,
  "red-colr": !this.redColor,
  "special-text": this.specialText
}
// style bindign
public highlishtColor = "navy"
public multiStyle = {
  color : "green",
  backgroundColor: "gray",
  fonstSize: "30px",
  fontWeigth: "bold"
}
public divStyle = {
  display: "flex",
  justifyContent: "center",
  padding: "20px",
}
// tow way data binding
public userName = "";
public email = "";
public password = "";
public mesage = "";

//  ngIf Directive
public displayName = false;
// switch
public color = "blue";
// ngFor Directive
public students = ["Jeson", "Jastin", "Jery", "Rahul", "Rahat"];
public listItem = ["Service", "Contact", "Home", "product"];
  constructor() { }

  ngOnInit(): void {
  }
  // method
  onClick(){
    this.mesage = "Hi I Am Milon";
    console.log();
  }

  loogMessage(value:any){
    console.log(value);
  }

  procces(){
    const Jeson = {
      email : this.email,
      password: this.password
    }
    console.log(Jeson);
  }

  public getUser(){
    return "This is a Method";
  }
}
