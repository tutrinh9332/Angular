import {Component, OnInit} from '@angular/core';
import {SongService} from "../service/song.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit{
  ngOnInit() {

    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{
      const id=paramMap.get('id');
      this.song=this.songService.findSongById(id);
    })
  }
  song:any;
  constructor(
    private songService: SongService,
    private activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) {}

getSrc(){
    const url='https://www.youtube.com/embed/' +this.song.id;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
}

}
