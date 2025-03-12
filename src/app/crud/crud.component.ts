import { Component } from '@angular/core';
import { CrudService } from './shared/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {

  rules = [
    { 
      id: 1, ruleName: "2DS - Trace Changes", active: "Y", type: "Match", 
      favourite: "N", scheduled: "Y", createdDate: "01-May-2024 01:15 PM", alert: "Y" 
    },
    { 
      id: 2, ruleName: "Data Check", active: "N", type: "Custom", 
      favourite: "Y", scheduled: "N", createdDate: "02-May-2024 02:30 PM", alert: "N" 
    }
  ];

  newRule = {
    id: 0,
    ruleName: "",
    active: "N",
    type: "Match",
    favourite: "N",
    scheduled: "N",
    createdDate: new Date().toLocaleString(),
    alert: "N"
  };

  editIndex: number | null = null;

  addOrUpdateRule() {
    if (this.editIndex !== null) {
      this.rules[this.editIndex] = { ...this.newRule };
      this.editIndex = null;
    } else {
      this.newRule.id = this.rules.length + 1;
      this.rules.push({ ...this.newRule });
    }
    this.resetForm();
  }

  editRule(index: number) {
    this.newRule = { ...this.rules[index] };
    this.editIndex = index;
  }

  deleteRule(index: number) {
    const confirmDelete = confirm(`Are you sure you want to delete "${this.rules[index].ruleName}"?`);
    if (confirmDelete) {
      this.rules.splice(index, 1);
    }
  }

  resetForm() {
    this.newRule = {
      id: 0,
      ruleName: "",
      active: "N",
      type: "Match",
      favourite: "N",
      scheduled: "N",
      createdDate: new Date().toLocaleString(),
      alert: "N"
    };
    this.editIndex = null;
  }
    getCurrentDateTime(): string {
      const now = new Date();
      return now.toLocaleString(); 
    }
  
}
