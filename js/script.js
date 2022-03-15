let buttonAdd = $('#button');
let deleteButton = (document.createTextNode('X'));



$('.container').append(deleteButton);


//buttonAdd.on('click', function() {
 // alert('Item is added');
//});



// add item to a list
function newItem() {
    let inputValue = $('#input[name=ListItem]').val();
        if (!inputValue) {
            alert('Please, enter an item!');
    } else {
        $('#list').append('<li>'+ inputValue +'</li>');
    };   
}


// crossing out list items

$('ol').on('click','li', function() {
      $(this).toggleClass('strike');
});


// delete an item

deleteButton.click(function() {
   $(this).addClass('delete');
})









