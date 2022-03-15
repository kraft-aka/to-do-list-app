
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
$('ol').on('dblclick','li', function() {
   $(this).toggleClass('delete');
});


// function to move items of the list
$(function() {
    $('ol').sortable();
});









