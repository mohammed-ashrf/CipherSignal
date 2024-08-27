import { Component } from '@angular/core';
import { MorseCodeService } from '../services/morse-code.service';
@Component({
  selector: 'app-morse-code-translator',
  templateUrl: './morse-code-translator.component.html',
  styleUrls: ['./morse-code-translator.component.css']
})
export class MorseCodeTranslatorComponent {
  morseInput: string = '';
  textInput: string = '';
  textOutput: string = '';
  morseOutput: string = '';
  currentView: string = 'morseToText'; // Default view

  constructor(private morseCodeService: MorseCodeService) {}

  showView(view: string) {
    this.currentView = view;
  }

  translateToText() {
    this.morseCodeService.morseToText(this.morseInput).then(result => {
      this.textOutput = result;
    });
  }

  translateToMorse() {
    this.morseCodeService.textToMorse(this.textInput).then(result => {
      this.morseOutput = result;
    });
  }
}
