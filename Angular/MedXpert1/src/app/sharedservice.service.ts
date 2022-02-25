import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  constructor(private http:HttpClient) { }
  chlna(data:any){
   return this.http.post("http://127.0.0.1:8000/predictor/",data);
  }
  register(data:any){
    return this.http.post("http://127.0.0.1:8000/register/",data);
  }
  predict(img:any){
    return this.http.post("http://localhost:8000/predictor/covid?imageFile"+"=C:\Users\Anushka Jain\Documents\Project\MedXpert\media\
    1.CXRCTThoraximagesofCOVID-19fromSingapore.pdf-002-fig3b.png",img);
  }
  upload(file:File):Observable<any> {
  
    // Create form data
    // const formData = new FormData(); 
      
    // // Store form name as "file" with file data
    // formData.append("file", file, file.name)
    let json ={
      "imageFile":file,
    };
      
    // Make http post request over api
    // with formData as req
    return this.http.post("http://localhost:8000/predictor/covid", json);
}

}
