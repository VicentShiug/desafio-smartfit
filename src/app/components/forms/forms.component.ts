import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FitlerUnitsService } from 'src/app/services/fitler-units.service';
import { GetUnitsService } from 'src/app/services/get-units.service';
import { Location } from 'src/app/types/location.interface';



@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  results: Location[] = [];
  filteredResults: Location[] = [];
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private unitService: GetUnitsService,
    private filterUnitsService: FitlerUnitsService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true,
    })
    this.unitService.getAllUnits().subscribe(data => {
      this.results = data.locations
      this.filteredResults = data.locations
    })
  }

  onSubmit(): void {
    const { value } = this.formGroup
    const { hour, showClosed } = value
    this.filteredResults = this.filterUnitsService.filter(this.results, showClosed, hour)
  }

  onClean(): void {
    this.formGroup.reset()
  }

}
