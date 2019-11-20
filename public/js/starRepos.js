// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $('.star').on('click', function(event) {
    const id = $(this).data('id');
    const newStarred = $(this).data('newstarred');

    const newStarredState = {
      starred: newStarred,
    };

    // Send the PUT request.
    $.ajax('/api/repos/' + id, {
      type: 'PUT',
      data: newStarredState,
    }).then(
        function() {
          console.log('changed starred to', newStarred);
          // Reload the page to get the updated list
          location.reload();
        },
    );
  });

  $('.unstar-repo').on('click', function(event) {
    const id = $(this).data('id');

    // Send the DELETE request.
    $.ajax('/api/repos/' + id, {
      type: 'DELETE',
    }).then(
        function() {
          console.log('UNSTARRED repo #' + id);
          // Reload the page to get the updated list
          location.reload();
        },
    );
  });

  $('.create-form').on('submit', function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newStar = {
      name: $('#ca').val().trim(),
      eaten: 0
    };

    // Send the POST request.
    $.ajax('/api/repos', {
      type: 'POST',
      data: newStar,
    }).then(
        function() {
          console.log('Starred new repo');
          // Reload the page to get the updated list
          location.reload();
        },
    );
  });
});
