$("#img1").on("click", function(){
    $(".imgs").remove();

var newimg = $("<img>");

newimg.attr("src", "images/image-product-1.jpg");
newimg.attr("alt", "first snikers");
newimg.addClass("imgs");

$("#main-img-div").prepend(newimg);

$(this).css({opacity:0.5});
$("#img4").css({opacity:1});

});


//for second img

$("#img2").on("click", function(){
    $(".imgs").remove();

var newimg = $("<img>");

newimg.attr("src", "images/image-product-2.jpg");
newimg.attr("alt", "second snikers");
newimg.addClass("imgs");

$("#main-img-div").prepend(newimg);

$(this).css({opacity:0.5});
$("#img1").css({opacity:1});

});

//for third img
$("#img3").on("click", function(){
    $(".imgs").remove();

var newimg = $("<img>");

newimg.attr("src", "images/image-product-3.jpg");
newimg.attr("alt", "third snikers");
newimg.addClass("imgs");

$("#main-img-div").prepend(newimg);

$(this).css({opacity:0.5});
$("#img2").css({opacity:1});

});

// for fourth div
$("#img4").on("click", function(){
    $(".imgs").remove();

var newimg = $("<img>");

newimg.attr("src", "images/image-product-4.jpg");
newimg.attr("alt", "fourth snikers");
newimg.addClass("imgs");

$("#main-img-div").prepend(newimg);

$(this).css({opacity:0.5});
$("#img3").css({opacity:1});

});

// float img

$("#main-div-img").on("click", function(){
    $(".full-div").css({display:"block"});
});

$("#float-btn").on("click", function(){
    $(".full-div").css({display:"none"});
});

//float img slide

$("#img5").on("click", function(){
    $(".imgss").remove();

var newimg = $("<img>");

newimg.attr("src", "images/image-product-1.jpg");
newimg.addClass("imgss");

$(".fulls-div").prepend(newimg);

$(this).css({opacity:0.5});
$("#img8").css({opacity:1});

});


//float second img

$("#img6").on("click", function(){
    $(".imgss").remove();

var newimg = $("<img>");

newimg.attr("src", "images/image-product-2.jpg");
newimg.addClass("imgss");

$(".fulls-div").prepend(newimg);

$(this).css({opacity:0.5});
$("#img5").css({opacity:1});

});

//float third img
$("#img7").on("click", function(){
    $(".imgss").remove();

var newimg = $("<img>");

newimg.attr("src", "images/image-product-3.jpg");
newimg.addClass("imgss");

$(".fulls-div").prepend(newimg);

$(this).css({opacity:0.5});
$("#img6").css({opacity:1});

});

// float fourth div
$("#img8").on("click", function(){
    $(".imgss").remove();

var newimg = $("<img>");

newimg.attr("src", "images/image-product-4.jpg");
newimg.addClass("imgss");

$(".fulls-div").prepend(newimg);

$(this).css({opacity:0.5});
$("#img7").css({opacity:1});

});


$("#cart").on("click", function(){
    $("#cart-div").slideToggle();
    $(this).css({color:"black"});
});


$("#check-btn").on("click", function(){
    var checks = $("<img>");

    checks.attr("src", "images/image-product-1.jpg");
    checks.addClass("imgsss");
    $("#checkout-img-div").prepend(checks);
    $("#checkout-img-div p").append("Fall Limited Edition Sneakers");
    $("small").css({display:"none"});
    $("#cart").css({color:"red"});
    $("em").css({display:"block"});
    $("#cart-div button").css({display:"block"});
})

$("em").on("click",function(){
    $("small").css({display:"block"});
     $(".imgsss").remove();
     $("#checkout-img-div p").empty();
     $("em").css({display:"none"});
     $("#cart-div button").css({display:"none"});
     $("#cart").css({color:"black"});
     
});

$("#mob-nav").click(function(){
    $("#head").css({display:"none"});
});

$("#bars").click(function(){
    $("#head").css({display:"block"});
});

let nextnumber =0;

let nextbutton =$("#next");

nextbutton.click(function(){
    nextnumber++;

    $("#counters").text(nextnumber);
})

let prevnumber =0;

let prevbutton =$("#prev");

prevbutton.click(function(){
    prevnumber = 0;
    nextnumber = 0;

   

    $("#counters").text(prevnumber);
});


let price = 0;

let priceinc =$("#next");

priceinc.click(function(){
    price+= 125.00;

    $("#dis-price").text(price);
});

let totalnum =0;

let nexbutton =$("#next");

nexbutton.click(function(){
    totalnum++;

    $("#num").text(totalnum);
})

let cartnum =0;

let cartbutton =$("#next");

cartbutton.click(function(){
    cartnum++;

    $("#cart").text(cartnum);
    $("#cart").css({opacity:1});
})


let prenumber =0;

let prebutton =$("#prev");

prebutton.click(function(){
    
    price = 0;
    totalnum = 0;
    cartnum = 0;

    
    $("#dis-price").text(prenumber);
    $("#num").text(prenumber);
    $("#cart").text(cartnum);
    $("#cart").css({opacity:0});
    $("#cart-div").css({display:"none"});
});

$("em").on("click",function(){
    $("#price-divs").css({opacity:0});
});

$("#check-btn").on("click", function(){
    $("#price-divs").css({opacity:1});
})

