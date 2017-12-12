import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Testimonial } from '../../testimonial/testimonial';
import { TestimonialService } from '../../testimonial/testimonial.service';


@Component({
  selector: 'testimonial-home',
  templateUrl: './home-testimonials.component.html'
})
export class TestimonialHomeComponent implements OnInit {
  testimonials: Testimonial[];

  constructor(private testimonialService: TestimonialService) { }

  ngOnInit() {
    this.getTestimonials();
  }

  getTestimonials(): void {
    this.testimonialService.getTestimonials()
    .subscribe(testimonials => this.testimonials = testimonials);
  }

}
