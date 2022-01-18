import { Component, Input, OnInit } from '@angular/core';
import { ThirdPartyApiService } from '../services/third-party-api.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { DataService } from '../services/data.service';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {

  isfav:boolean=false;
  isplay:boolean=false;
  iframeurl="";
  categories = [];
  videos:Array<any>=[];

  searchKey="";
  playeradd=""
  baseurl="https://www.youtube.com/embed/"
  controlurl="?modestbranding=1&controls=0&autohide=1&showinfo=0"
  constructor(private thirdPartyApiService: ThirdPartyApiService,private toaster:ToastrService, private loginservice:LoginService,private http: DataService, private routeservice: Router,private domsanitizer:DomSanitizer) {

  }

  ngOnInit(): void {
    this.getCategories()
    this.getPopularVideos()
  }

  getCategories(): void {
    this.thirdPartyApiService.getVideosCategories().subscribe(res => {
      console.log(res)
      this.categories = res.items
    })
  }
  getPopularVideos(): void {
    this.thirdPartyApiService.getPopularVideos().subscribe(res => {
      this.videos = res.items
      console.log(res.items)
    })
  }

  getVideosByCategory(categoryId: any): void {
    this.thirdPartyApiService.getVideosByCategory(categoryId).subscribe(res => {
      this.videos = res.items
      console.log(res)
    })
  }
  search(){
    console.log(this.searchKey)
    this.thirdPartyApiService.searchVideos(this.searchKey).subscribe(res => {
      this.videos = res.items
      console.log(res)
    })

  }
  logout(){
    this.loginservice.logOut()
  }
  addFav(video) {
    const json = {
      UserName: this.loginservice.getUserId(),
      Channel: video.snippet.channelTitle,
      Title: video.snippet.title,
      Url: video.snippet.thumbnails.high.url,
      VideoId:video.id
    }
    console.log(json);
    this.isfav=true
    this.http.sendPostRequest(json, "api/favorites").subscribe(res => {this.toaster.success("Successfully")
      console.log(res)
    },err => {
      this.toaster.error('Already Added')
    })
  }

  navigatetofav(){
    this.routeservice.navigate(["favorite"])
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
