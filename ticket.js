$(document).ready(function(){
    $('input').on('keyup', function(){
        var filmy = $(this).val().toLowerCase();
        $('table tr').filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(filmy)>-1);
        });
    });
});
