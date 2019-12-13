import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent { 
  @Input() mediaItem;
  @Input() passedFunc;
  @Output() delete = new EventEmitter();


  onDelete(e){
    console.log('delete!',e)
    this.delete.emit(this.mediaItem);
  }


}
