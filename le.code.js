jQuery(function($){
   $('body').append("<div id='results'>");
   $('body').append("<div id='le-code'>");
   $('.code h1').live('click',function(){
        var $this = $(this);
 
        var $results = $("#results");

        $results.html(''); 

        try{
          var codes = $this.parents('.code').find('code').html();
          console.log(codes);
          (new Function(codes))();
        }catch(e){
           error(e.message);
        }

        $results.fadeIn('slow').delay(3 * 1000).fadeOut();

   });

   
});
