import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Student } from "../student";

@Injectable({
    providedIn: 'root'
})
export class ApiClient {

    constructor(private httpClient: HttpClient) { }

    getStudentList(): Observable<Object> {
        return this.httpClient.get(
            "http://localhost:8080/api/v1/students/getlist"
        )
    }
}