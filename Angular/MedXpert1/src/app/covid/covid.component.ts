import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  file!: File ;

  constructor(private service:SharedserviceService) { }

  ngOnInit(): void {
  }
  onFileChanged(){
    
    this.service.predict("imageFile:C:\Users\Anushka Jain\Documents\Project\MedXpert\media\
      1.CXRCTThoraximagesofCOVID-19fromSingapore.pdf-002-fig3b.png").subscribe(data=>{
      console.log(data);
    });
  }
    onChange(event:any)
    {
      try {
        console.log(event); 
        this.file = event.target.files[0];       
      } catch (error) {
        
      }
    }
    onUpload() {
      //this.loading = !this.loading;
      console.log(this.file);
      this.service.upload(this.file).subscribe(
          (event: any) => {
              if (typeof (event) === 'object') {

                  // Short link via api response
                 // this.shortLink = event.link;

                 // this.loading = false; // Flag variable 
              }
          }
      );
  }
  
}
