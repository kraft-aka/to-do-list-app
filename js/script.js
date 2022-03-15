


// add item to a list
function newItem() {
    let inputValue = $('#input[name=ListItem]').val();
    if (!inputValue) {
        alert('Please, enter an item!');
    } else {
        $('#list').append('<li>' + inputValue + '</li>');
    };
}

let li = $('<li></li>');
let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);


// crossing out list items
$('ol').on('click', 'li', function () {
    $(this).toggleClass('strike');
});


// delete an item
$('ol').on('dblclick', 'li', function () {
    $(this).toggleClass('delete');
});


// function to move items of the list
$(function () {
    $('ol').sortable();
});


// focus to change background color of input 
$('input').focus(function () {
    $(this).css('background', '#fdeff4');
});


// blur the input back to white
$('input').blur(function () {
    $(this).css('background', 'white');
});












