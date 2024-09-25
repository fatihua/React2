//! .d.ts uzantısnı typescript global alan olarak görüyor. Ve bu uzantıdaki dosyalarda tanımladığımız typelara herhangi bir export-import yapmadan erişim sağlayabiliyoruz.

type AddFn = (text:string)=>Promise<void>
type ToggleFn = (todo:ITodoType) =>Promise<void>
type DeleteFn = (id:string|number) => Promise<void>

interface ITodoType {
    task:string;
    isDone:boolean;
    id:string | number;
}

interface ITodoListFn {
    toggleTodo:ToggleFn;
    deleteTodo:DeleteFn;
}