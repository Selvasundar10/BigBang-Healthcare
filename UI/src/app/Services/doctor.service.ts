import { HttpClient } from "@angular/common/http";
import { UserDTOModel } from "../Models/UserDTO.model";
import {Injectable} from '@angular/core';
import { DoctorRegisterModel } from "../Models/DoctorRegister.model";
import { IDoctor } from "../../app/Models/IDoctor";


@Injectable()
export class doctorService{
    constructor(private httpClient:HttpClient){

    }

    Doctorsignup(register:DoctorRegisterModel){
        console.log("register in servive")
        return this.httpClient.post("https://localhost:7262/api/Doctors",register);
    }

    
    request(){
        return this.httpClient.get("https://localhost:7262/api/Doctors");
    }

    DoctorStatus(id:string,req:DoctorRegisterModel){
        
        return this.httpClient.put(`https://localhost:7262/api/Doctors`+'/'+id,req);
    }

    DeleteRequest(id:string,req:DoctorRegisterModel){
        return this.httpClient.delete("https://localhost:7262/api/Doctors/"+id);

    }

    getDoctors(){
        return this.httpClient.get("https://localhost:7262/api/Doctors/Doctors");
    }


    DoctorDetail(id:string|null){
        return this.httpClient.get("https://localhost:7132/api/Doctors/"+id);
    }
    UpdateDoctor(id:string|null,dtr:IDoctor)
    {
        return this.httpClient.put("https://localhost:726/api/Doctors/"+id,dtr);
    }
}