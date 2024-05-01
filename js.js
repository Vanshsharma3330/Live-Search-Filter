const product = [
	{
		id: 1,
		title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
		price: 109.95,
		description:
			"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
		category: "men's clothing",
		image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
		rating: { rate: 3.9, count: 120 },
		brand: "Fjallraven",
		color: "Black",
		size: "L",
		material: "Nylon",
	},
	{
		id: 2,
		title: "Mens Casual Premium Slim Fit T-Shirts ",
		price: 22.3,
		description:
			"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
		category: "men's clothing",
		image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
		rating: { rate: 4.1, count: 259 },
		brand: "Slim Fit",
		color: "White",
		size: "M",
		material: "Cotton",
	},
	{
		id: 3,
		title: "Mens Cotton Jacket",
		price: 55.99,
		description:
			"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
		category: "men's clothing",
		image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
		rating: { rate: 4.7, count: 500 },
		brand: "Cotton Jacket",
		color: "Tan",
		size: "XL",
		material: "Cotton",
	},
	{
		id: 4,
		title: "Mens Casual Slim Fit",
		price: 15.99,
		description:
			"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
		category: "men's clothing",
		image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
		rating: { rate: 2.1, count: 430 },
		brand: "Slim Fit",
		color: "Navy",
		size: "S",
		material: "Cotton",
	},
	{
		id: 5,
		title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
		price: 695,
		description:
			"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
		category: "jewelery",
		image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
		rating: { rate: 4.6, count: 400 },
		brand: "John Hardy",
		metal: "Gold and Silver",
		type: "Bracelet",
		occasion: "Everyday, Formal",
	},
	{
		id: 6,
		title: "Solid Gold Petite Micropave ",
		price: 168,
		description:
			"Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
		category: "jewelery",
		image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
		rating: { rate: 3.9, count: 70 },
		brand: "Hafeez Center",
		metal: "Gold",
		type: "Ring",
		occasion: "Engagement, Wedding",
	},
	{
		id: 7,
		title: "White Gold Plated Princess",
		price: 9.99,
		description:
			"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
		category: "jewelery",
		image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
		rating: { rate: 3, count: 400 },
		brand: "BIUMJ",
		metal: "White Gold Plated",
		type: "Ring",
		occasion: "Engagement, Wedding",
	},
	{
		id: 8,
		title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
		price: 10.99,
		description:
			"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
		category: "jewelery",
		image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
		rating: { rate: 1.9, count: 100 },
		brand: "Pierced Owl",
		metal: "Rose Gold Plated Stainless Steel",
		type: "Earrings",
		occasion: "Casual, Everyday",
	},
	{
		id: 9,
		title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
		price: 64,
		description:
			"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user's hardware configuration and operating system",
		category: "electronics",
		image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
		rating: { rate: 3.3, count: 203 },
		brand: "WD",
		type: "External Hard Drive",
		storage: "2TB",
		interface: "USB 3.0",
	},
	{
		id: 10,
		title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
		price: 109,
		description:
			"Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5",
		category: "electronics",
		image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
		rating: { rate: 2.9, count: 470 },
		brand: "SanDisk",
		type: "Internal SSD",
		storage: "1TB",
		interface: "SATA III 6 Gb/s",
	},
	{
		id: 11,
		title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
		price: 109,
		description:
			"3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
		category: "electronics",
		image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
		rating: { rate: 4.8, count: 319 },
		brand: "Silicon Power",
		type: "Internal SSD",
		storage: "256GB",
		interface: "SATA III 2.5",
	},
	{
		id: 12,
		title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
		price: 114,
		description:
			"Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
		category: "electronics",
		image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
		rating: { rate: 4.8, count: 400 },
		brand: "WD",
		type: "External Hard Drive",
		storage: "4TB",
		interface: "USB 3.0",
	},
	{
		id: 13,
		title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
		price: 599,
		description:
			"21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
		category: "electronics",
		image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
		rating: { rate: 2.9, count: 250 },
		brand: "Acer",
		type: "Monitor",
		screen_size: "21.5 inches",
		resolution: "1920 x 1080",
		panel_type: "IPS",
	},
	{
		id: 14,
		title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
		price: 999.99,
		description:
			"49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
		category: "electronics",
		image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
		rating: { rate: 2.2, count: 140 },
		brand: "Samsung",
		type: "Gaming Monitor",
		screen_size: "49 inches",
		resolution: "3840 x 1080",
		panel_type: "QLED",
	},
	{
		id: 15,
		title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
		price: 56.99,
		description:
			"Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
		category: "women's clothing",
		image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
		rating: { rate: 2.6, count: 235 },
		brand: "BIYLACLESEN",
		type: "Snowboard Jacket",
		color: "Black",
		size: "L",
		material: "Polyester",
	},
	{
		id: 16,
		title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
		price: 29.95,
		description:
			"100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
		category: "women's clothing",
		image: "https://m.media-amazon.com/images/I/71JXXNl8ESL._AC_UY1100_DpWeblab_.jpg",
		rating: { rate: 2.9, count: 340 },
		brand: "Lock and Love",
		type: "Moto Biker Jacket",
	},
	{
		id: 17,
		title: "Women's Casual Tunic Top",
		price: 18.99,
		description:
			"Soft and comfortable tunic top with a loose fit. Perfect for casual wear or lounging at home. Available in various colors and sizes.",
		category: "women's clothing",
		image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
		rating: { rate: 4.2, count: 180 },
	},
	{
		id: 18,
		title: "Men's Classic Denim Jeans",
		price: 34.99,
		description:
			"Classic denim jeans for men with a straight fit. Made from high-quality denim material. Ideal for everyday wear and versatile styling.",
		category: "men's clothing",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRADhA3-ET1GLhdyy2UE1VHUxs81Slsrhe9uQ&usqp=CAU",
		rating: { rate: 4.5, count: 320 },
	},
	{
		id: 19,
		title: "Wireless Bluetooth Earbuds",
		price: 29.99,
		description:
			"High-quality wireless earbuds with Bluetooth connectivity. Features noise cancellation and long battery life. Perfect for music lovers on the go.",
		category: "electronics",
		image: "https://images-cdn.ubuy.co.in/64cc485ffc4e1052607b798c-wireless-earbuds-bluetooth-5-0.jpg",
		rating: { rate: 4.0, count: 250 },
	},
	{
		id: 20,
		title: "Women's Floral Maxi Dress",
		price: 49.99,
		description:
			"Elegant floral maxi dress with a flowing, comfortable design. Perfect for summer events or casual outings.",
		category: "women's clothing",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF2gtws382d6fEpwXP2iyXtVVWGvK02B7E-Q&usqp=CAU",
		rating: { rate: 3.8, count: 190 },
	},
	{
		id: 21,
		title: "Men's Classic Leather Belt",
		price: 29.99,
		description:
			"Genuine leather belt with a classic design. Perfect for formal or casual wear. Available in various sizes and colors.",
		category: "men's accessories",
		image: "https://images-cdn.ubuy.co.in/65457d9d3e85c145e043f510-gelante-men-39-s-classic-dress-leather.jpg",
		rating: { rate: 4.3, count: 180 },
		brand: "Classic Belts",
		color: "Black",
		size: "32",
		material: "Leather",
	},
	{
		id: 22,
		title: "Women's Vintage Floral Dress",
		price: 39.99,
		description:
			"Elegant vintage floral dress with a flattering fit. Perfect for special occasions or evening events. Available in various sizes.",
		category: "women's clothing",
		image: "https://www.killreal.com/cdn/shop/products/zp-s484282-1_1024x.jpg?v=1681208956",
		rating: { rate: 4.5, count: 220 },
		brand: "Vintage Style",
		color: "Red",
		size: "M",
		material: "Polyester",
	},
	{
		id: 23,
		title: "Men's Waterproof Hiking Boots",
		price: 79.99,
		description:
			"Durable and waterproof hiking boots for outdoor adventures. Provides excellent traction and support. Available in various sizes.",
		category: "men's shoes",
		image: "https://foxelli.com/cdn/shop/products/MAINBLUEMen_s_Women_sHikingBoots_600x.jpg?v=1640085604",
		rating: { rate: 4.7, count: 350 },
		brand: "Outdoor Gear",
		color: "Blue",
		size: "10",
		material: "Leather",
	},
	{
		id: 24,
		title: "Women's Stylish Sunglasses",
		price: 19.99,
		description:
			"Fashionable and stylish sunglasses for women. Provides UV protection and a chic look. Available in various frame colors.",
		category: "women's accessories",
		image: "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/n/04/8393cb1f-4e53-4985-962c-1f5c6799b3dd.png",
		rating: { rate: 4.2, count: 150 },
		brand: "Chic Shades",
		color: "Black",
		material: "Plastic",
	},
	{
		id: 25,
		title: "Men's Casual Canvas Shoes",
		price: 34.99,
		description:
			"Comfortable and casual canvas shoes for everyday wear. Lightweight and breathable design. Available in various sizes and colors.",
		category: "men's shoes",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOw-SFT9MwaV_c783Z5N1TPAOx6_6N56_DjjZ54_nn3y1xdHRhKv-jAO4g0RwMCI8lhwE&usqp=CAU",
		rating: { rate: 4.0, count: 280 },
		brand: "Casual Comfort",
		color: "White",
		size: "9",
		material: "Canvas",
	},
	{
		id: 26,
		title: "iPhone 9",
		description: "An apple mobile which is nothing like apple",
		price: 549,
		discountPercentage: 12.96,
		rating: 4.69,
		stock: 94,
		brand: "Apple",
		category: "smartphones",
		thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
		image: "https://netrinoimages.s3.eu-west-2.amazonaws.com/2017/05/28/453344/208023/apple_iphone_9_all_colors_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2192865.jpg",
		rating: { rate: 4.0, count: 20 },
	},
	{
		id: 27,
		title: "iPhone X",
		description:
			"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
		price: 899,
		discountPercentage: 17.94,
		rating: 4.44,
		stock: 34,
		brand: "Apple",
		category: "smartphones",
		thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
		image: "https://spigen.in/cdn/shop/products/title_ipx_uh_grey_01_1200x1200.jpg?v=1622717391",
		rating: { rate: 3.0, count: 290 },
	},
	{
		id: 28,
		title: "Samsung Universe 9",
		description:
			"Samsung's new variant which goes beyond Galaxy to the Universe",
		price: 1249,
		discountPercentage: 15.46,
		rating: 4.09,
		stock: 36,
		brand: "Samsung",
		category: "smartphones",
		thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB5ujmnnI_kuz1iaTUB3uBDOjTtlYuRjaGMgFNrIXS_cnIGwzd_xdCpVXWmcrPpXgvGAo&usqp=CAU",
		rating: { rate: 3.0, count: 280 },
	},
	{
		id: 29,
		title: "OPPO F19",
		description: "OPPO F19 is officially announced on April 2021.",
		price: 280,
		discountPercentage: 17.91,
		rating: 4.3,
		stock: 123,
		brand: "OPPO",
		category: "smartphones",
		thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
		image: "https://bestsolution.lk/wp-content/uploads/2022/06/oppo-f19-pakistan-mobilegeeks.pk_.jpg",
		rating: { rate: 5.0, count: 280 },
	},
	{
		id: 30,
		title: "Huawei P30",
		description:
			"Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
		price: 499,
		discountPercentage: 10.58,
		rating: 4.09,
		stock: 32,
		brand: "Huawei",
		category: "smartphones",
		thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
		image: "https://media.takealot.com/covers_images/ea007be9bef14c32ab2098a4f1d521df/s-pdpxl.file",
		rating: { rate: 3.0, count: 280 },
	},
	{
		id: 31,
		title: "MacBook Pro",
		description:
			"MacBook Pro 2021 with mini-LED display may launch between September, November",
		price: 1749,
		discountPercentage: 11.02,
		rating: 4.57,
		stock: 83,
		brand: "Apple",
		category: "laptops",
		thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
		image: "https://admin.lapshop.in/images/media/2023/11/BJm2S29306.jpg",
		rating: { rate: 4.0, count: 280 },
	},
	{
		id: 32,
		title: "Samsung Galaxy Book",
		description:
			"Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
		price: 1499,
		discountPercentage: 4.15,
		rating: 4.25,
		stock: 50,
		brand: "Samsung",
		category: "laptops",
		thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwa-djcF_m1FzQl6aE1arffvp48DtpjDByAi7MbMnxUOP8D-uwy7KOiZhqKNLv8bDyKPA&usqp=CAU",
		rating: { rate: 4.0, count: 280 },
	},
];

let filteredData = [...product];
document.querySelector(
	".resultcount"
).innerHTML = `${product.length} result(s)`;

const displayItem = (items) => {
	document.getElementById("root").innerHTML = items
		.map((item) => {
			var { image, title, price, rating, description } = item;
			let roundedRating = Math.round(rating.rate); 
			let stars =
				"★".repeat(roundedRating) + "☆".repeat(5 - roundedRating); 
			return `
          <div class="card mx-auto shadow d-flex justify-content-center">
            <div class="card-img-1 w-auto mx-auto p-4 img-fluid"><img src="${image}" class="card-img-top"></div>
            <div class="card-body pt-2">
              <div class="card-ratings d-flex align-items-center justify-content-between">
                <p class="ratings text-warning fs-4 m-0">${stars}</p>
                <p class="card-text fw-bold fs-5">$ ${price}</p>
              </div>
              <h6 class="card-title mt-2">${
					title.length > 70 ? title.slice(0, 70) + "..." : title
				}</h6>
              ${
					description
						? `<p class="card-desc text-muted fs-7">${
								description.length > 200
									? description.slice(0, 200) + " . . ."
									: description
						  }</p>`
						: ""
				}
              </div>
          </div>
        `;
		})
		.join("");
};

//call
displayItem(product);

document.getElementById("searchBar").addEventListener("keyup", (e) => {
	const searchData = e.target.value.toLowerCase();
	filteredData = product.filter((item) => {
		return item.title.toLowerCase().includes(searchData);
	});
	updateResultCount(filteredData.length);
	displayItem(filteredData);
});

document.getElementById("priceRange").addEventListener("input", function () {
	rangeValue.textContent = "$ " + this.value + ".00";
	filteredData = product.filter((item) => item.price <= this.value);
	updateResultCount(filteredData.length);
	displayItem(filteredData);
});

document.getElementById("categoryFilter").addEventListener("change", (e) => {
	const selectedCategory = e.target.value;
	if (selectedCategory !== "all") {
		filteredData = filteredData.filter(
			(item) => item.category === selectedCategory
		);
	} else {
		filteredData = [...product];
	}
	updateResultCount(filteredData.length);
	displayItem(filteredData);
});

document.getElementById("colorFilter").addEventListener("change", (e) => {
	const selectedColor = e.target.value;
	if (selectedColor !== "all") {
		filteredData = filteredData.filter(
			(item) => item.color === selectedColor
		);
	} else {
		filteredData = [...product];
	}
	updateResultCount(filteredData.length);
	displayItem(filteredData);
});

document.getElementById("brandFilter").addEventListener("change", (e) => {
	const selectedBrand = e.target.value;
	if (selectedBrand !== "all") {
		filteredData = filteredData.filter(
			(item) => item.brand === selectedBrand
		);
	} else {
		filteredData = [...product];
	}
	updateResultCount(filteredData.length);
	displayItem(filteredData);
});

document.getElementById("ratingFilter").addEventListener("change", (e) => {
	const selectedRating = e.target.value;
	if (selectedRating !== "0") {
		filteredData = filteredData.filter(
			(item) => Math.round(item.rating.rate) >= selectedRating
		);
	} else {
		filteredData = [...product];
	}
	updateResultCount(filteredData.length);
	displayItem(filteredData);
});

function updateResultCount(count) {
	document.querySelector(".resultcount").innerHTML = `${count} result(s)`;
}

document.getElementById("removeFiltersBtn").addEventListener("click", () => {
	filteredData = [...product];
	updateResultCount(filteredData.length);
	displayItem(filteredData);
	// Reset the filter values
	document.getElementById("searchBar").value = "";
	document.getElementById("priceRange").value = "0";
	document.getElementById("rangeValue").textContent = "$ 0.00";
	document.getElementById("ratingFilter").value = "0";
	document.getElementById("categoryFilter").value = "all";
	document.getElementById("colorFilter").value = "all";
	document.getElementById("brandFilter").value = "all";
});
