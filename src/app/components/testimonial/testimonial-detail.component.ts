import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  update(): void {
    console.log(this.testimonial)
    this.testimonialService.updateTestimonial(this.testimonial)
    .subscribe(testimonial => {
      if(testimonial.errors){
        testimonial.errors.forEach(e => this.error[e.param] = e.msg);
      }else{
        this.success = true;
      }
    });
  }
}
