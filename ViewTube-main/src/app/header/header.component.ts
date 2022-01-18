import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

import { ThirdPartyApiService } from '../services/third-party-api.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  componentName="header"
  categories = []
  videos = []
  searchKey=""
  constructor(private thirdPartyApiService: ThirdPartyApiService, private loginservice:LoginService) { }

  ngOnInit(): void {
    this.getCategories()
    this.getPopularVideos()
  }
  logout(){
    this.loginservice.logOut()
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
      console.log(res)
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



}
