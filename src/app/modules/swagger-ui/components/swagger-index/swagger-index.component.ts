import { Component, OnInit } from '@angular/core';
import { SwaggerUIBundle, SwaggerUIStandalonePreset } from 'swagger-ui-dist';

@Component({
  selector: 'app-swagger-index',
  templateUrl: './swagger-index.component.html',
  styleUrls: ['./swagger-index.component.css']
})
export class SwaggerIndexComponent implements OnInit {
  ngOnInit(): void {
    SwaggerUIBundle({
      urls: [
        {
          name: 'V1',
          url: 'https://fakerestapi.azurewebsites.net/swagger/v1/swagger.json'
        },
        {
          name: 'V2',
          url: 'https://petstore.swagger.io/v2/swagger.json'
        }
      ],
      domNode: document.getElementById('swagger-ui'),
      deepLinking: true,
      presets: [SwaggerUIBundle['presets'].apis, SwaggerUIStandalonePreset],
      layout: 'StandaloneLayout'
    });
  }

}
