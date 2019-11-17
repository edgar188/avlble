// Slider handler
$(document).ready(function () {
    $("#owl-demo").owlCarousel({
        navigation: true,
        slideSpeed: 100,
        paginationSpeed: 200,
        singleItem: true,
        autoplay: true,
        autoPlaySpeed: 1000,
        autoPlayTimeout: 1000,
        items : 1,
    });
});

// Portfolios on roll handler
function onRollHandler(boolean, target) {
    var rollOverNode = target.children[0].children[1];
    if(boolean) {
        rollOverNode.setAttribute("style", `visibility: visible; opacity: 0.8;`);
    } else {
        rollOverNode.setAttribute("style", `visibility: hidden; opacity: 0;`);
    }
}
