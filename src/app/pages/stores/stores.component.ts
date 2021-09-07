import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {
  stores:any = [];

  constructor(
    private api: HttpService,
    private location: LocationService
  ) { }

  ngOnInit(): void {
    this.api.httpGet('a0194b79-08c8-4881-ae45-108cc3c8827c').subscribe ( res => {
      if(res.data.length) {
        this.stores = res.data
        console.log(this.stores)
      }
    });

    //Get GPS Lat Lng of User
    this.location.getPosition().then( pos=> {
      console.log(`Positon: ${pos.lng} ${pos.lat}`);
    });
  }
  

}
