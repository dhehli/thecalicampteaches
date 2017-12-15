import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import $ from 'jquery';

import { Testimonial } from './testimonial';
import { TestimonialService } from './testimonial.service';

@Component({
  selector: 'app-testimonial-detail',
  templateUrl: './testimonial-detail.component.html'
})
export class TestimonialDetailComponent implements OnInit {
  testimonial: Testimonial;
  error = {};
  success: boolean;
  isSubmitting: false;

  constructor(
    private testimonialService: TestimonialService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getTestimonial();
  }

  getTestimonial(): void {
    const id = this.route.snapshot.paramMap.get('uid');
    this.testimonialService.getTestimonial(id)
      .subscribe(testimonial => this.testimonial = testimonial);
  }

  update(firstname: string, lastname: string, quote: string, onlineState: string): void {
    this.isSubmitting = true;
    let formData = new FormData();

    let file = $("#image")[0].files[0];

    formData.append('id', this.testimonial.id);
    formData.append('image', file);
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('quote', quote);
    formData.append('onlineState', onlineState);

    this.testimonialService.updateTestimonial(formData)
    .subscribe(testimonial => {
      this.isSubmitting = false;
      this.error = [];

      if(testimonial.errors){
        testimonial.errors.forEach(e => this.error[e.param] = e.msg);
      }else{
        this.success = true;
      }
    });
  }
}
