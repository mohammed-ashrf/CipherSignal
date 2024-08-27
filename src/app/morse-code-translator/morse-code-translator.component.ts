import { Component } from '@angular/core';
import { MorseCodeService } from '../services/morse-code.service';
import { WhatsappService } from '../services/whatsapp.service';
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
  currentView: string = 'textToMorse'; // Default view
  phone_number: string = '';
  selectedContact: string = '';

  constructor(private morseCodeService: MorseCodeService, private whatsappService: WhatsappService) {}

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

  sendMessage() {
    // Determine phone number to use
    const phone = this.selectedContact || this.phone_number;
    if (!phone) {
      alert('Please enter or select a phone number.');
      return;
    }

    // Determine message to send
    const message = this.currentView === 'binaryToText' ? this.textOutput : this.morseOutput;
    if (!message) {
      alert('No message to send.');
      return;
    }

    console.log(`Sending message to: ${phone}`);
    this.whatsappService.sendViaWhatsapp(phone, message)
      .then(() => alert('Message sent successfully!'))
      .catch(err => alert(`Failed to send message: ${err}`));
  }
}
