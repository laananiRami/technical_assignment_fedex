import { inject, NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
const routes: Routes = [{path: "", loadComponent: () => import("./signup/signup.component").then((m) => m.SignupComponent), },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
