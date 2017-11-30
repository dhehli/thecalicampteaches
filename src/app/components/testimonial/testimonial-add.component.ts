import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Testimonial } from './testimonial';
import { TestimonialService } from './testimonial.service';

@Component({
  selector: 'app-testimonial-add',
  templateUrl: './testimonial-add.component.html'
})
export class TestimonialAddComponent implements OnInit {
  error = {};
  success: boolean;

  constructor(
    private testimonialService: TestimonialService
  ) { }

  ngOnInit() {

  }

  add(firstname: string, lastname: string, quote: string, onlineState: boolean): void {
    const data = {
      firstname,
      lastname,
      quote,
      onlineState
    } as Testimonial;

    this.testimonialService.addTestimonial(data)
    .subscribe(testimonial => {
      if(testimonial.errors){
        testimonial.errors.forEach(e => this.error[e.param] = e.msg);
      }else{
        this.success = true;
      }
    });
  }
}
