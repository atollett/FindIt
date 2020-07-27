

queryURL = "https://www.googleapis.com/books/v1/volumes?q="
//queryURL = "https://www.goodreads.com/book/harrypotter.FORMAT"

$("#button").click(function(){
  // var $bookQuery = $('<input>');
  // $bookQuery.val();
  // document.body.append($bookQuery);

  var bookQuery = $( "#bookQuery" ).val();
  //queryURL += bookQuery;

  queryURL = "http://openlibrary.org/search.json?q=elantris"

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

        // Google Sign-In User Sign Out //
<a href="#" onclick="signOut();">Sign out</a>
<script>
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
</script>





        
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

        // priceArray.sort();
        // $("#appendPrice").append(priceArray);

        // // console.log(response.items[0].volumeInfo.authors[0]);
        // // console.log(response.items[0].volumeInfo.description);
        // // console.log(response.items[0].volumeInfo.title);
        // console.log(response);
      });
});

