import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capture-photo',
  templateUrl: './capture-photo.component.html',
  styleUrls: ['./capture-photo.component.css']
})
export class CapturePhotoComponent implements OnInit {

  hideVedio : boolean;
  hidePhoto : boolean;
  localStream : MediaStream;
  height : number;
  width : number;
  hideButton: boolean;
  constructor(
    private route: ActivatedRoute,
    private router: Router,) {
    this.hideVedio = false;
    this.hidePhoto = true;
    this.hideButton = false;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
   }

  ngOnInit() { 
    
   }

  startVideoCamera() {
    this.hideVedio = false;
    this.hidePhoto = true; 
    var self = this;
    // Grab elements, create settings, etc.
    var video = document.getElementById('video') as HTMLVideoElement;
    // Get access to the camera!
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Not adding `{ audio: true }` since we only want video now
      navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
        self.localStream = stream;
      });
    }
  }

  showCamera(){
    this.hideVedio=true;
    this.hideButton = true;
    this.startVideoCamera();
  }

  stopVideoCamera() {
    this.hideVedio = true; 
  }

  onScan() {
    this.hidePhoto = false;
    this.hideVedio = true;
    // Elements for taking the snapshot
    var canvas: any = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var video = document.getElementById('video');
    context.drawImage(video, 0, 0);
    this.stopVideoCamera();
  }

  goToListingScreen(){
    this.hidePhoto = true;
    this.hideVedio = true; 
    this.router.navigate([`/list-results`]);
  }
}
