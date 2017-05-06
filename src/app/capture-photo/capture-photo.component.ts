import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capture-photo',
  templateUrl: './capture-photo.component.html',
  styleUrls: ['./capture-photo.component.css']
})
export class CapturePhotoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

  onScan() {
    // Elements for taking the snapshot
    var canvas : any = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var video = document.getElementById('video'); 
    context.drawImage(video, 0, 0, 640, 480);
  }
}
