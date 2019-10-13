import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';


@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  // styles: ['thead {color: #337AB7;}']
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number= 2;
  showImage: boolean =false;
  _listFilter:string;
  
  get listFilter(): string {
      return this._listFilter;
  }
  set listFilter(value:string) {
    this._listFilter = value;
    this.filteredProducts= this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts:IProduct[];
  products: IProduct[]=[
  {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2019",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png",
      "ssNcode": "1111119999"
  },
  {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2019",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "assets/images/hammer.png",
      "ssNcode": "2222222222"
  },
  {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2019",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png",
      "ssNcode": "3333333333"
  },
  {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2019",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "assets/images/saw.png",
      "ssNcode": "4444444444"
  },
  {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2018",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "assets/images/xbox-controller.png",
      "ssNcode": "5555555555"
  }
  ];

    constructor() {
    this.filteredProducts = this.products;
    this.listFilter = 'cart'
    }

    onRatingClicked(message:string): void {
      this.pageTitle ='Product List' + message;
    }

    performFilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct ) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);

    }

      toggleImage(): void {
      this.showImage = !this.showImage;
    }
     ngOnInit(): void {
       console.log('In OnInit');
     }
  }

  // constructor() {

    // if( this.products == null || this.products == undefined || this.products.length  == 0){
    //   this.productExist = false;
    // }else{
    //   this.productExist = true;
    // };

  // }

  // doesProductsExist(): boolean {
  //   if (this.products == null || this.products == undefined || this.products.length == 0) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  // isListgreaterThanZero(): boolean {
  //   if (this.products == null || this.products == undefined) {
  //     return false;
  //   }

  //   if (this.products.length < 0) {
  //     return true;
  //   } else {
  //     return false;

  //   }
  // }

  // doesTitlecontainsX(): boolean {
  //   // if title has X return true
  //   if (this.pageTitle.includes("X")) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  // }

  // doesTitlelengthMoreThan22(): boolean {
  //   // if(this.pageTitle == null){
  //   //   return false;
  //   // };

  //   // if (this.pageTitle == undefined){
  //   //   return false;
  //   // };
  //   // if (this.pageTitle == ''){
  //   //   return false;
  //   // };

  //   if (this.pageTitle == null || this.pageTitle == undefined || this.pageTitle == '') {
  //     return false;
  //   } else {

  //     if (this.pageTitle.length > 22) {
  //       return true;
  //     } else {
  //       return false;
  //     }

  //   }
  // }

