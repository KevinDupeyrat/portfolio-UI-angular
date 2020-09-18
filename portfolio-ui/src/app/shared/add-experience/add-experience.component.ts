import { ExperienceService } from './../../service/rest/experience.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.scss']
})
export class AddExperienceComponent implements OnInit {

  formGroup;
  sending = false;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {

    this.formGroup = new FormGroup({
      company: new FormControl('', [Validators.nullValidator]),
      situation: new FormControl('', [Validators.nullValidator]),
      startDate: new FormControl('', [Validators.nullValidator]),
      endDate: new FormControl('', [Validators.nullValidator]),
      currently: new FormControl('', [Validators.nullValidator])
    });
  }

  submit(): void {
    this.sending = true;
    this.experienceService.putExperience(this.formGroup.value).subscribe(
    value => {
      this.sending = false;
    },
    () => { this.sending = false; });
  }

}
