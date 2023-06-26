import { Component, OnInit } from '@angular/core';
import { Interfaccia } from '../interfaccia';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-attivo',
  templateUrl: './attivo.component.html',
  styleUrls: ['./attivo.component.scss']
})
export class AttivoComponent implements OnInit {

  posts!: Interfaccia[];

  constructor(private postsSrv: ServiceService) {}

  ngOnInit(): void {
      this.recuperaDati();
  }

  async recuperaDati() {
      this.posts = await this.postsSrv.getPosts();
  }

  onInactivePost(id: number, index: number) {
      this.postsSrv.updatePost({ active: false }, id);
      this.posts.splice(index, 1);
  }
}
