import { EmailService } from './../../service/rest/email.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-mail-dialog',
  templateUrl: './mail-dialog.component.html',
  styleUrls: ['./mail-dialog.component.scss']
})
export class MailDialogComponent implements OnInit {

  formGroup: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private emailService: EmailService,
    private dialogRef: MatDialogRef<MailDialogComponent>,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    });
  }

  submitMessage(): void {
    this.emailService.postEmail(this.formGroup.value).subscribe(callback => {
      this.snackBar.open('Email envoyé avec succès', 'Email', {
        duration: 2000
      });
    },
      (error) => {
        if (error.status === 200) {
          this.snackBar.open('Email envoyé avec succès', 'Email', {
            duration: 2000
          });
        } else {
          this.snackBar.open('Sending email fail !', 'Email', {
            duration: 2000
          });
        }
      });
    this.dialogRef.close();
  }

}


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
