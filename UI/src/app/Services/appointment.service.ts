import { HttpClient } from "@angular/common/http";
import {Injectable} from '@angular/core';
import { AppointmentModel } from "src/app/book/book.component";

@Injectable()
export class appointmentService{
    constructor(private httpClient:HttpClient){

    }

    bookappointment(book:AppointmentModel){
        return this.httpClient.post("https://localhost:7262/api/Appointments",book);

    }

    getAppointmentsdetails(){
        return this.httpClient.get("https://localhost:7262/api/Appointments");
    }

    getUserAppointmentsdetails(id:any){
        return this.httpClient.get("https://localhost:7262/api/Appointments/"+id);
    }
}