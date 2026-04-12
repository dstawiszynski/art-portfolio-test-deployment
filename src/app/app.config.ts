import { ApplicationConfig } from '@angular/core';
import { providePortfolio } from '@xalpol12/ngx-artist-portfolio';

export const appConfig: ApplicationConfig = {
  providers: [
    providePortfolio({
      config: {
        contentApiUrl: 'https://raw.githubusercontent.com/dstawiszynski/artist-portfolio-data/refs/heads/main/',
        name: 'Zuzanna Bandosz',
        contact: {
          email: 'zuzia.bandosz@gmail.com',
          instagram: 'zbandosz'
        },
        cacheExpirationTimeMs: 15 * 60 * 1000, // 15 minutes
        disableLightboxZoom: true,
        cloudinaryCloudName: 'drtnqrawh'
      },
      provideRouting: true
    })
  ]
};
