import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../services/data.service';
import { LoginService } from '../services/login.service';
import { ThirdPartyApiService } from '../services/third-party-api.service';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
videos=[]
isplay:boolean=false;
  iframeurl="";
playeradd=""
  baseurl="https://www.youtube.com/embed/"
  controlurl="?modestbranding=1&controls=0&autohide=1&showinfo=0"
  constructor(private thirdPartyApiService: ThirdPartyApiService,private loginservice:LoginService,private toaster:ToastrService, private http:DataService,private domsanitizer:DomSanitizer) { }
searchKey=""
isfav=false
isdelfav=false
  ngOnInit(): void {
    this.http.get(`api/favorites/${this.loginservice.getUserId()}`).subscribe((res: any[]) => {
      this.videos = res
      console.log(res)
    })
  }
  logout(){
    this.loginservice.logOut()
  }
  search(){
    console.log(this.searchKey)
    this.thirdPartyApiService.searchVideos(this.searchKey).subscribe(res => {
      this.videos = res.items
      console.log(res)
    })

  }
  removeFav(id):void{
    console.log(id)
    this.http.deleteFav(id).subscribe((res:any[])=> {console.log(res);
      this.toaster.success("Delete Successfully")
    this.ngOnInit();})
  }

  openVideo(url){
    console.log(this.baseurl+url)

    this.iframeurl=this.domsanitizer.bypassSecurityTrustResourceUrl(this.baseurl+url) as string;
    this.isplay=true;


  }
  closeVideo(url){
    console.log(this.baseurl+url)

    this.iframeurl=this.domsanitizer.bypassSecurityTrustResourceUrl(this.baseurl+url) as string;
    this.isplay=false;


  }

}
