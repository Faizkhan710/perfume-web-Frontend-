var product = sessionStorage.getItem("product_id");


var flowers  = [
  {id:"1", imgsrc:"product pages/images/perfume pics/chanel/1.jpg",title:"CH-001", price:"USD:150" , fragrance:"eau de fraiche",  model:"Astoria",},
  {id:"2", imgsrc:"product pages/images/perfume pics/chanel/2.jpg",title:"CH-002", price:"USD:850" , fragrance:"eau de parfum",  model:"Austin",},
  {id:"3", imgsrc:"product pages/images/perfume pics/davidoff/1.jpg",title:"DF-0101",price:"USD:750",fragrance:"eau de cologne",model:"B17",},
  {id:"4", imgsrc:"product pages/images/perfume pics/gucci/6203b00f71f9c.jpg",title:"GC-1001", price:"USD:250",fragrance:"eau de cologne",model:"Beat17",},
  {id:"5", imgsrc:"product pages/images/perfume pics/dior/Y0998004_C099600455_E01_GHC.jpg",title:"DR-6001", price:"USD:240",fragrance:"eau de fraiche", model:"Belle",},
  {id:"6", imgsrc:"product pages/images/perfume pics/gucci/548627_99999_0099_002_100_0000_Light-A-Song-for-the-Rose-Rose-100ml-eau-de-parfum.jpg",title:"GC-1002", price:"USD:350",fragrance:" eau de parfum", model:"Bilbao",},
  {id:"7", imgsrc:"product pages/images/perfume pics/gucci/Gucci-Guilty-Black-By-Gucci-the-perfume-shop-pk.jpg",title:"GC-1003", price:"USD:650" ,fragrance:"eau de cologne", model:"Academy",},
  {id:"8", imgsrc:"product pages/images/perfume pics/gucci/Gucci-Guilty-by-gucci-the-perfume-shop-330x396.jpg",title:"GC-1004", price:"USD:450" ,fragrance:"Eau de Toilette", model:"Agata",},
  {id:"9", imgsrc:"product pages/images/perfume pics/gucci/Thumb_Other-5772-87848-1-zoom.jpg",title:"GC-1005", price:"USD:800" ,fragrance:"Eau de Toilette", model:"Akira",},
  {id:"10", imgsrc:"product pages/images/perfume pics/dior/Y0996347_C099600764_E01_GHC.jpg",title:"DR-6002", price:"USD:980" ,fragrance:"woody/resinous", model:"Aurora",},
  {id:"11", imgsrc:"product pages/images/perfume pics/tom ford/s-l640 (1).jpg",title:"TM-8001 ", price:"USD:950" ,fragrance:"Eau de Toilette", model:"Beetle",},
  {id:"12", imgsrc:"product pages/images/perfume pics/dior/Y0996086_C099600732_E01_ZHC.jpg",title:"DR-6003", price:"USD:900" ,fragrance:"eau de fraiche", model:"Betty",},
  {id:"13", imgsrc:"product pages/images/perfume pics/chanel/3.jpg",title:"CH-004", price:"USD:650" ,fragrance:"woody/resinous", model:"BalMoral",},   
  {id:"14", imgsrc:"product pages/images/perfume pics/tom ford/tom-ford-tubereuse-nue-eau-de-parfum-50ml_16400143_31467960_2048.jpg",title:"TM-8002", price:"USD:750" ,fragrance:"eau de parfum", model:"Birba",},
  {id:"15", imgsrc:"product pages/images/perfume pics/davidoff/10.jpg",title:"DF-0105", price:"USD:450" ,fragrance:"Eau de Toilette", model:"Brian",},
  {id:"16", imgsrc:"product pages/images/perfume pics/tom ford/TOM-FORD-White-Patchouli-Eau-de-Parfum.jpg",title:"TM-8003", price:"USD:880" ,fragrance:"eau de cologne", model:"CaramBola",},
  {id:"17", imgsrc:"product pages/images/perfume pics/tom ford/Tom-Ford-Oud-Wood.jpg",title:"TM-8009",  price:"USD:170" ,fragrance:"eau de cologne",model:"Carson",},
  {id:"18", imgsrc:"product pages/images/perfume pics/tom ford/images.jpg",title:"TM-8004", price:"USD:500",fragrance:"Multifragrances",model:"Clark",},
  {id:"19", imgsrc:"product pages/images/perfume pics/tom ford/375x500.22963.jpg",title:"TM-8005", price:"USD:420",fragrance:"eau de parfum",model:"Albus",},
  {id:"20", imgsrc:"product pages/images/perfume pics/tom ford/375x500.1172jpg",title:"TM-8006", price:"USD:807",fragrance:"woody/resinous",model:"Atlante",},
  {id:"21", imgsrc:"product pages/images/perfume pics/davidoff/3.jpg",title:"DF-0109", price:"USD:999",fragrance:"eau de cologne",model:"Atlantis"},
  {id:"22", imgsrc:"product pages/images/perfume pics/davidoff/2.jpg",title:"DF-0110", price:"USD:750",fragrance:"eau de parfum",model:"Benny"},
  {id:"23", imgsrc:"product pages/images/perfume pics/chanel/4.jpg",title:"CH-005", price:"USD:990",fragrance:"eau de parfum",model:"Birch"},
  {id:"24", imgsrc:"product pages/images/perfume pics/chanel/5.jpg",title:"CH-006", price:"USD:658",fragrance:"eau de parfum",model:"Bount"},
 
]
for(var i of flowers){
      $(".opt").append("<option id="+i.id+">"+i.title+"</option>");
      $(".selection").append("<option id="+i.id+">"+i.title+"</option>");
      $("#18").hover(function(){
        $("#18").css("backgroundfragrance","red");
      });
  if(i.id == product){
    $("#opt2").val(i.title)
    $("#selection").val(i.title)
      $("#img").attr("src",i.imgsrc);
      document.getElementById("comp1").innerHTML = i.title;
      document.getElementById("comp2").innerHTML = i.price;
      // document.getElementById("comp3").innerHTML = i.description;
      document.getElementById("comp4").innerHTML = i.fragrance;
      
      $("#img11").attr("src",i.imgsrc);
      document.getElementById("comp11").innerHTML = i.title;
      document.getElementById("comp21").innerHTML = i.price;
      // document.getElementById("comp31").innerHTML = i.description;
      document.getElementById("comp41").innerHTML = i.fragrance;
  }
}
$("#selection").on("change",function(){
  fun();
})
$("#opt2").on("change",function(){
  fun();
})
function fun(){
    var id = $("#selection").val();
    var id2 = $("#opt2").val();
    for(var i of flowers){
    if(i.title == id){
      $("#img11").attr("src",i.imgsrc);
      document.getElementById("comp11").innerHTML = "Model: "+i.title;
      document.getElementById("comp21").innerHTML = "Price: " +i.price;
      // document.getElementById("comp31").innerHTML = "Description:"+i.description;
      document.getElementById("comp41").innerHTML = "Fragrance: " +i.fragrance;
      
    }
  }
  for(var i of flowers){
    if(i.title == id2){
        $("#img").attr("src",i.imgsrc);
        document.getElementById("comp1").innerHTML = "Model: "+i.title;
        document.getElementById("comp2").innerHTML = "Price: " +i.price;
        // document.getElementById("comp3").innerHTML = "Description:"+i.description;
        document.getElementById("comp4").innerHTML = "Fragrance: " +i.fragrance;
        
    }
    }
}