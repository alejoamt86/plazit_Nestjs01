import { Injectable } from '@nestjs/common';
import { Product } from 'entities/product.entity';

@Injectable()
export class ProductsService {
    private counterId = 1;
    private products: Product[] = [
        { id: 1, name: 'fab', description: 'bla', price: 120, stock: 12, image: '' }
    ];


    findAll() {
        return this.products;
    }

    findOne(id: number) {
        return this.products.find((item) => item.id === id);
    }
   
    create(payload: any){
        this.counterId ++; 
        const newProduct = {
            id:this.counterId,
            ...payload,
        }
        this.products.push(newProduct);
        return newProduct;
    }
}
