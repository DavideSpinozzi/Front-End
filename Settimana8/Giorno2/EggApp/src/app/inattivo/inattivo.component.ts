import { Component, OnInit } from '@angular/core';
import { Interfaccia } from '../interfaccia';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-inattivo',
  templateUrl: './inattivo.component.html',
  styleUrls: ['./inattivo.component.scss']
})
export class InattivoComponent implements OnInit {
  posts!: Interfaccia[];

  constructor(private postsSrv: ServiceService) {}

  ngOnInit(): void {
    this.recuperaDati();
}

async recuperaDati() {
    this.posts = await this.postsSrv.getPosts();
}

onActivePost(id: number, index: number) {
    this.postsSrv.updatePost({ active: true }, id);
    this.posts.splice(index, 1);
}
}
