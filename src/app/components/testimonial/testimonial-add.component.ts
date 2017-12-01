import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import $ from 'jquery';

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

  add(firstname: string, lastname: string, quote: string, onlineState: string): void {
    let formData = new FormData();

    let file = $("#image")[0].files[0];

    formData.append('image', file);
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('quote', quote);
    formData.append('onlineState', onlineState);


    this.testimonialService.addTestimonial(formData)
    .subscribe(testimonial => {
      this.error = [];

      if(testimonial.errors){
        testimonial.errors.forEach(e => this.error[e.param] = e.msg);
      }else{
        this.success = true;
      }
    });
  }
}
