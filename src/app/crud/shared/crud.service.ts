import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor() { }

  private items: any[] = [  
    { id: 1, name: 'Item 1', description: 'First Item' },
    { id: 2, name: 'Item 2', description: 'Second Item' }
  ];

  
  // Get all items
  getItems() {
    return this.items;
  }

  // Get item by ID
  getItemById(id: number) {
    return this.items.find(item => item.id === id);
  }

  // Add a new item
  addItem(item: any) {
    item.id = this.items.length + 1; // Auto-increment ID
    this.items.push(item);
  }

  // Update an existing item
  updateItem(updatedItem: any) {
    const index = this.items.findIndex(item => item.id === updatedItem.id);
    if (index !== -1) {
      this.items[index] = updatedItem;
    }
  }

  // Delete an item
  deleteItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
  }
}
