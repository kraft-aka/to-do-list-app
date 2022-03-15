// get a value of the input

let inputValue = $('#input').val();


/*$('#input').each(function (i) {
    let inputValue = $(this).val();
    if (inputValue.lenght < 1){
        alert('Please, add an item');
    }
})*/


// select a list element


$('#list').append('<li>' + $('#input').val() + '</li>');


// crossing out list items

$('#list').on('click', function() {
    $('#list').addClass('strike');
});



// adding an item to list



// function
function newItem() {
    let buttonAdd = $('#button');

    buttonAdd.on('click', function() {
        $('#list').append($('#list').val());
    });
}



