import { Component } from '@angular/core';
import { BinaryService } from '../services/binary.service';
@Component({
  selector: 'app-binary-converter',
  templateUrl: './binary-converter.component.html',
  styleUrls: ['./binary-converter.component.css']
})
export class BinaryConverterComponent {
  binaryInput: string = '';
  textInput: string = '';
  textOutput: string = '';
  binaryOutput: string = '';
  currentView: string = 'binaryToText'; 

  constructor(private binaryService: BinaryService) {}

  showView(view: string) {
    this.currentView = view;
  }
  
  translateToText() {
    this.binaryService.binaryToText(this.binaryInput).then(result => {
      this.textOutput = result;
    });
  }

  translateToBinary() {
    this.binaryService.textToBinary(this.textInput).then(result => {
      this.binaryOutput = result;
    });
  }

}
