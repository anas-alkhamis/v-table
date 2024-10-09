# List Item

## Main Points

### List Item Props:

```js
interface IListItem {
  item: {
    title: string,
    actionIcon?: string,
    avatar?: string,
    labelColor?: string,
    description?: string,
    sub_description?: string,
    icon?: string,
  };
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

## How v-list-item works

the list item component is responsible for item ui.
takes a props as obj with title required.
other object values are optional, there are slot tags for `icon` `avatar` `description` `sub-description` and `action`, and they will be activated if the obj contains the key representing the slot
