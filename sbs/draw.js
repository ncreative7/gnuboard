let test = $(".test").drawsvg({
    duration: 3000 ,
    
  })
  
  test.drawsvg("animate")
  
  let test2 = $(".test2").drawsvg({
    duration: 1000 ,
    stagger: 1000 , 
    callback: function(){
      console.log("완료")
    },
  })
  
  test2.drawsvg("animate")
  