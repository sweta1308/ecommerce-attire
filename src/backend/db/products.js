import { v4 as uuid } from "uuid";
import { top1, top2, top3, top4, top5, top6, top7, top8, bottom1, bottom2, bottom3, bottom4, bottom5, bottom6, bottom7, bottom8, dress1, dress2, dress3, dress4, dress5, dress6, dress7, ethnic1, ethnic2, ethnic3, ethnic4, ethnic5, ethnic6, ethnic7 } from "../../assets";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
	{
		_id: uuid(),
		title: 'High Necked Crop Top',
		image: top1,
		brand: "Zara",
		price: "499",
		originalPrice: "999",
		ratings: {
			value: "4.5",
			count: "2k"
		},
		categoryName: "Tops",
		outOfStock: false,
	},
  {
		_id: uuid(),
		title: 'Women Black Solid Trouser',
		image: bottom2,
		brand: "Levis",
		price: "1999",
		originalPrice: "2599",
		ratings: {
			value: "3.9",
			count: "870"
		},
		categoryName: "Bottoms",
		outOfStock: true,
	},
  {
		_id: uuid(),
		title: 'Ethnic Motifs Printed Thread Work Georgette Kurti With Sharara',
		image: ethnic5,
		brand: "Indya",
		price: "3900",
		originalPrice: "4598",
		ratings: {
			value: "4.6",
			count: "902"
		},
		categoryName: "Ethnic",
		outOfStock: false,
	},
	{
		_id: uuid(),
		title: 'Ethnic Motifs Top',
		image: top2,
		brand: "Sassafras",
		price: "389",
		originalPrice: "899",
		ratings: {
			value: "4",
			count: "1.9k"
		},
		categoryName: "Tops",
		outOfStock: false,
	},
  {
		_id: uuid(),
		title: 'Women Black Solid Shirt Dress',
		image: dress4,
		brand: "H&M",
		price: "3549",
		originalPrice: "3999",
		ratings: {
			value: "4.9",
			count: "691"
		},
		categoryName: "Dresses",
		outOfStock: false,
	},
	{
		_id: uuid(),
		title: 'Puff Sleeves Party Top',
		image: top3,
		brand: "Roadster",
		price: "689",
		originalPrice: "1459",
		ratings: {
			value: "3.8",
			count: "921"
		},
		categoryName: "Tops",
		outOfStock: true,
	},
  {
		_id: uuid(),
		title: 'Women Brown Track Pants',
		image: bottom4,
		brand: "Sassafras",
		price: "699",
		originalPrice: "942",
		ratings: {
			value: "3.1",
			count: "346"
		},
		categoryName: "Bottoms",
		outOfStock: false,
	},
	{
		_id: uuid(),
		title: 'Burgundy Hooded Solid Blouson Crop Top',
		image: top4,
		brand: "H&M",
		price: "499",
		originalPrice: "699",
		ratings: {
			value: "4",
			count: "640"
		},
		categoryName: "Tops",
		outOfStock: false,
	},
  {
		_id: uuid(),
		title: 'Smocked Cotton Dress',
		image: dress3,
		brand: "Zara",
		price: "2099",
		originalPrice: "2499",
		ratings: {
			value: '4',
			count: '2.4k'
		},
		categoryName: "Dresses",
		outOfStock: false,
	},
	{
		_id: uuid(),
		title: 'Striped Zari Kurta with Pyjamas & Dupatta',
		image: ethnic6,
		brand: "Indya",
		price: "5698",
		originalPrice: "6299",
		ratings: {
			value: "3.9",
			count: "1.2k"
		},
		categoryName: "Ethnic",
		outOfStock: false,
	},
  {
		_id: uuid(),
		title: 'Simplicity Wide Leg Jeans',
		image: bottom1,
		brand: "Urbanic",
		price: "1390",
		originalPrice: "1999",
		ratings: {
			value: "4.8",
			count: "1.3k"
		},
		categoryName: "Bottoms",
		outOfStock: false,
	},
  {
		_id: uuid(),
		title: 'Black Accordion Pleats Empire Dress',
		image: dress2,
		brand: "Tokyo Talkies",
		price: "769",
		originalPrice: "1199",
		ratings: {
			value: "3.7",
			count: "213"
		},
		categoryName: "Dresses",
		outOfStock: false,
	},
  {
		_id: uuid(),
		title: 'Women Navy Blue Straight Screen Print Pure Cotton Kurta & Palazzos With Dupatta',
		image: ethnic2,
		brand: "Tokyo Talkies",
		price: "1499",
		originalPrice: "1979",
		ratings: {
			value: "4",
			count: "496"
		},
		categoryName: "Ethnic",
		outOfStock: false,
	},
	{
		_id: uuid(),
		title: 'Olive Green & Beige Floral Georgette Blouson Top',
		image: top5,
		brand: "Urbanic",
		price: "759",
		originalPrice: "1239",
		ratings: {
			value: "4.7",
			count: "4k"
		},
		categoryName: "Tops",
		outOfStock: false,
	},
  {
		_id: uuid(),
		title: 'Boning A-line Dress',
		image: dress1,
		brand: "Urbanic",
		price: "1890",
		originalPrice: "2180",
		ratings: {
			value: "4.4",
			count: "1.2k"
		},
		categoryName: "Dresses",
		outOfStock: false,
	},
	{
		_id: uuid(),
		title: 'White & Yellow Floral Print Top',
		image: top6,
		brand: "Sassafras",
		price: "574",
		originalPrice: "949",
		ratings: {
			value: "3.6",
			count: "506"
		},
		categoryName: "Tops",
		outOfStock: true,
	},
  {
		_id: uuid(),
		title: 'Women Blue Pure Cotton Jogger High-Rise Non-Stretchable Clean Look Jeans',
		image: bottom8,
		brand: "Zara",
		price: "2399",
		originalPrice: "2879",
		ratings: {
			value: "4.3",
			count: "2.9k"
		},
		categoryName: "Bottoms",
		outOfStock: false,
	},
	{
		_id: uuid(),
		title: 'Positioning Printing Pullover T-shirt',
		image: top7,
		brand: "Urbanic",
		price: "829",
		originalPrice: "1499",
		ratings: {
			value: "4.3",
			count: "3.2k"
		},
		categoryName: "Tops",
		outOfStock: false,
	},
	{
		_id: uuid(),
		title: 'Patchwork Pullover T-shirt',
		image: top8,
		brand: "H&M",
		price: "690",
		originalPrice: "1189",
		ratings: {
			value: "4.6",
			count: "937"
		},
		categoryName: "Tops",
		outOfStock: false,
	},
	{
		_id: uuid(),
		title: 'Women Wide Twill Trousers',
		image: bottom3,
		brand: "H&M",
		price: "999",
		originalPrice: "1799",
		ratings: {
			value: "4.4",
			count: "1.7k"
		},
		categoryName: "Bottoms",
		outOfStock: false,
	},
  {
		_id: uuid(),
		title: 'Women Black Ethnic Motifs Printed Pure Cotton Kurta with Palazzos & With Dupatta',
		image: ethnic4,
		brand: "Libas",
		price: "1649",
		originalPrice: "2499",
		ratings: {
			value: "3.2",
			count: "1.4k"
		},
		categoryName: "Ethnic",
		outOfStock: true,
	},
  {
		_id: uuid(),
		title: 'Black & Beige Floral Printed Accordion Pleated Wrap Dress With Belt',
		image: dress6,
		brand: "Zara",
		price: "2875",
		originalPrice: "3200",
		ratings: {
			value: "4.6",
			count: "1.3k"
		},
		categoryName: "Dresses",
		outOfStock: false,
	},
	{
		_id: uuid(),
		title: 'Pocket Straight Leg Pants',
		image: bottom5,
		brand: "Dolce & Gabbana",
		price: "2390",
		originalPrice: "2999",
		ratings: {
			value: "4.7",
			count: "2.5k"
		},
		categoryName: "Bottoms",
		outOfStock: false,
	},
	{
		_id: uuid(),
		title: 'Women Olive Green Camouflage Printed Joggers',
		image: bottom6,
		brand: "Roadster",
		price: "2899",
		originalPrice: "3599",
		ratings: {
			value: "3.5",
			count: "879"
		},
		categoryName: "Bottoms",
		outOfStock: false,
	},
  {
		_id: uuid(),
		title: 'Ethnic Motifs Embroidered Sequinned Kurta with Trousers',
		image: ethnic7,
		brand: "Indya",
		price: "6999",
		originalPrice: "7599",
		ratings: {
			value: "4.7",
			count: "876"
		},
		categoryName: "Ethnic",
		outOfStock: false,
	},
	{
		_id: uuid(),
		title: 'Women Solid Pure Cotton Track Pants',
		image: bottom7,
		brand: "Tokyo Talkies",
		price: "639",
		originalPrice: "1279",
		ratings: {
			value: "3.7",
			count: "712"
		},
		categoryName: "Bottoms",
		outOfStock: false,
	},
  {
		_id: uuid(),
		title: 'Ethnic Motifs Embroidered Sequined Kurta with Palazzos & Dupatta',
		image: ethnic3,
		brand: "Sassafras",
		price: "1873",
		originalPrice: "2490",
		ratings: {
			value: "4.3",
			count: "2.3k"
		},
		categoryName: "Ethnic",
		outOfStock: false,
	},
	
	{
		_id: uuid(),
		title: 'Shirred A-Line Dress',
		image: dress5,
		brand: "Levis",
		price: "2199",
		originalPrice: "2870",
		ratings: {
			value: "4",
			count: "1.5k"
		},
		categoryName: "Dresses",
		outOfStock: true,
	},
	{
		_id: uuid(),
		title: 'Off White Ethnic Motifs Dress',
		image: dress7,
		brand: "Dolce & Gabbana",
		price: "1980",
		originalPrice: "2690",
		ratings: {
			value: "4",
			count: "3k"
		},
		categoryName: "Dresses",
		outOfStock: false,
	},
	{
		_id: uuid(),
		title: 'Women Charcoal Grey & Gold Ethnic Motifs Print Cotton Straight Kurta Palazzos Dupatta',
		image: ethnic1,
		brand: "Libas",
		price: "1379",
		originalPrice: "1899",
		ratings: {
			value: "4.5",
			count: "1k"
		},
		categoryName: "Ethnic",
		outOfStock: false,
	},
]
