$(document).ready(function(){
    $('nav li a').each(function(){
        if($(this).attr('href')==location.pathname)
        {
            console.log('hhh')
            $(this).parent().addClass('active');
        }
    })
}())