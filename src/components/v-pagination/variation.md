# Pagination

## Main Points

### Pagination Props:

```js
interface IPagination {
  rowsPerPage: number; // number represents max rows per page on each change
  totalRows: number; // number represents total rows count
  withInput?: boolean; // this is an optional props to display an input for changing page index
}
```

### UI:

- default UI

  ![image](../../assets/variation/images/pagination-1.png)

- with input UI

  ![image](../../assets/variation/images/pagination-2.png)

  > show input by passing "withInput" true

## How v-pagination works

by using "v-model" to make a to way binding between table and pagination.
the pagination component make a change on of the currentPage table respond to that change by changing the data depends on the currentPage number and rowsPerPage, using js slice method.
