import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

declare let window: any;

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
		//http://146.162.243.178:8080
		//http://10.118.21.98:8080
		this.URL ='http://10.118.21.98:8080'; /* modificar para extraer o recuperar en el inicio de la aplicación - basado en dominio +/
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
  setAuthorize(code){

	  this.authorize = code;
  }
  getToken(){
	  
	  return this.token;
  }
  setToken(tok){

	  this.authorize = tok;
  }
  
  grantAuthorize(){
	  	
		let accessURL = this.URL + '/tarificador/oauth/authorize?response_type=code&redirect_uri=' +  this.URL + '/test&client_id=' + this.client_id;
		//obtiene el autorization code con el que llamar a OAuth
		let headers = new Headers();
		headers.append('Authorization', 'Basic ' + btoa(this.client_id+':'+this.client_secret));
		
		return this.http.post(accessURL, null, {
				headers: headers
			})
			.subscribe(data => {
				let location: string = data.headers.get('location');
				let part = location.split("=");
				this.authorize = part[1];
			});
  }
  
  grantToken(){

		this.grantAuthorize();		

		let oauthURLaccess = this.URL + '/tarificador/oauth/token?grant_type=authorization_code&code='+ this.authorize +'&client_id='+this.client_id+'&client_secret='+this.client_secret+'&redirect_uri='+this.URL+'/test';
		//let oauthURLimplicit = this.URL + '/tarificador/oauth/authorize?response_type=token&client_id=' + this.client_id + '&redirect_uri=' +  this.URL + '/test&scope=read';
		//let oauthURLpass = this.URL + '/tarificador/oauth/token?grant_type=password&username=ibh&password=flags0116*&client_id='+this.client_id;
		//let oauthURLcred = this.URL + '/tarificador/oauth/token?grant_type=client_credentials&client_id='+this.client_id+'&client_secret='+this.client_secret;

		//obtiene el token OAuth
		let headers = new Headers();
		headers.append('Authorization', 'Basic ' + btoa(this.client_id+':'+this.client_secret));
		this.http.post(oauthURLaccess, null, {
				headers: headers
			})
			.map(res => res.json())
			.subscribe(data => {
				this.token = data.access_token;
				this.refresh = data.refresh_token;
			});
  
  }  

  getTemplate(){
		return this.http.get('assets/templates/template.json')
			.map(res => res.json());
			
  }

  getTarificacion(cuerpo: string){
		
		let tarificadorURL = this.URL + '/tarificador/simulate/';
		let headers = new Headers();
		headers.append('Authorization', 'Bearer ' + '7767f658-043b-4485-a5f1-d537093ccf5c');
		headers.append('Content-Type', 'application/json');
				
		return this.http.post(tarificadorURL, cuerpo, {
				headers: headers
			})
			.map(res => res.json())


  }

}
