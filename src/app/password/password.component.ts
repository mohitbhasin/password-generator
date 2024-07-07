import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [MatButtonModule, MatSliderModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css'
})

export class PasswordComponent {
  output: string = "";
  private special_chars: string = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  private numbers: string = "0123456789";
  private alpha_upper: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  private alpha_lower: string = "abcdefghijklmnopqrstuvwxyz";
  private charset = [this.special_chars, this.numbers, this.alpha_upper, this.alpha_lower];
  max = 15;
  min = 7;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  default_value = 11;


  generatePassword(pass_len: string) {
    var pass = this.selectPasswordCharacters(parseInt(pass_len));
    pass = this.shufflePassword(pass);

    var currPass = "";
    for(var val of pass) {
      currPass+=val;
    }
    this.output = currPass;
  }

  private selectPasswordCharacters(pass_len: number) {
    var pass = [];
    var factor = pass_len*0.25;

    for(let i=0; i<this.charset.length; i++) {
      if(i==this.charset.length-1) factor=pass_len-pass.length;
      for(let count=0; count<factor; count++) {
        let str = this.charset[i];
        let index = Math.random()*this.charset[i].length;
        pass.push(str.charAt(index));
      }
    }
    return pass;
  }

  private shufflePassword(pass: string[]) {
    for(let i=pass.length-1; i>0; i--) {
      let randomIndex = Math.floor(Math.random()*i);
      [pass[i], pass[randomIndex]] = [pass[randomIndex], pass[i]];
    }
    return pass;
  }
}
