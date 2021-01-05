import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule  } from '@angular/material/sidenav';
import {  MatListModule,  } from '@angular/material/list';

import {  MatTableModule,  } from '@angular/material/table';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator'
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';

import {MatSortModule} from '@angular/material/sort';

import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { MatGridListModule } from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {ReactiveFormsModule} from '@angular/forms';
import { CustomersComponent } from './customers/customers.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomersComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatTableModule,
  
    MatGridListModule,
    
    HttpClientModule,

    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    //firebase 
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
