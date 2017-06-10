import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'bookmark-list',
  template: `
    <div class="panel panel-default">
      <table class="table table-striped">
        <tr *ngFor="let bookmark of bookmarks">
          <td>
            <a [href]="bookmark.apelido" target="_blank">{{bookmark.nome}}</a>
          </td>
          
          <td class="hidden-xs hidden-sm">{{bookmark.apelido}}</td>
          <td>
            <button (click)="onEdit(bookmark)" class="btn btn-primary">
              <span class="glyphicon glyphicon-pencil"></span>
              <span class="hidden-xs">Editar</span>
            </button>
            <button (click)="onRemove(bookmark)" class="btn btn-danger">
              <span class="glyphicon glyphicon-trash"></span>
              <span class="hidden-xs">Deletar</span>
            </button>
          </td>
        </tr>
      </table>
    </div>
  `,
})
export class BookmarkListComponent {

  @Input() bookmarks = [];
  @Output() edit = new EventEmitter();
  @Output() remove = new EventEmitter();

  onEdit(bookmark) {
    this.edit.emit(bookmark);
  }

  onRemove(bookmark) {
    this.remove.emit(bookmark);
  }

}
