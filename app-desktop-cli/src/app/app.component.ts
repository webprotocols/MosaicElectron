import { Component } from '@angular/core';
import * as fs from 'fs';
import * as java from 'java';
import * as oracledb from 'oracledb';

let System = java.import('java.lang.System');

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.component.html',
	styleUrls: ['app/app.component.css']
})
export class AppComponent {
	name = 'Angular';
	file: string;
	depts: string = "XXXXXXXX";
	constructor() {
		this.file = fs.readFileSync("package.json", "utf-8");
		var System = java.import("java.lang.System");
		System.out.println("Hello Java!!!");

			// oracledb.getConnection({
			// 	user: "scott",
			// 	password: "tiger",
			// 	connectString: "localhost/orcl"
			// }).then(conn => {
			// 	console.log("@@@@@@@@@@@");
			// 	conn.execute("select * from emp").then(result => {
			// 		this.depts = JSON.stringify(result.rows);
			// 		console.log(this.depts);
			// 		System.out.println(this.depts);

			// 	}).catch(err => {
			// 		console.log(err);
			// 	});
			// }).catch(err => {
			// 	console.log(err);
			// });

	}

}

