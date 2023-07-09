import { HttpClient } from "@angular/common/http";
import {Injectable} from '@angular/core';
import { registerModel } from "../Models/register.model";
import { UserDTOModel } from "../Models/UserDTO.model";
import { DoctorRegisterModel } from "../Models/DoctorRegister.model";

@Injectable()
export class signupService{
    constructor(private httpClient:HttpClient){

    }

    signup(register:registerModel){
        console.log("register in servive")
        return this.httpClient.post("https://localhost:7262/api/User/Register"        ,register);
    }

    userLogin(userDTO:UserDTOModel){
        return this.httpClient.post("https://localhost:7262/api/User/Login",userDTO);
    }
    
    deleteDoctordetails(id:string,req:DoctorRegisterModel){
        return this.httpClient.delete(`https://localhost:7262/api/User`+'/'+id);
    }
   

    Doctorsignup(register:DoctorRegisterModel){
      console.log("register in servive")
      return this.httpClient.post("https://localhost:7262/api/Doctors",register);
  }



  
}