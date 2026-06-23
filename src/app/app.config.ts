import { ApplicationConfig } from '@angular/core';
import { providePortfolio } from '@xalpol12/ngx-artist-portfolio';
import projectsData from '../assets/data/projects.json';
import thumbnailsData from '../assets/data/thumbnails.json';
import bioData from '../assets/data/bio.json';

export const appConfig: ApplicationConfig = {
  providers: [
    providePortfolio({
      config: {
        name: 'Zuzanna Bandosz',
        contact: {
          email: 'zuzia.bandosz@gmail.com',
          instagram: 'zbandosz'
        },
        siteTitle: 'Zuzanna Bandosz',
        disableLightboxZoom: true,
        cloudinaryCloudName: 'drtnqrawh',
        data: {
          projects: projectsData as any,
          thumbnails: thumbnailsData as any,
          bio: bioData as any
        }
      },
      provideRouting: true
    })
  ]
};
