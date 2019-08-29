import { NgModule } from '@angular/core';
import { LibDaruixComponent } from './lib-daruix.component';
import { NewCompComponent } from './new-comp/new-comp.component';



@NgModule({
  declarations: [LibDaruixComponent, NewCompComponent],
  imports: [
  ],
  exports: [LibDaruixComponent, NewCompComponent]
})
export class LibDaruixModule { }
