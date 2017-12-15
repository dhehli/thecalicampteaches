import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Testimonial } from '../../admin/testimonial/testimonial';
import { TestimonialServicePublic } from './home-testimonial.service';


@Component({
  selector: 'testimonial-home',
  templateUrl: './home-testimonials.component.html'
})
export class TestimonialHomeComponent implements OnInit {
  testimonials: Testimonial[];

  constructor(private testimonialService: TestimonialServicePublic) { }

  ngOnInit() {
    this.getTestimonials();
  }

  getTestimonials(): void {
    this.testimonialService.getTestimonials()
    .subscribe(testimonials => this.testimonials = testimonials);
  }

}
