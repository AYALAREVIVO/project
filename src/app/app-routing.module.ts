import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'event', loadChildren: './event/event.module#EventPageModule' },
  { path: 'serch', loadChildren: './serch/serch.module#SerchPageModule' },
  { path: 'camera', loadChildren: './camera/camera.module#CameraPageModule' },
  { path: 'option', loadChildren: './option/option.module#OptionPageModule' },
  { path: 'day', loadChildren: './day/day.module#DayPageModule' },  { path: 'pic-upload', loadChildren: './pic-upload/pic-upload.module#PicUploadPageModule' },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
