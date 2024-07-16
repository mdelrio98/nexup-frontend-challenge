// Extend this enum if necessary
export enum ProductCategory {
  Fruit = "Fruit",
  Vegetables = "Vegetables",
  Meat = "Meat",
}

export type FilterCategory = ProductCategory | 'All';
