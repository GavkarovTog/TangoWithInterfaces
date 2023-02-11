btn = document.getElementById("getfile")

btn.addListener("click", () => {
    $("#").submit(function(e) {
        e.preventDefault(); // avoid to execute the actual submit of the form.

        var form = $(this);
        var actionUrl = form.attr('action');
        
        $.ajax({
            type: "POST",
            url: actionUrl,
            data: form.serialize(), // serializes the form's elements.
            success: function (data) {
                console.log('Submission was successful.');
                console.log(data);
            }
        });
        
    });
});