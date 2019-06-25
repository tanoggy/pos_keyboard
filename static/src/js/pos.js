console.log('test mới oggy');

     // thêm vào nè 
     //ahihi 
            $.shortcutOggy = function(key, callback, args) {
            console.log('đã chạy được');
            $(document).keydown(function(e) {
                if(!args) args=[]; // IE barks when args is null
                if((e.keyCode == key.charCodeAt(0) || e.keyCode == key)) {
                    callback.apply(this, args);
                    return false;
                        }
                    });        
                };
                // chọn khách hàng
                $.shortcutOggy('67', function() {
                   console.log('Đã nhấn chữ C');
                   $('.button.js_set_customer').click();
                  setTimeout(function() {
         $('.searchbox input')[1].focus()
         }, 500);

                });

                
             

                // phím a
                 $.shortcutOggy('65', function() {
                 
             $('.searchbox input')[1].focus();
                  

                });


