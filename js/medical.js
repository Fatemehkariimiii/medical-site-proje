$(document).ready(function (){
    
    // 
    // 

    let hrefs = $("a[href*='#']");
    $(hrefs).click(function(e){
        e.preventDefault();
        let currenttHash = $(this);
        let sectionTop = $(this.hash).offset().top;

        $('html , body').animate({scrollTop : sectionTop} , 2000 );
    });




    // 
    // sticki menue
    // 

    let stickyOffset = $('.first-nav').offset().top;
    $(window).scroll(function(){
        let stickyScroll = $(window).scrollTop();

        if(stickyScroll>stickyOffset){
            $('.first-nav').addClass('sticky-menue');
        }else{
            $('.first-nav').removeClass('sticky-menue');
        };

    });


    // 
    // slider-first
    // 

    let sNumber = 1;
    let slideCount = $('.sayhello').length;

    function nextSlider(){
        let pageSlide = '#slide' + sNumber; 
        $(pageSlide).removeClass('show-active');
        sNumber = sNumber + 1;

        if(sNumber > slideCount){
            sNumber = 1;
            $('#slide1').addClass('show-active');
        }else{
            let nextSlide =  '#slide' + sNumber;
            $(nextSlide).addClass('show-active');
        };
    };

    function preSlider(){
        let pageSlide = '#slide' + sNumber;

        if(sNumber > 1){
            $(pageSlide).removeClass('show-active');
            sNumber = sNumber - 1 ;
            let preslide = '#slide' + sNumber;
            $(preslide).addClass('show-active');
        };
    };


    $('.flash-right').on('click', function(){
        nextSlider();
    });



    $('.flash-left').on('click', function(){
        preSlider()  
    });

    setInterval(nextSlider,7000);


    // 
    // 
    // 
    // question & answer & acardeon
    // 
    
    $('.question').on('click', function(){
        $('.answer').slideUp(300);
        $('.question>i.fi.fi-br-cross').addClass('hide');
        $('.question>i.fi.fi-br-plus').removeClass('hide');
        $('.question>i.fi.fi-br-cross').removeClass('append-change');
        if($(this).find('.answer').css('display')== 'none'){
            $(this).find('.answer').slideDown(300);
            $(this).find('i.fi.fi-br-plus').addClass('hide');
            $(this).find('i.fi.fi-br-cross').addClass('append-change');
            $(this).find('i.fi.fi-br-cross').removeClass('hide');
        };
        
    });


    // 
    // clinics & doctors & click and change
    // 

    $('.our-clinics>img').on('click', function(){

        $('.our-doctors').hide();
        $('.more-info').hide();
        $('.doki').removeClass('col-8');
        $('.doki').addClass('col-3');
        
        $('.doki').removeClass('active-info');
        $('.more-info-doctor').removeClass('active-btn');

        $('.our-clinics img').removeClass('active');
        $(this).addClass('active');


        let clinickImg = $(this).attr('clinick-img');
        clinicDoctors = $('[clinic-doctor = '+ clinickImg +' ]');

        
        $(clinicDoctors).show();

    });

    // 
    //  information doctors & click on button and show
    // 

    $('.more-info-doctor').on('click', function(){

        $('.more-info').hide();
        $('.doki').removeClass('active-info');
        $(this).parents('.doki').addClass('active-info');
        $('.more-info-doctor').removeClass('active-btn');
        $(this).addClass('active-btn');

        btnInfo = $(this).attr('btn');
        boxInfo =$('[ box-more = '+ btnInfo +' ]');

        $('.doki').removeClass("col-8");        
        $('.doki').addClass('col-3');


        if($('.more-info').css('display')== 'none'){

            $(this).parents('.doki').removeClass('col-3');
            $(this).parents('.doki').addClass("col-8");
            $(boxInfo).show();
            
        };
            

    });


    // 
    //  information doctors & click on close and hide
    // 

    $('.more-info>i.fi.fi-br-cross').on('click' , function(){
        $('.doki').addClass('col-3');
        $('.doki').removeClass("col-8");
        $('.more-info').hide();
        $('.more-info-doctor').removeClass('active-btn');
        $('.doki').removeClass('active-info');


    });


    // 
    // 
    // contact form $ nazarat & nobat dehi & click and change
    // 
    $('.d').on('click', function(){

        $('.form').hide();

        $('.d').removeClass('active');
        $(this).addClass('active');

        sideBar = $(this).attr('sidebar');
        formD = $('[form = '+ sideBar +' ]');

        $(formD).show();
    });


    $('.with-doki').on('click', function(){
        
        $('.mydoct').slideUp();
        $('.with-doki').removeClass('activ-inside');
        $(this).addClass('activ-inside');

        infoAttr = $(this).attr('with-our-doctor');
        onfoInside = $('[insid-doctor = '+ infoAttr +']');

        $(onfoInside).slideDown();
    });



    $('.sample-with-doki').on('click' , function(){

        $('.simple-doctor-work').removeClass('hide1');
    });



    $('.small-box-img>img').on('click', function(){

        $('.big-box-img>img').hide();

        attrSmallSample = $(this).attr('small-sample');
        let attrBigSample = '[big-sample = '+ attrSmallSample +' ]'

        $(attrBigSample).show();
    })


    // js code for mobile

    $('.more-info-doctor').on('click', function(){
        $('.maybe').removeClass('hide-moblie')
        $(this).parents('.maybe').addClass('hide-moblie');
    });

    $('.more-info>i.fi.fi-br-cross').on('click' , function(){
        $('.maybe').removeClass('hide-moblie')
        $(this).parents('.more-info ').addClass('hide-moblie');
    });


    // js code for tablet

    $('.more-info-doctor').on('click', function(){
        $('.maybe').removeClass('hide-tablet')
        $(this).parents('.maybe').addClass('hide-tablet');
    });

    $('.more-info>i.fi.fi-br-cross').on('click' , function(){
        $('.maybe').removeClass('hide-tablet')
        $(this).parents('.more-info ').addClass('hide-tablet');
    });



    $('i.fi.fi-rr-menu-burger').on('click', function(){
        $('.hamber-menue-mobile').addClass('hamber-menue-mobile-active');
    });
    $('.faza').on('click', function(){
        $('.hamber-menue-mobile').removeClass('hamber-menue-mobile-active');
    })


});

