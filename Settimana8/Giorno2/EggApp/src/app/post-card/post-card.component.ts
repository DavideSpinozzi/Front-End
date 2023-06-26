import { Component, OnInit , Input} from '@angular/core';
import { Interfaccia } from '../interfaccia';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() postInviato!: Interfaccia;

  constructor() { }

  ngOnInit(): void {
  }

}
