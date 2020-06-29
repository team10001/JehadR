    if ( localStorage.getItem('mood')=="night") { 
            var element = document.getElementById("inlineCheckbox1");
            element.setAttribute("checked", "true"); 
        }  

        $('.form-check-input').on('change', function() {
            if ($('body').hasClass('dark')) {
                localStorage.setItem('mood', 'day');
                $('body').removeClass('dark');

                $.ajax({
                    method: "get",
                    url: "/update_mode",
                    data: { mode: 'day' }
                }).done(function(msg) {});
                $('#devlab-footer').attr('src','https://footer.devlab.ae/ar?mode=day&night_bg=1e3452&day_bg=ffffff'); 

                 
                $('#site-logo').attr('src',"https://dash.devlab.ae/public/uploads/site_21/1_5ef9d7d9a43af_1593432025_swhite.png");
                 


               
            } else {
                localStorage.setItem('mood', 'night'); 
                $('body').addClass('dark');

                $.ajax({
                    method: "get",
                    url: "/update_mode",
                    data: { mode: 'night' }
                }).done(function(msg) {});
                $('#devlab-footer').attr('src','https://footer.devlab.ae/ar?mode=night&night_bg=1e3452&day_bg=ffffff');
                 
                $('#site-logo').attr('src',"https://dash.devlab.ae/public/uploads/site_21/1_5ef9d7d9a4dfe_1593432025_sdark.png");
                 


            }  
        });
