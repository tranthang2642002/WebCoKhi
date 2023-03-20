
$(document).ready(function () {
    $('.s_slider .slick-slider').slick();
});

$(document).ready(function () {
    $('.s-project .slick-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 400,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('.s-new .slick-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay:false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 400,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('.s-slider-2 .slick-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        // autoplay:false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 400,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $(document).ready(function () {
        $('.s_box .btn').click(function () {
            $(this).parent().find('.s_unit').slideToggle(400);
            $(this).parent().siblings().find('.s_unit').slideUp(400);
        })
    });
});




$(document).ready(function () {
    $('.s_icon').click(function () {
        $('.s_input').css('display', 'block');
        $(this).css('display', 'none');
        $('.s_icon_1').css('display', 'block');
    })

    $('.s_icon_1').click(function () {
        $('.s_input').css('display', 'none');
        $(this).css('display', 'none');
        $('.s_icon').css('display', 'block');
    })

    $('.s-header .s_content .s_btn').click(function () {
        $('.s-header .s_content .s_nav').toggleClass('even')
    });

    $('.s-header .s_content .s_nav > ul > li.s_sub > a').click(function (e) {
        e.preventDefault();
    })

    $('.s-header .s_content .s_nav>ul>li').click(function () {
        $(this).find('.s_nav_1').toggleClass('active');

    })
});

$(document).ready(function () {
    $(".conten .s_btn").click(function () {
        $(".s_desc").toggleClass("active");
        $check = $(this).find("button").text();
        if ($check == "Xem thêm") $(this).find("button").text("Thu Gọn");
        else $(this).find("button").text("Xem thêm");
    });
});


$(document).ready(function(){
    $('.contact .b_text .b_btn').click(function(){
         $name=$('.name').val();
         $phone=$('.phone').val();
         $email=$('.email').val();
         $address=$('.address').val();

         if( $name == "")
         $('.error').text('Chưa nhập đủ tên');

         if( $phone == "")
         $('.error').text('Chưa nhập đủ số điẹn thoại');

         if( $email == "")
         $('.error').text('Chưa nhập đủ email');

         if( $address == "")
         $('.error').text('Chưa nhập đủ địa chỉ');

        if($name == "" && $phone == "" && $email == "" && $address == "")
        $('.error').text('Chưa đủ thông tin');
    })
    

})



