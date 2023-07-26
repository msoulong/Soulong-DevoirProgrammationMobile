import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/models/survey';
import { SurveysService } from 'src/app/services/surveys.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  public surveysList : Survey[] =[];
  public surveyBeingCreated : Survey ={
    name:"",
    birthday:"",
    description:""
  }

  public isModalOpen: boolean=false;

  constructor(public surveyservice : SurveysService) { }

  ngOnInit() {
  this.loadSurveys();
  }

  public loadSurveys(){
    this.surveyservice.surveysList().then(list => {
      this.surveysList = list;
    })
  }


public showSurveyForm(){
  this.surveyBeingCreated = {
    name:"",
    birthday:"",
    description:""
  };
  this.isModalOpen = true;

}

public cancel(){
  this.isModalOpen = false;
}

public save(){
  this.surveyservice.saveSurvey(this.surveyBeingCreated);
  this.loadSurveys();
  this.isModalOpen = false;
}

}
