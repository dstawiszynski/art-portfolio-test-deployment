import { ApplicationConfig } from '@angular/core';
import {portfolioRoutes, providePortfolio} from '@xalpol12/artist-portfolio';
import projectsData from '../assets/data/projects.json';
import thumbnailsData from '../assets/data/thumbnails.json';
import bioData from '../assets/data/bio.json';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import {provideClientHydration, withEventReplay} from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(portfolioRoutes, withComponentInputBinding()),
    provideClientHydration(withEventReplay()),
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
        // baseUrl: 'https://<your-deployed-domain>', // set this to enable canonical/OG URLs and the sitemap
        labels: {
          nav: {projects: 'Galeria', bio: 'Bio', contact: 'Kontakt'},
          projectNav: {previous: 'Poprzedni', next: 'Następny'},
        },
        data: {
          projects: projectsData as any,
          thumbnails: thumbnailsData as any,
          bio: bioData as any
        }
      },
      provideRouting: false
    })
  ]
};
