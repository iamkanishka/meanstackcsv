import { Component, OnInit } from "@angular/core";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";

DataService

import { HttpClient } from "@angular/common/http";
import { startWith, map } from 'rxjs/operators';
import { DataService } from "../data/data.service";



export interface show {
  showlog: boolean;
  showreg: boolean;
}

export interface type {
  value: string;
  viewValue: string;
}

export class District {
  value: string;
}
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  hide = true;


  types: type[] = [
    { value: "CRC", viewValue: "CRC" },


  ];

  showopt: boolean

  femail: string;
  fpass: string;


  resetemail: FormGroup;
  showinfo:boolean=false;

  reset: boolean = false;

  regtag: boolean;
  logtag: boolean;

  loginform: FormGroup;
  

  
  takereg: boolean = false;
  takelog: boolean = true;


  districts: District[] = []
  towns: District[] = []
  states: District[] = []


  tscfilteredOptions: Observable<District[]>;

  lrformstatus: Observable<show>;
  topshow: string;

  ol: String;

  tscloc: District[] = []

anoreg:boolean=false;



getsecret:boolean

  oooo: any
  renewal: boolean = false;
  errmess: String;

  constructor(
    private fb: FormBuilder,
  
    private router: Router,

    private _snackBar: MatSnackBar,

    private http: HttpClient,
    private d: DataService,

  ) {


  

  }


  // private _tscfilter(name: string): District[] {
  //   const filterValue = name.toLowerCase();

  //   return this.tscloc.filter(option => option.value.toLowerCase().indexOf(filterValue) === 0);

  // }


  //confirmationResult:any
  displayFn(user?: any): string | undefined {
    return user ? user : undefined;
  }




  ngOnInit() {

 
 


    this.loginform = this.fb.group({
      email: ["", [Validators.required]],
      password: [ "",[Validators.required,] ]
    });

 






  
  }

  






  Result: any








  async Register() {




    this._snackBar.open("Registering...", "", {
      duration: 7000
    });
  

  

      const io = this.http.post('https://mymeandata.herokuapp.com/users/', this.loginform.value, { responseType: 'json' }).subscribe((resdata) => {

       // console.log(resdata);
       this.loginform.reset();
       this.getlog();
     //   this.router.navigate(["/userdata"]).then(()=>{
          this._snackBar.open("Registered " , "", {
            duration: 2000
          });
      //  })

      })

    



  


  }

  login() {
    this._snackBar.open("Authenticating...", "", {
      duration: 10000
    });

    this.femail= this.loginform.value.email;
    this.fpass = this.loginform.value.password;
    console.log(this.loginform.value.email);

   console.log(this.femail, this.fpass);

    this.loginform.reset();

    const io = this.http.get('https://mymeandata.herokuapp.com/users/'+this.femail+'/'+this.fpass,{ responseType: 'json' }).subscribe((resdata) => {

     console.log(resdata);
      if (resdata[0]!=null) {
this.d.myauth=true
this.d.uudata=resdata[0]
        this.router.navigate(["/usersdata"]).then(() => {
          this._snackBar.open("Welcome " , "", {
            duration: 2000
          });
        })

      } else {
        this._snackBar.open("Incorrect Credentials", "", {
          duration: 5000
        });
      }


    })



  }

  showofflog: boolean = false




  getreg() {
    this.takelog = false;
    this.takereg = true;



    this.loginform.reset();



  }

  getlog() {
    this.takelog = true;
    this.takereg = false;

    this.loginform.reset();

 

  }



}
