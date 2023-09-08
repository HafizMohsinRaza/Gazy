import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta, private title: Title) { }

  updateTitle(title: string): void {
    this.title.setTitle(title);
  }

  updateDescription(description: string): void {
    this.meta.updateTag({ name: 'description', content: description });
  }

  updateKeywords(keywords: string): void {
    this.meta.updateTag({ name: 'keywords', content: keywords });
  }
  

  addStructuredData(data: object): void {
    // Convert the structured data object to a JSON-LD string
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);

    // Append the script element to the document head
    document.head.appendChild(script);
  }
}
