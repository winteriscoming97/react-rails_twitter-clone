$.ajaxSetup({
  headers: {
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
  }
});
//get Requests

export const allTweets = function (successCB, errorCB) {
  let request = {
    type: 'GET',
    url: '/api/tweets',
    dataType: 'json',
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
}

export const userTweets = function (username, successCB, errorCB) {
  let request = {
    type: 'GET',
    url: '/api/users/' + username + '/tweets',
    dataType: 'json',
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
}

export const searchTweets = function (term, successCB, errorCB) {
  let request = {
    type: 'GET',
    url: '/api/tweets/search/' + term,
    dataType: 'json',
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
}

//Post requests
export const createUser = function (user, successCB, errorCB) {
  let request = {
    type: 'POST',
    url: '/api/users',
    contentType: 'application/json',
    dataType: 'json',
    data: {
      user: user
    },
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
}

export const createSession = function (username, successCB, errorCB) {
  let request = {
    type: 'POST',
    url: '/api/sessions',
    contentType: 'application/json',
    dataType: 'json',
    data: {
      user: {
        username: username
      }
    },
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
}

export const createTweet = function (message, image, successCB, errorCB) {
  let formData = new FormData();
  let photo;
  if (image) {
    photo = document.getElementById('addPhoto').files[0];
    formData.append('photo', image, image.name);
  }

  let request = {
    type: 'POST',
    url: '/api/tweets',
    contentType: 'application/json',
    dataType: 'json',
    data: {
      tweet: {
        message: message,
        image: FormData
      }
    },
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
}

export const deleteSession = function (successCB, errorCB) {
  let request = {
    type: 'DELETE',
    url: '/api/sessions',
    dataType: 'json',
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
}

export const deleteTweet = function (id, successCB, errorCB) {
  let request = {
    type: 'DELETE',
    url: '/api/tweets/' + id,
    dataType: 'json',
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
}
