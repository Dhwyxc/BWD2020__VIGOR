(function() {
    var  canvas = document.getElementById('canvasLIVE'),
    context = canvas.getContext('2d'),
    video = document.getElementById('videoLIVE');
    vendorUrl = window.URL || window.webkitURL;

    navigator.getMedia =    navigator.getUserMedia ||
                            navigator.webkitGetUserMedia ||
                            navigator.mozGetUserMedia ||
                            navigator.msGetUserMedia;
    
    navigator.getMedia({
        video: true,
        audio: false
    }, function(stream){
        try {
            video.srcObject = stream;
            video.play();
          } catch (error) {
            video.src = window.URL.createObjectURL(stream);
          }
    }, function(error){
        //An error occured
        //error.code
    });

})();