
$(document).ready(function(){
  $(".fa-ellipsis-v").click(function(){
    $(".dropdown-content").fadeToggle(400);
  });


$("button:nth-child(2)").click(function(){
	
	$(".line").css({"width": "45px","transform":"translate(110px)"});
	$("#OVERVIEW").css("display","none");
	$("#sec").addClass("active");
	$("#first").removeClass("active");
	$("#CAST").css("display","block");

});
$("button:nth-child(1)").click(function(){
	$(".line").css({"width": "80px","transform":"translate(0px)"});
	$("#OVERVIEW").css("display","block");
	$("#first").addClass("active");
	$("#sec").removeClass("active");
	$("#CAST").css("display","none");
});
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndex-1].style.display = "block"; 
}


var myVar;

function myFunction() {
  myVar = setTimeout(showPage,1000 );
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

let artist = [
  {
    "artistImg":"http://www.gstatic.com/tv/thumb/persons/1366/1366_v9_bb.jpg",
    "artistName":"Brad Pitt",
    "artistDesc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ratione explicabo nihil expedita, labore, minima mollitia nisi molestias saepe illum, soluta non illo. Quas consectetur aperiam esse amet reiciendis, nesciunt.lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ratione explicabo nihil expedita, labore, minima mollitia nisi molestias saepe illum, soluta non illo. Quas consectetur aperiam esse amet reiciendis, nesciunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ratione explicabo nihil expedita, labore, minima mollitia nisi molestias saepe illum, soluta non illo. Quas consectetur aperiam esse amet reiciendis, nesciunt.",
     "imageAlt":"Brad Pitt"
  },{
    "artistImg":"http://www.gstatic.com/tv/thumb/persons/68012/68012_v9_bb.jpg",
    "artistName":"Edward Norton",
    "artistDesc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ratione explicabo nihil expedita, labore, minima mollitia nisi molestias saepe illum, soluta non illo. Quas consectetur aperiam esse amet reiciendis, nesciunt.lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ratione explicabo nihil expedita, labore, minima mollitia nisi molestias saepe illum, soluta non illo. Quas consectetur aperiam esse amet reiciendis, nesciunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ratione explicabo nihil expedita, labore, minima mollitia nisi molestias saepe illum, soluta non illo. Quas consectetur aperiam esse amet reiciendis, nesciunt.",
    "imageAlt":"Edward Norton"
  },{
    "artistImg":"http://www.gstatic.com/tv/thumb/persons/202273/202273_v9_ba.jpg",
    "artistName":"Helena Bonham Carter",
    "artistDesc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ratione explicabo nihil expedita, labore, minima mollitia nisi molestias saepe illum, soluta non illo. Quas consectetur aperiam esse amet reiciendis, nesciunt.lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ratione explicabo nihil expedita, labore, minima mollitia nisi molestias saepe illum, soluta non illo. Quas consectetur aperiam esse amet reiciendis, nesciunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ratione explicabo nihil expedita, labore, minima mollitia nisi molestias saepe illum, soluta non illo. Quas consectetur aperiam esse amet reiciendis, nesciunt.",
    "imageAlt":"Helena Bonham Carter"
  },{
    "artistImg":"http://www.gstatic.com/tv/thumb/persons/74092/74092_v9_ba.jpg",
    "artistName":"Jared Leto",
    "artistDesc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ratione explicabo nihil expedita, labore, minima mollitia nisi molestias saepe illum, soluta non illo. Quas consectetur aperiam esse amet reiciendis, nesciunt.lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ratione explicabo nihil expedita, labore, minima mollitia nisi molestias saepe illum, soluta non illo. Quas consectetur aperiam esse amet reiciendis, nesciunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ratione explicabo nihil expedita, labore, minima mollitia nisi molestias saepe illum, soluta non illo. Quas consectetur aperiam esse amet reiciendis, nesciunt.",
    "imageAlt":"Jared Leto"
  },{
    "artistImg":"http://www.gstatic.com/tv/thumb/persons/1154/1154_v9_bb.jpg",
    "artistName":"Meat Loaf",
    "artistDesc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ratione explicabo nihil expedita, labore, minima mollitia nisi molestias saepe illum, soluta non illo. Quas consectetur aperiam esse amet reiciendis, nesciunt.lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ratione explicabo nihil expedita, labore, minima mollitia nisi molestias saepe illum, soluta non illo. Quas consectetur aperiam esse amet reiciendis, nesciunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ratione explicabo nihil expedita, labore, minima mollitia nisi molestias saepe illum, soluta non illo. Quas consectetur aperiam esse amet reiciendis, nesciunt.",
    "imageAlt":"Meat Loaf"
  },{
    "artistImg":"http://www.gstatic.com/tv/thumb/persons/171322/171322_v9_ba.jpg",
    "artistName":"Zach Grenier",
    "artistDesc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ratione explicabo nihil expedita, labore, minima mollitia nisi molestias saepe illum, soluta non illo. Quas consectetur aperiam esse amet reiciendis, nesciunt.lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ratione explicabo nihil expedita, labore, minima mollitia nisi molestias saepe illum, soluta non illo. Quas consectetur aperiam esse amet reiciendis, nesciunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ratione explicabo nihil expedita, labore, minima mollitia nisi molestias saepe illum, soluta non illo. Quas consectetur aperiam esse amet reiciendis, nesciunt.",
    "imageAlt":"Zach Grenier"
  },{
    "artistImg":"http://www.gstatic.com/tv/thumb/persons/71943/71943_v9_bb.jpg",
    "artistName":"Holt McCallany",
    "artistDesc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ratione explicabo nihil expedita, labore, minima mollitia nisi molestias saepe illum, soluta non illo. Quas consectetur aperiam esse amet reiciendis, nesciunt.lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ratione explicabo nihil expedita, labore, minima mollitia nisi molestias saepe illum, soluta non illo. Quas consectetur aperiam esse amet reiciendis, nesciunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ratione explicabo nihil expedita, labore, minima mollitia nisi molestias saepe illum, soluta non illo. Quas consectetur aperiam esse amet reiciendis, nesciunt.",
    "imageAlt":"Holt McCallany"
  },{
    "artistImg":"https://m.media-amazon.com/images/M/MV5BYTE3ZjlhOGItZDZmZS00MjY4LWEyNGQtZDFkMDQ0YjBjNzk3XkEyXkFqcGdeQXVyMDM1NTcxMA@@._V1_.jpg",
    "artistName":"Rachel Singer",
    "artistDesc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ratione explicabo nihil expedita, labore, minima mollitia nisi molestias saepe illum, soluta non illo. Quas consectetur aperiam esse amet reiciendis, nesciunt.lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ratione explicabo nihil expedita, labore, minima mollitia nisi molestias saepe illum, soluta non illo. Quas consectetur aperiam esse amet reiciendis, nesciunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ratione explicabo nihil expedita, labore, minima mollitia nisi molestias saepe illum, soluta non illo. Quas consectetur aperiam esse amet reiciendis, nesciunt.",
    "imageAlt":"Rachel Singer"
  },{
    "artistImg":"http://www.gstatic.com/tv/thumb/persons/221106/221106_v9_ba.jpg",
    "artistName":"Christina Cabot",
    "artistDesc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ratione explicabo nihil expedita, labore, minima mollitia nisi molestias saepe illum, soluta non illo. Quas consectetur aperiam esse amet reiciendis, nesciunt.lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ratione explicabo nihil expedita, labore, minima mollitia nisi molestias saepe illum, soluta non illo. Quas consectetur aperiam esse amet reiciendis, nesciunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ratione explicabo nihil expedita, labore, minima mollitia nisi molestias saepe illum, soluta non illo. Quas consectetur aperiam esse amet reiciendis, nesciunt.",
    "imageAlt":"Christina Cabot"
  }
];
for (var i = 0; i< artist.length ; i++) {
  $("#row").append("<div class='grid-item' id='"+i+"' onClick='desc(artist[this.id])'><img src='"+artist[i].artistImg+"'><p>"+artist[i].artistName+"</p></div>");

  };

function desc(clicked_id) {
  

  let timerInterval
  for (var i = 0; i< artist.length ; i++) {
Swal.fire({
  title: 'Loading',
  html: 'I will load in <strong></strong> seconds.',
  timer: 1000,
  onBeforeOpen: () => {
    Swal.showLoading()
    timerInterval = setInterval(() => {
      Swal.getContent().querySelector('strong')
        .textContent = Swal.getTimerLeft()
    }, 100)
  },
  onClose: () => {
    Swal.fire({
  title: clicked_id.artistName,
  text: clicked_id.artistDesc,
  imageUrl: clicked_id.artistImg,
  imageWidth: 400,
  imageHeight: 400,
  "imageAlt": clicked_id.imageAlt,
  animation: false,
})
  }
}).then((result) => {
  if (
    // Read more about handling dismissals
    result.dismiss === Swal.DismissReason.timer
  ) {
    console.log('I was closed by the timer')
  }
})
}}
