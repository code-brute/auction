import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// 关闭开发者模式
if (environment.production) {
  enableProdMode();
}

// 指定angular 的主模块
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
