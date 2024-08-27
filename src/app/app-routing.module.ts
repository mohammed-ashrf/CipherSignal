import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BinaryConverterComponent } from './binary-converter/binary-converter.component';
import { MorseCodeTranslatorComponent } from './morse-code-translator/morse-code-translator.component';
const routes: Routes = [
  { path:'', redirectTo: '/binary', pathMatch: "full" },
  { path: 'binary', component: BinaryConverterComponent },
  { path: 'morse', component: MorseCodeTranslatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
