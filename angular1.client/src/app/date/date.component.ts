import { Component, OnInit } from '@angular/core'
@Component({
  selector: "date-component",
  templateUrl: "./date.component.html",
  styleUrls: ["./date.component.css"],
  standalone: false
})
export class DateComponent implements OnInit {
  public showContainer: boolean = false;
  public date: number = 0;
  public innerHtml: string = "";
  ngOnInit() {
    this.date = Date.now();
    this.innerHtml = "Yes, this is just text, not html;Property binding [], not two-sided!";
    this.showContainer = false;
  }
  changeState() {
    this.showContainer = !this.showContainer;
  }
}
