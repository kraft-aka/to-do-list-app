let buttonAdd = $('#button');

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

$('').click(function() {
    $('li').addClass('strike');
});


// delete an item





