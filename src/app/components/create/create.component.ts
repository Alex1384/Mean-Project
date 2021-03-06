import { Component, OnInit } from '@angular/core';
import { IssueService } from 'src/app/shared/services/issue.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {


  createForm: FormGroup;

  constructor(private issueService: IssueService,
              private router: Router,
              private fb: FormBuilder) {
     this.createForm = this.fb.group({
        title: ['', Validators.required],
        responsible: '',
        description: '',
        severity: ''
    });
  }
  addIssue(title, responsible, description, severity) {
    this.issueService.addIssue(title, responsible, description, severity).subscribe(() => {
      this.router.navigate(['/list']);
    })
  }

  ngOnInit() {
  }

}
