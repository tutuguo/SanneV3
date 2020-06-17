// JavaScript Document
document.getElementById('opgg').addEventListener('click', function()){
	document.querySelector('.modal-bg')	.style.display = 'flex';				
});

document.querySelector('.close').addEventListener('click',function(){
	document.querySelector('.bg-modal').style.display = 'none';
});