# List Item

## Main Points

### List Item Props:

```js
interface IListItem {
  title: string;
  actionIcon?: string;
  avatar?: string;
  labelColor?: string;
  description?: string;
  sub_description?: string;
  icon?: string;
}
interface IListItemProps {
  item: IListItem;
}
interface IListGroupProps {
  item: {
    list: IListItem[],
    header: string,
  };
}
interface IListViewProps {
  listGroup: {
    list: IListItem[],
    header: string,
  }[];
}
```

### UI:

- default list item UI

  ![image](../../assets/variation/images/list-item-1.png)

- list item with description

  ![image](../../assets/variation/images/list-item-2.png)

- list item with sub description

  ![image](../../assets/variation/images/list-item-3.png)

- list item with avatar image

  ![image](../../assets/variation/images/list-item-4.png)

- list item with action icon

  ![image](../../assets/variation/images/list-item-5.png)

- list item with icon start

  ![image](../../assets/variation/images/list-item-6.png)

- list view group of items with list header

  ![image](../../assets/variation/images/list-item-7.png)

- disabled list item

  ![image](../../assets/variation/images/list-item-8.png)

## How v-list-item works

the list item component is responsible for item ui.
takes a props as obj with title required.
other object values are optional, there are slot tags for `icon` `avatar` `description` `sub-description` and `action`, and they will be activated if the obj contains the key representing the slot.

list view and list group components are responsible of display multiple list item UI
