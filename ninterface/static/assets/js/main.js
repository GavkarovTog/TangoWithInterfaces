$("#getfile")[0].addEventListener("click", () => {
    $.ajax({
        type: "post",
        data:   $("#fileinput").serialize(),
        url: $("#fileinput").attr("action"),
        dataType: 'json',

        success: (response) => {
            console.log(response);
        },

        error: (response) => {
            console.log("What the fuck!!!!");
        }
    });

    return false;
});