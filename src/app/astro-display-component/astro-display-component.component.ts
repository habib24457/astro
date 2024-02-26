import { Component, inject } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import axios from 'axios';

interface IPlanets {
  basicDetails: { volume: string; mass: string };
  planetOrder: number;
  name: string;
  description: string;
  imgSrc: { img: string; imgDescription: string };
  wikiLink: string;
}

@Component({
  selector: 'app-astro-display-component',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './astro-display-component.component.html',
  styleUrl: './astro-display-component.component.css',
})
export class AstroDisplayComponentComponent {
  httpClient = inject(HttpClient);
  planetsData: IPlanets[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    const options = {
      method: 'GET',
      url: 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/',
      headers: {
        'X-RapidAPI-Key': '184e7793fbmshd0ba8d5fa6bbd5cp19e81cjsn950c9059f25c',
        'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      this.planetsData = response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
