var carousel = new ch.Carousel(ch('.demo-carousel')[0], {
    autoMargin: false
});


// ARIA states

var selectQuantity = document.getElementsByTagName('select')[0];
var selectPayments = document.getElementsByTagName('select')[1];

selectQuantity.onchange = function() {
   setAria(selectQuantity);
}

selectPayments.onchange = function() {
   setAria(selectPayments);
}

function setAria(component) {
    var optionsArray = component.options;
    for(var i=0; i<optionsArray.length; i++){
        component.children[i].removeAttribute('aria-selected');
    }
    var index = component.selectedIndex;
    component.children[index].setAttribute('aria-selected', 'true');
}

var labelTabA = document.getElementById('tab-1-label');
var labelTabB = document.getElementById('tab-2-label');
var contentTabA = document.getElementById('product--tab-content-tab-1');
var contentTabB = document.getElementById('product--tab-content-tab-2');

function setInputAria(id) {
    labelTabA.removeAttribute('aria-selected')
    labelTabB.removeAttribute('aria-selected')
    contentTabA.setAttribute('aria-hidden', 'true')
    contentTabB.setAttribute('aria-hidden', 'true')

    var selectedTab = document.getElementById(id+'-label');
    var selectedContent = document.getElementById('product--tab-content-'+id);
    selectedTab.setAttribute('aria-selected', 'true')
    selectedContent.removeAttribute('aria-hidden')
}






labelTabA.click(function () {
        console.log(inputTabA)
})

labelTabB.click(function () {
        console.log(inputTabB)
})