export default {

	get: function(wUrl){

		return new Promise( (resolve, reject) => {
				let req = new XMLHttpRequest();

				req.onload = () => {
					resolve(req.response);
				}
				req.onerror = () => {
					reject(req.statusText);
				}
				req.open("GET", wUrl, true);
				req.responseType = "json";
				req.send();
			} );

	},
	post: function(wUrl, data, headers){

		// {
		// 	"Content-Type":"application/json",
		// 	"Authorization":"JWT 726rjhvafjhasj"
		// }

		return new Promise( (resolve, reject) => {
				let req = new XMLHttpRequest();

				req.onload = () => {
					resolve(req.response);
				}
				req.onerror = () => {
					reject(req.statusText);
				}
				req.open("POST", wUrl, true);
				req.responseType = "json";
				if(headers){
					for (let key in headers){
						req.setRequestHeader(key, headers[key]);
					}
				}
				req.send(data);
			} );
	}
}


