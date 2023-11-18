   // types/alpinejs.d.ts
declare module '@alpinejs/collapse' {
    const collapse: any;
    export default collapse;
}
declare module 'alpinejs' {
    export default interface Alpine {
    plugin: (plugin: any) => void;
    store: (name: string, value: object) => void;
    start: () => void;
}
const alpine: Alpine;
export = alpine;
}