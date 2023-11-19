import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

//import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from "./app/app.module";

/*bootstrapApplication(AppModule)
  .catch((err) => console.error(err));*/


  platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
