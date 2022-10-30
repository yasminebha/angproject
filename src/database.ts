interface ICollection<T> {
    add(item: T): void;
    remove(item: T): void;
    updateById(id: string, item: T): void
}

export class Collection {
    public name: string

}

const data = {
    products: [],
    catalogs: []
}