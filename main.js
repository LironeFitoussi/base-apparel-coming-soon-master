console.log("test");

$("form").submit(function (e) { 
    e.preventDefault();
    const userMail = $("#mailInput").val()

    // Ends with validation
    const hasDotCom = userMail.endsWith(".com");
    const hasDotOrg = userMail.endsWith(".org");
    const hasDotNet = userMail.endsWith(".net");
    const hasDotEdu = userMail.endsWith(".edu");
    if (hasDotCom || hasDotOrg || hasDotNet || hasDotEdu) {
        console.log("hasDotCom");
    } else {
        return printWrongAdrress()
    }
});

function printWrongAdrress() {
    $(".error-sign").css("display","block")
    $(".error-sign").toggleClass("animated");
    setTimeout(() => {
        $(".error-sign").toggleClass("animated");
    }, 500);
    console.log("Wrong Address");
}