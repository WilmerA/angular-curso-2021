
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
        ContadorComponent,
    ],
    exports: [
        ContadorComponent,
    ],
    imports: [
        CommonModule,
    ],
})
export class ContadorModule {}