import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [ RouterOutlet, FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  message = 'Data Binding Demonstration'; // text interpolation
  imageUrl = "https://i.imgflip.com/a24a04.jpg"
  w = 500;
  h = 500;

  textColor='blue';

  isHighlighted= true;
  yourName = '';

  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }

  // Interpolation
  studentName = "Kurt Justine Sicat";
  score = 95;

  // Property binding
  imageUrl1 = "https://media.tenor.com/esbbWjNDLWoAAAAe/yesking-yes-king.png";
  isDisabled = true;

  // Attribute binding
  colSpanValue = 3;

  // Class binding
  isPassing = true;

  // Style binding
  boxColor = "purple";
  boxSize = "150px";
}
