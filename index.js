$(document).ready(()=>{
    $('.nav-link').click(function(){
        $('.nav-link').removeClass('active')
        $(this).addClass('active')
    }) 
    $('.menu a').click(function(){
        $('.menu a').removeClass('active')
        $(this).addClass('active')
    }) 
    if($('body').hasClass('dark')){
        $('.dark-toggle').attr("checked", "checked");
    }
    $('.dark-toggle').click(function(){
        if( $(this).is(':checked') ){
            $('body').addClass('dark')
        }else{
            $('body').removeClass('dark')
        }
    })
    $('#sidenav-toggle').click(()=>{
        $('.sidenav').removeClass('active')
        setTimeout(() => {
            $('.side').hide('slow')
        }, 100);
    })
    $('.sidenav-toggle').click(()=>{
        $('.side').show('slow')
        setTimeout(() => {
            $('.sidenav').addClass('active')
        }, 100);
    })
    $('.float button').click(function(){
        if($(this).data('show') == 0){
            $(this).data('show', 1);
            $(this).html('<span class="material-icons animate__animated animate__bounceIn">clear</span>')
            $('.float .card').show('slow');
        }else{
            $(this).html('<span class="material-icons animate__animated animate__bounceIn">question_answer</span>')
            $(this).data('show', 0);
            $('.float .card').hide('slow');
        }
    })
})