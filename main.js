if (window.innerWidth >= 425) {
    $(".hero-model").attr("src", "./images/hero-desktop.jpg")
}
const statusMsg = $("<p>")

$("form").submit(function (e) { 
    e.preventDefault();
    const userMail = $("#mailInput").val(); // Get the value of the input field
    const hasDotCom = userMail.endsWith(".com");
    const hasDotOrg = userMail.endsWith(".org");
    const hasDotNet = userMail.endsWith(".net");
    const hasDotEdu = userMail.endsWith(".edu");
    const hasAt = userMail.includes("@");
    const emptyField = userMail.trim().length > 0; // Trim leading/trailing spaces and check if not empty
    const validCharacters = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/; // Regular expression for email validation

    if ((hasDotCom || hasDotOrg || hasDotNet || hasDotEdu) && hasAt && emptyField && validCharacters.test(userMail)) {
        mailSuccess();
    } else {
        printWrongAddress();
    }
});

function printWrongAddress() {
    $(".error-sign").css("display","block")
    $(".error-sign").toggleClass("animated");
    setTimeout(() => {
        $(".error-sign").toggleClass("animated");
    }, 500);
    $("form").addClass("invalid-form")
    console.log("Wrong Address");
    $(statusMsg).removeClass("success-message")
    $(statusMsg).addClass("error-message")
    $(statusMsg).text("Please provise a valid email");
    $("main").append(statusMsg);
}

function mailSuccess() {
    $("form").removeClass("invalid-form")
    $(".error-sign").css("display","none")
    console.log("hasDotCom");
    $(statusMsg).removeClass("error-message")
    $(statusMsg).addClass("success-message")
    $(statusMsg).text("Success!");
    $("main").append(statusMsg);
}

