

queryURL = "https://www.googleapis.com/books/v1/volumes?q="
//queryURL = "https://www.goodreads.com/book/harrypotter.FORMAT"

$("#button").click(function(){
  // var $bookQuery = $('<input>');
  // $bookQuery.val();
  // document.body.append($bookQuery);

  var bookQuery = $( "#bookQuery" ).val();
  queryURL += bookQuery;
    
    $.ajax({
        //crossDomain: true,
        // headers: {
        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS"
        // },
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        
        $("#appendAuthor").append(response.items[0].volumeInfo.authors[0]);
        $("#appendDescription").append(response.items[0].volumeInfo.description);
        $("#appendTitle").append(response.items[0].volumeInfo.title);

        console.log(response.items[0].volumeInfo.authors[0]);
        console.log(response.items[0].volumeInfo.description);
        console.log(response.items[0].volumeInfo.title);
        console.log(response);
      });
});

