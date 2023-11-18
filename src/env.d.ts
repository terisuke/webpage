/// <reference types="astro/client" />
// src/env.d.tsa
import 'alpinejs';
declare module '@alpinejs/collapse' {
    export default function (): void;
}
declare global {
    interface Window {
        Alpine: any;
    }
}
declare module 'alpinejs' {
    interface Alpine {
        $store: {
            theme: {
            isDark: boolean;
            toggle: () => void;
            };
        };
    }
    export interface Alpine {
        plugin: (plugin: any) => void;
        store: (name: string, value: object) => void;
        start: () => void;
    }
    const Alpine: Alpine;
    export default Alpine;
}