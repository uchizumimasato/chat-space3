$(document).on('turbolinks:load', function() {
  $(function() {
    // メッセージの作成
    function buildMessage(message) {
      var image = message.image.url == null ? '' : `<img src=${message.image.url}>`;
      var message = `<div class='message'>
                       <div class='upper-message'>
                         <div class='upper-message__user-name'>
                           ${message.user_name}
                         </div>
                         <div class='upper-message__date'>
                           ${message.time}
                         </div>
                       </div>

                       <div class='lower-message'>
                         <p class='lower-message__content'>
                           ${message.content}
                         </p>
                         ${image}
                       </div>
                     </div>`
      return message;
    }
    // 非同期通信の関数
    $('#new_message').on('submit', function(e) {
      e.preventDefault();
      var formdata = new FormData($('#new_message').get(0));
      $.ajax({
        url:         location.href,
        type:        "POST",
        data:        formdata,
        dataType:    'json',
        processData: false,
        contentType: false
      })
      .done(function(data) {
        var html = buildMessage(data);
        $('.messages').append(html);
        $('#new_message')[0].reset();
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
        $(".form__submit").prop("disabled", false);
      })
      .fail(function() {
        $(".form__submit").prop("disabled", false);
        alert('メッセージを入力してください');
      });
    });
  });
});
