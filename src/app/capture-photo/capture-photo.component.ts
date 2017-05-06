import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capture-photo',
  templateUrl: './capture-photo.component.html',
  styleUrls: ['./capture-photo.component.css']
})
export class CapturePhotoComponent implements OnInit {

  hideVedio : boolean;
  hidePhoto : boolean;
  constructor() {
    this.hideVedio = true;
    this.hidePhoto = true;
   }

  ngOnInit() { }

  startVideoCamera() {
    this.hideVedio = false;
    this.hidePhoto = true;
    // Grab elements, create settings, etc.
    var video = document.getElementById('video') as HTMLVideoElement;
    // Get access to the camera!
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Not adding `{ audio: true }` since we only want video now
      navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
      });
    }
  }

  stopVideoCamera() {
    this.hideVedio = true;
    var video1 = document.getElementById('video') as HTMLVideoElement;
    navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
      video1.src = window.URL.createObjectURL(stream);
      for (let tt of stream.getTracks())
        tt.stop();
    });
  }

  onScan() {

    this.hidePhoto = false;
    // Elements for taking the snapshot
    var canvas: any = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var video = document.getElementById('video');
    context.drawImage(video, 0, 0, 640, 480);
    this.stopVideoCamera();
  }

  onHidePhoto(){
    this.hidePhoto = true;
  }
}
