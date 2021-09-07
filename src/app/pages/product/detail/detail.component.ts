import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id!: string;
  product: any;

  constructor(
    private api: HttpService,
    private aroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.aroute.snapshot.params.id
    this.api.httpGet(this.id).subscribe ( res => {
      if( res) {
        this.product = res
        console.log(this.product)
      }
    });
  }

}
