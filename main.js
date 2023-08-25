// Object

	let product={
		
		name:'lion',
		
		category:'animal',
		
		price:1000,
		
		color:'red',
	}
	
	console.log(product.price);
	
	console.log(product['name']);
		
	console.log(product.price=50000);
	
	console.log(product);
	
	document.write(JSON.stringify (product));
		
		
//nested Object

let product2={
		
		name:'lion',
		
		category:'animal',
		
		price:1000,
		
		color:{
			
			red:2000,
			
			green:6000,
		}
	}
	
	console.log(product2.color);
	
	console.log(product2.color.red);
		
	
		
			
		
		