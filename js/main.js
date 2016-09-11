// Create var to get images
var $imgs = $('#imageGallery img'); 
// Create var to filter box              
var $search = $('#filter-search');   
 // Create an array called cache             
var cache = [];                                  

(function() {   
// For each image                                  
  $imgs.each(function() {                       
    cache.push({                            
      element: this,                           
      text: this.alt.trim().toLowerCase()         
    });
  });


  function filter() {                          
    var query = this.value.trim().toLowerCase();
    // For each entry in cache pass image   
    cache.forEach(function(img) {                
      var index = 0;                              
      if (query) {                             
        index = img.text.indexOf(query);          
      }
      $(img.element).closest('li')[0].style.display = index === -1 ? 'none' : '';
    });
  }
  if ('oninput' in $search[0]) {                 
    $search.on('input', filter);        
  } else {                               
    $search.on('keyup', filter);         
  }     
}());
