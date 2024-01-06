import { Component } from '@angular/core';
import { publicEncrypt } from 'crypto';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  fun()
  {
    return "Marvellous Infosystem";
  }

}
