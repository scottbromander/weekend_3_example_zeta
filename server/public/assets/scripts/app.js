var entryX, entryY, mathOperation;
var values = {};

$(document).ready(function(){
    $("#inputValues").submit(function(event){
        event.preventDefault();

        if(prepareToCalc($(this))){
            $.ajax({
                type: "POST",
                url: "/math/" + values.mathOperation,
                data: values,
                success: function(response){
                    console.log(response);
                }
            });
        }
        //check for conditions before the send
    });

    $(".math").on('click', function(){
        mathOperation = $(this).data("math");
        $(this).text();
        //targeting data-math="whatevs"
        console.log(mathOperation);
    });
});

function prepareToCalc($el){
    $.each($el.serializeArray(), function(i, field){
        values[field.name] = field.value;
    });

    if(values.entryX && values.entryY && mathOperation){
        values.mathOperation = mathOperation;
        return true;
    } else {
        return false;
    }
}