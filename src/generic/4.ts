/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Item {
  title: string;
}

class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component<Item> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};