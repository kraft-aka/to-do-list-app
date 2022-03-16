
function newItem() {


    // Create variables
    let listItem = $('<li></li>');
    let inputValue = $('#input').val();


    // Check if item passed to input 
    if (!inputValue) {
        alert('Please, enter an item!');
    };

    // Append item to a list
    listItem.append(inputValue);


    // Add item to the list as to-do item
    $('#list').append(listItem);


    // Delete button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    listItem.append(crossOutButton);


    // Delete item function
    crossOutButton.on('click', function () {
        listItem.addClass('delete');
    });


    // Crossing out list items
    listItem.on('dblclick', function () {
        listItem.toggleClass('strike');
    });


    // Function to move items of the list
    $(function () {
        $('ol').sortable();
    });


    // Focus to change background color of input 
    $('input').focus(function () {
        $(this).css('background', '#fdeff4');
    });


    // Blur the input back to white
    $('input').blur(function () {
        $(this).css('background', 'white');
    });

}













