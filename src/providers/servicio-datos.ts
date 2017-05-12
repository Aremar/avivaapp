import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the ServicioDatos provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ServicioDatos {
	
	idioma: string;
	client_id: string;
	client_secret: string;
	authorize: string;
	token: string;
	refresh: string;
	plantilla: any;
	URL: string;

  constructor(public http: Http) {
  	this.idioma = 'esES';
		this.URL ='http://10.118.21.98:8080';
		/*Estos datos se deberan inicializar a null cuando se cree el login*/
		this.client_id = 'afbda9276ea24ef2bc31e40ed9dfebeb';
		this.client_secret = 'a22bf317f59742998dcaa0e282be69d3';
  }
  
  setIdioma(lang) {	  
		this.idioma = lang;
  }
  
  getIdioma() {
		return this.idioma; 
  }
  
  getAuthorize(){
	  
	  return this.authorize;
  }
  getToken(){
	  
	  return this.authorize;
  }
  
  grantAuthorize(){
	  	
		let accesURL = this.URL + '/tarificador/oauth/authorize?response_type=code&redirect_uri=' +  this.URL + '/test&client_id=' + this.client_id;
		//obtiene el autorization code con el que llamar a OAuth
		let headers = new Headers();
		headers.append('Authorization', 'Basic ' + btoa(this.client_id+':'+this.client_secret));
		
		return this.http.post(accesURL, null, {
				headers: headers
			});
  }

  grantToken(){

		this.grantAuthorize()
		.subscribe(data => {
				/*let location: string*/ this.authorize = data.headers.get('Location');
				//let part = location.split("=");
				//this.authorize = part[1];
			});
		
			
		/*let oauthURL = this.URL + '/tarificador/oauth/token?grant_type=authorization_code&code='+this.authorize+'&client_id='+this.client_id+'&client_secret='+this.client_secret+'&redirect_uri='+this.URL+'/test';
		
		//obtiene el token OAuth
		let headers = new Headers();
		headers.append('Authorization', 'Basic ' + btoa(this.client_id+':'+this.client_secret));
		this.http.post(oauthURL, null, {
				headers: headers
			})
			.map(res => res.json())
			.subscribe(data => {
				this.token = data.access_token;
				this.refresh = data.refresh_token;
			});*/
  
  }  

  getTemplate(){
		return this.http.get('../assets/templates/template.json')
			.map(res => res.json());
			
  }

}
