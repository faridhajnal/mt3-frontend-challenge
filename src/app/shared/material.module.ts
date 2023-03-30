import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule
    ]
})
export class MaterialModule {}