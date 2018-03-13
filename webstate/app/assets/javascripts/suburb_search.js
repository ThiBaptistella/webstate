var myVar;
		var listPox = 0;

		var suburbs = [
			{
				"SuburbName":"Perth",
				"PostCode":"6000",
				"image":"Perth.jpg",
				"Description":"Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit."
			},
			{
				"SuburbName":"City Beach",
				"PostCode":"6015",
				"image":"City beach.jpg",
				"Description":"Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit."
			},
			{
				"SuburbName":"Clarkson",
				"PostCode":"6030",
				"image":"Clarkson.jpg",
				"Description":"Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit."
			},
			{
				"SuburbName":"Fremantle",
				"PostCode":"6160",
				"image":"Fremantle.jpg",
				"Description":"Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit."
			},
			{
				"SuburbName":"Joondalup",
				"PostCode":"6027",
				"image":"Joondalup.jpg",
				"Description":"Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit."
			},
			{
				"SuburbName":"Leederville",
				"PostCode":"6007",
				"image":"Leederville.jpg",
				"Description":"Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit."
			},
			{
				"SuburbName":"Mandurah",
				"PostCode":"6210",
				"image":"Mandurah.jpg",
				"Description":"Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit."
			},
			{
				"SuburbName":"Northbridge",
				"PostCode":"6003",
				"image":"Northbridge.jpg",
				"Description":"Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit."
			},
			{
				"SuburbName":"Osborne Park",
				"PostCode":"6017",
				"image":"Osborne Park.jpg",
				"Description":"Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit."
			},
			{
				"SuburbName":"Scarborough",
				"PostCode":"6019",
				"image":"Scarborough.jpg",
				"Description":"Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit."
			},
			{
				"SuburbName":"Subiaco",
				"PostCode":"6008",
				"image":"Subiaco.jpg",
				"Description":"Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit."
			},
			{
				"SuburbName":"Ellenbrook",
				"PostCode":"6069",
				"image":"Ellenbrook.jpg",
				"Description":"Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit."
			}
		];

		//this function will find the image 
		
		function searching() {
			document.getElementById('imgTitle').innerHTML = "Properties in...";
			$("#divImage").css("display", "none");
			showLoading();
			myVar = setTimeout(hideLoading, 3000);
		}
		
		function showLoading() {
			$("#wait").css("display", "block");
		}
		function hideLoading() {
			$("#wait").css("display", "none");
			$("#divImage").css('background-image', 'url("../images/'+changeImage()+'")')
			$("#divImage").fadeIn('slow');
		}

		function changeImage()
		{

			var myElement = document.getElementById('txtPostCode');
			var myValue = myElement.value;
			var myPathFile = "";
			var mySuburbFinded = "No suburbs funded...";
			for (var i = suburbs.length - 1; i >= 0; i--) {
				
				document.getElementById(suburbs[i].SuburbName).style.display = "none";
				
				if(suburbs[i].SuburbName.toLowerCase()==myValue.toLowerCase())
				{
					mySuburbFinded = "Properties in " + suburbs[i].SuburbName;
					document.getElementById(suburbs[i].SuburbName).style.display = "block";
					myPathFile = suburbs[i].image;
				}
				else if(parseInt(suburbs[i].PostCode)==parseInt(myValue))
				{
					mySuburbFinded = "Properties in " + suburbs[i].SuburbName;
					document.getElementById(suburbs[i].SuburbName).style.display = "block";
					myPathFile = suburbs[i].image;
				}
			}

			document.getElementById('imgTitle').innerHTML = mySuburbFinded;
		
			return myPathFile;
		}
/*
function searching() {
	$("#loading").css("display", "block");
}
*/
function createListSuburbs()
{
	for (var i = suburbs.length - 1; i >= 0; i--) {
		createObjects(suburbs[i].SuburbName,suburbs[i].image,suburbs[i].Description);		
	}
}
function createObjects(subtitle,path,description)
{
	var sectionSub = document.getElementById('suburbList');
	var myArticle1 = document.createElement("Article");
	var mydiv1 = document.createElement("div");
	var mydiv2 = document.createElement("div");
	
	
	var mySubtitle = document.createElement("h2");
	var myParagraph = document.createElement("p");
    var myTextSubtitle = document.createTextNode(subtitle);
    var myTextParagraph = document.createTextNode(description);
    mySubtitle.appendChild(myTextSubtitle);
    mydiv1.appendChild(mySubtitle);
    myParagraph.appendChild(myTextParagraph);
    mydiv1.appendChild(myParagraph);
    myArticle1.appendChild(mydiv1);
    myArticle1.appendChild(mydiv2);
    $(mydiv2).css('width', '256');
    $(mydiv2).css('height', '192');
    $(mydiv2).css('background-image', 'url("Images/'+path+'")');
    myArticle1.id = subtitle;
    document.getElementById("suburbList").appendChild(myArticle1);
    //document.getElementById("suburbList").appendChild(mydiv2);
}

$(document).on('ready page:load', function () {
  createListSuburbs();
});