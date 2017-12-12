import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Testimonial } from './testimonial';
import { TestimonialService } from './testimonial.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html'
})
export class TestimonialComponent implements OnInit {
  testimonials: Testimonial[];

  constructor(private testimonialService: TestimonialService) { }


  ngOnInit() {
    this.getTestimonials();
  }

  getTestimonials(): void {
    this.testimonialService.getTestimonials()
    .subscribe(testimonials => this.testimonials = testimonials);
  }

  delete(testmonial: Testimonial): void {
    this.testimonials = this.testimonials.filter(t => t !== testmonial);
    this.testimonialService.deleteTestimonial(testmonial).subscribe();
  }

}
