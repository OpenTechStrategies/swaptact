/*
 * Initializes the import button on change list pages
 *
*/

function setupChangelistFileImport() {
    $("#file-input").on("change", function (event) {
        var form = new FormData();
        form.append("file", event.target.files[0]);
        $.ajax({
            url: $("#file-input").data("path"),
            type: "POST",
            processData: false,
            contentType: false,
            data: form,
            success: function (data) {
                // TODO: Modal popup indicating results, potentially refresh page?
                console.log(data);
            }
        });
    });
}

$(document).ready( function () {
    setupChangelistFileImport();
});
