var Promise = require('es6-promise').polyfill();
var fetch = require("isomorphic-fetch");

var result = fetch('http://api.dev.ygstudios.com/query',
{ method: 'POST', body: 'data= { classes.limit(10).offset(10) {'
    + 'count,'
    + 'edges {'
        + 'id,'
        + 'name,'
        + 'start_time,'
        + 'studio {'
          + 'name'
        + '}'
     + '}' 
   + '}' 
+ '}' 
}

).then(function(response) {
    if (response.status >= 400) {
        throw new Error("Bad response from server");
    }   
    return response.text();
})
.then(function(result) {
    console.log('LA Classes');
    console.log(result);
    return result;
});   

// var req = require('request');

// req({
// 	url: 'http://api.ygstudios.com/query',
// 	method: 'POST',
// 	headers: {
// 		'Access-Control-Allow-Origin': '*',
// 		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
// 	},
// 	qs: { data: {
//       		classes: { 
//         		edges: { 
//           			name: 'name', 
//           			description: 'description', 
//           			start_time: 'start_time', 
//           			end_time: 'end_time', 
//           			guru: { 
//             			full_name: 'full_name' 
//           			}, 
//           			room: { 
//             			name: 'name' 
//           			}, 
//           			studio: { 
//             			name: 'name', 
//             			address: 'address', 
//             			photo: 'photo' 
//           			} 
//         		} 
//       		}
//       	}
// 	}
// }).on('response', function(response) {
// 	 console.log(response.statusCode)
// 	 console.log(response)
// })