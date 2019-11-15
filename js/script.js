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

// Portfolios on roll handlers
function onRollHandler(boolean, target) {
    var rollOverNode = target.children[0].children[1];
    if(boolean) {
        rollOverNode.style.opacity = 0.8;
    } else {
        rollOverNode.style.opacity = 0;
    }
}
