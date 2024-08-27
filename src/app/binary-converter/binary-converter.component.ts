import { Component } from '@angular/core';
import { BinaryService } from '../services/binary.service';
import { WhatsappService } from '../services/whatsapp.service';
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
  currentView: string = 'textToBinary'; 
  phone_number: string = '';
  selectedContact: string = '';

  constructor(private binaryService: BinaryService, private whatsappService: WhatsappService) {}

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

  sendMessage() {
    // Determine phone number to use
    const phone = this.selectedContact || this.phone_number;
    if (!phone) {
      alert('Please enter or select a phone number.');
      return;
    }

    // Determine message to send
    const message = this.currentView === 'binaryToText' ? this.textOutput : this.binaryOutput;
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
