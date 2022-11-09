fetch('https://od-api.oxforddictionaries.com/api/v2') 
	  .then(function(response) {
	    return response.json();
	  })
	  .then(function(data) {
	     console.log(data);
	  })
	//need to add authetication data - notes below 
const options = {
	method: 'GET",
	headers: {
		'X-RapidAPI-Key':'771dd832837d5b5806029fd8d019e0d4',
		'X-RapidAPI-Host':'od-api.oxforddictionaries.com/api/v2'
};

	
	

	//Application ID
	//790591c5
	//This is the application ID, you should send with each API request.
	// How do we add the application ID to each API request?

	//Application Keys
	//771dd832837d5b5806029fd8d019e0d4
	//These are application keys used to authenticate requests.
	

	//At most 5 keys are allowed. /
	 



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '59ae5d1c5amsh851b368a75b1c3dp1c3c6bjsnfffa6369ea8d',
		'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com'
	}
};

fetch('https://twinword-word-graph-dictionary.p.rapidapi.com/association/?entry=mask', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));





Footer
