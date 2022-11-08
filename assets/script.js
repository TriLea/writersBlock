fetch('https://od-api.oxforddictionaries.com/api/v2') 
	  .then(function(response) {
	    return response.json();
	  })
	  .then(function(data) {
	     console.log(data);
	  })
	//need to add authetication data - notes below 
	

	//API Base URL
	//https://od-api.oxforddictionaries.com/api/v2
	//Consistent part of API requests.
	

	//Application ID
	//790591c5
	//This is the application ID, you should send with each API request.
	// How do we add the application ID to each API request?

	//Application Keys
	//771dd832837d5b5806029fd8d019e0d4
	//These are application keys used to authenticate requests.
	

	//At most 5 keys are allowed. //
	

	

	fetch('https://www.stands4.com/services/v2/syno.php') 
	  .then(function(response) {
	    return response.json();
	  })
	  .then(function(data)  {
	    console.log(data);
	  });
	  //waiting for credentials - coming in email. Applied again today via email as what I did last night hasn't been responded to from the site

      
	  //note parameters in search
      //https://www.synonyms.com/synonyms_api.php - this page notes parameters for search
Footer
