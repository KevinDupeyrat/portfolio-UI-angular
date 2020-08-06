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
  sending = false;

  constructor(
    private emailService: EmailService,
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
    this.sending = true;
    this.emailService.postEmail(this.formGroup.value).subscribe(callback => {
      this.onSendingEnd('Email envoyé avec succès');
      this.dialogRef.close();
    },
      () => {
        this.onSendingEnd('Sending email fail !');
      });
  }

  private onSendingEnd(message: string): void {
    this.snackBar.open(message, 'Email', {
      duration: 2000
    });
    this.sending = false;
  }

}


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
