

queryURL = "https://www.googleapis.com/books/v1/volumes?q="

$("#buttonTitle").click(function(){
  // var $bookQuery = $('<input>');
  // $bookQuery.val();
  // document.body.append($bookQuery);

  //var bookQuery = $( "#titleQuery" ).val();
  //queryURL += bookQuery;
  //queryURL = "http://openlibrary.org/search.json?q=sciencefiction"
  //queryURL = "http://ia700401.us.archive.org/fulltext/inside.php?item_id=designevaluation25clin&doc=designevaluation25clin&path=/28/items/designevaluation25clin&q=%22library%20science%22&callback=reply";
  queryURL = "https://api.paperquotes.com/quotes?tags=love,life&language=en";
  
  var priceArray = [];

    
    $.ajax({
        //crossDomain: true,
        // headers: {
        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS"
        // },
        url: queryURL,
        method: "GET"
      }).then(function(response) {

        console.log(response);





        
        // $("#appendAuthor").append(response.items[0].volumeInfo.authors[0]);
        // $("#appendDescription").append(response.items[0].volumeInfo.description);
        // $("#appendTitle").append(response.items[0].volumeInfo.title);
       

        // for (var i = 0; i < 10; ++i) {
        //   //var price = response.items[0].saleInfo.retailPrice.amount;
          
        //   if(response.items[i].saleInfo.saleability === "NOT_FOR_SALE") {
        //     //console.log("Is this working?");
        //     continue;
        //   }
        //   else {

        //     priceArray.push(response.items[i].saleInfo.retailPrice.amount);
        //     // if(response.items[i].saleInfo.retailPrice.amount < price) {
        //     //   price = response.items[i].saleInfo.retailPrice.amount;
        //     // }

        //     //$("#appendPrice").append(response.items[i].saleInfo.retailPrice.amount);
        //     //console.log(response.items[i].saleInfo.retailPrice[0]);
        //   }
        // }

        //  priceArray.sort();
        //  $("#appendPrice").append(priceArray.toString());

        // // console.log(response.items[0].volumeInfo.authors[0]);
        // // console.log(response.items[0].volumeInfo.description);
        // // console.log(response.items[0].volumeInfo.title);
        // console.log(response);
      });
});



$("#buttonAuthor").click(function(){
  var authorQuery = $( "#authorQuery" ).val();
  queryURL += authorQuery;

  var bookArray = [];
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    for(var i = 0; i < 10; ++i) {
      bookArray.push(response.items[i].volumeInfo.title);
    }
    console.log(bookArray.toString());
    console.log(response);

    $("#appendBookList").append(bookArray.toString());
    

  });
});
