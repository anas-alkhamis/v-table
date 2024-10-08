# Search

## Main Points

### Search Props:

```js
interface ISearch {
  delay?: number; // debounce time
  placeholder?: string; // search input placeholder
}
```

### UI:

- default UI

  ![image](../../assets/variation/images/search-1.png)

## How v-search works

v-search uses v-model it's a ref from the parent component.
v-search updates the v-model after stopping typing in the input with a default delay of 500 ms.

## How to use v-search

- using watch: listen to ref state that change by v-search
- check if the value is valid
- if not return all data
- else filter data depends on the searchableColumns and searchValue

```jsx
watch(searchValue, (to: string) => {
  if (!to?.trim().length || !schema1?.searchableColumns?.length) {
    dataTable.value = data1;
    totalRows.value = dataTable.value.length;
  } else {
    dataTable.value = data1.filter((item: { [key: string]: string }) => {
      const found = schema1?.searchableColumns?.find((searchKey: string) =>
        item[searchKey].toLowerCase().includes(to?.toLowerCase())
      );
      return found;
    });
    totalRows.value = dataTable.value.length;
  }
});
```
