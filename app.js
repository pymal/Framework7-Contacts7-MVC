
require.config({
    paths: {
        handlebars: "lib/handlebars",
        text: "lib/text",
        hbs: "lib/hbs"
    },
    shim: {
        handlebars: {
            exports: "Handlebars"
        }
    }
});

define('app', ['js/router', 'js/utils'], function(Router, Utils) {
	Router.init();
	var f7 = new Framework7({
		modalTitle: 'Contacts7',
		swipePanel: 'left',
        animateNavBackIcon: true
	});
    var mainView = f7.addView('.view-main', {
        dynamicNavbar: true
    });
	return {
		f7: f7,
		mainView: mainView,
		router: Router,
		utils: Utils
	};

});

/*
console.log('Start preloading');

// Preload hbs templates
require(["text!" + 'contact.html']);

// Preload hbs templates
require(["text!" + 'js/list/contact-list-item.hbs', "text!" + 'js/contact/contact.hbs', "text!" + 'js/contactEdit/contactEdit.hbs']);

// Preload views
require(['js/contact/contactView', 'js/contactEdit/contactEditView']);

// Preload controller
require(['js/contact/contactController', 'js/contactEdit/contactEditController']);

console.log('Finished preloading');
*/



function changePicture(file)
{
  console.log(file);

  var file = this.files[0];

  console.log(file);
  // Basic type checking.
  if (file.type.indexOf('image') < 0) {
      res.innerHTML = 'invalid type';
      return;
  }

  // Create a file reader
  var fReader = new FileReader();

  // Add complete behavior
  fReader.onload = function() {
      // Show the uploaded image to banner.
      img.src = fReader.result;

      // Save it when data complete.
      // Use your function will ensure the format is png.
      localStorage.setItem("imgData", getBase64Image(img));
      // You can just use as its already a string.
      // localStorage.setItem("imgData", fReader.result);
  };

  imgData = getBase64Image(file);

  hidden = document.getElementById('picture');
  hidden.val("data:image/png;base64," + dataImage);

  localStorage.setItem("imgData", imgData);

  bannerImg = document.getElementById('img_picture');
  bannerImg.src = "data:image/png;base64," + dataImage;
}





// Get all variables
//var bannerImage = document.getElementById('picture');
//var result = document.getElementById('res');
//var img = document.getElementById('tableBanner');
/*
// Add a change listener to the file input to inspect the uploaded file.
bannerImage.addEventListener('change', function() {
//function changePicture() {
  console.log(this);
    var file = this.files[0];
    // Basic type checking.
    if (file.type.indexOf('image') < 0) {
        res.innerHTML = 'invalid type';
        return;
    }

    // Create a file reader
    var fReader = new FileReader();

    // Add complete behavior
    fReader.onload = function() {
        // Show the uploaded image to banner.
        img.src = fReader.result;

        // Save it when data complete.
        // Use your function will ensure the format is png.
        localStorage.setItem("imgData", getBase64Image(img));
        // You can just use as its already a string.
        // localStorage.setItem("imgData", fReader.result);
    };

    // Read the file to DataURL format.
    fReader.readAsDataURL(file);
});*/

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

function fetchimage () {
    var dataImage = localStorage.getItem('imgData');
    img.src = "data:image/png;base64," + dataImage;
    // If you don't process the url with getBase64Image, you can just use
    // img.src = dataImage;
}

// Call fetch to get image from localStorage.
// So each time you reload the page, the image in localstorage will be
// put on tableBanner
//fetchimage();